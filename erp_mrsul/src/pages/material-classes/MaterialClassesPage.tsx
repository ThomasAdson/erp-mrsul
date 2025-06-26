import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash2, Plus, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllMaterialClasses, deleteMaterialClass, createMaterialClass } from "@/lib/api";
import { MaterialClass } from "@/types";
import { useApiErrorHandling } from "@/lib/useApiErrorHandling";
import * as XLSX from 'xlsx';

// Excel column headers mapping
const EXCEL_HEADERS = {
  code: 'Código',
  name: 'Nome'
};

const MaterialClassesPage = () => {
  const [classes, setClasses] = useState<MaterialClass[]>([]);
  const { error, isLoading, handleApiCall, clearError } = useApiErrorHandling();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Excel functions
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      classes.map(cls => ({
        [EXCEL_HEADERS.code]: cls.code,
        [EXCEL_HEADERS.name]: cls.name
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Classes");
    XLSX.writeFile(workbook, "classes_materiais.xlsx");
  };

  const handleGenerateTemplate = () => {
    const template = [{
      [EXCEL_HEADERS.code]: "",
      [EXCEL_HEADERS.name]: ""
    }];
    const worksheet = XLSX.utils.json_to_sheet(template);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Template");
    XLSX.writeFile(workbook, "template_classes.xlsx");
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        let successCount = 0;
        let errorCount = 0;

        // Import classes one by one
        for (const item of jsonData as Array<Record<string, any>>) {
          try {
            const classData = {
              code: item[EXCEL_HEADERS.code],
              name: item[EXCEL_HEADERS.name]
            };
            
            await handleApiCall(() => createMaterialClass(classData), {
              showToast: false
            });
            successCount++;
          } catch (err) {
            errorCount++;
            console.error('Erro ao importar classe:', item, err);
          }
        }

        // Show summary toast
        handleApiCall(() => Promise.resolve(), {
          successMessage: `Importação concluída! ${successCount} classes importadas com sucesso.${errorCount ? ` ${errorCount} erros encontrados.` : ''}`,
          showToast: true
        });

        loadClasses();
      } catch (err: any) {
        handleApiCall(() => Promise.reject(new Error("Erro ao processar arquivo Excel: " + err.message)));
      }
      // Reset file input
      if (fileInputRef.current) fileInputRef.current.value = '';
    };
    reader.readAsArrayBuffer(file);
  };

  useEffect(() => {
    loadClasses();
  }, []);

  const loadClasses = async () => {
    await handleApiCall(() => getAllMaterialClasses(), {
      onSuccess: (data) => setClasses(data),
      showToast: false, // We'll show the error in the UI instead
    });
  };

  const handleDelete = async (id: string) => {
    if (
      window.confirm("Tem certeza que deseja excluir esta classe de material?")
    ) {
      await handleApiCall(() => deleteMaterialClass(id), {
        onSuccess: () => {
          setClasses(classes.filter((c) => c.id !== id));
        },
        successMessage: "Classe de material excluída com sucesso",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Classes de Materiais
        </h2>
        <div className="flex gap-2">
          <Button onClick={handleExport}>Exportar</Button>
          <Button onClick={handleGenerateTemplate}>Template</Button>
          <div className="relative">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept=".xlsx,.xls"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  handleImport(e);
                }
              }}
            />
            <Button onClick={() => fileInputRef.current?.click()}>
              Importar
            </Button>
          </div>
          <Link to="/material-classes/create">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Nova Classe
            </Button>
          </Link>
        </div>
      </div>

      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-red-900 mb-2">
                  Erro ao carregar dados
                </h4>
                <p className="text-sm text-red-800 mb-3">
                  {error.includes("aplicativo desktop")
                    ? "Funcionalidade disponível apenas no aplicativo desktop."
                    : "Ocorreu um erro ao tentar carregar as classes de materiais."}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={loadClasses}
                    disabled={isLoading}
                    className="border-red-300 text-red-700 hover:bg-red-100"
                  >
                    {isLoading ? "Carregando..." : "Tentar novamente"}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearError}
                    className="text-red-700 hover:bg-red-100"
                  >
                    Ocultar erro
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Lista de Classes</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Removed duplicate buttons */}
          {isLoading ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                Carregando classes de materiais...
              </div>
            </div>
          ) : error && classes.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <AlertCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Não foi possível carregar os dados.</p>
              <p className="text-sm mt-1">
                {error.includes("aplicativo desktop")
                  ? "Use o aplicativo desktop para acessar esta funcionalidade."
                  : "Verifique sua conexão e tente novamente."}
              </p>
            </div>
          ) : classes.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Plus className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Nenhuma classe de material cadastrada.</p>
              <Link to="/material-classes/create" className="inline-block mt-2">
                <Button variant="outline" size="sm">
                  Criar primeira classe
                </Button>
              </Link>
            </div>
          ) : (
            <div className="rounded-md border">
              <table className="min-w-full divide-y divide-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-3.5 text-left text-sm font-semibold">
                      Código
                    </th>
                    <th className="px-4 py-3.5 text-left text-sm font-semibold">
                      Nome
                    </th>
                    <th className="px-4 py-3.5 text-right text-sm font-semibold">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {classes.map((materialClass) => (
                    <tr
                      key={materialClass.id}
                      className="hover:bg-muted/50 transition-colors"
                    >
                      <td className="whitespace-nowrap px-4 py-4 text-sm">
                        <Link
                          to={`/material-classes/${materialClass.id}`}
                          className="text-primary hover:underline"
                        >
                          {materialClass.code}
                        </Link>
                      </td>
                      <td className="px-4 py-4 text-sm">
                        {materialClass.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-right">
                        <div className="flex justify-end gap-2">
                          <Link
                            to={`/material-classes/${materialClass.id}/edit`}
                          >
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(materialClass.id)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MaterialClassesPage;
