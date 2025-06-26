import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Material } from '@/lib/api';

interface MaterialComboboxProps {
  materials: Material[];
  value: string | null;
  onValueChange: (value: string | null) => void;
  placeholder?: string;
  disabled?: boolean;
  excludeIds?: string[];
  showStock?: boolean;
  className?: string;
}

export function MaterialCombobox({
  materials,
  value,
  onValueChange,
  placeholder = "Buscar material...",
  disabled = false,
  excludeIds = [],
  showStock = true,
  className,
}: MaterialComboboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const availableMaterials = useMemo(() => {
    return materials.filter(material => !excludeIds.includes(material.id));
  }, [materials, excludeIds]);

  const selectedMaterial = useMemo(() => {
    return value ? availableMaterials.find(material => material.id === value) : null;
  }, [value, availableMaterials]);

  const filteredMaterials = useMemo(() => {
    if (!searchValue) return availableMaterials.slice(0, 50);
    
    const searchLower = searchValue.toLowerCase();
    return availableMaterials
      .filter(material => 
        material.codigo_material_completo.toLowerCase().includes(searchLower) ||
        material.descricao_completa.toLowerCase().includes(searchLower) ||
        material.material_composicao.toLowerCase().includes(searchLower)
      )
      .slice(0, 20);
  }, [availableMaterials, searchValue]);

  const getStockBadgeVariant = (stock: number, minStock?: number): "default" | "destructive" | "secondary" => {
    if (stock <= 0) return 'destructive';
    if (minStock && stock <= minStock) return 'secondary';
    return 'default';
  };

  const formatStockInfo = (material: Material) => {
    const stock = material.estoque_atual ?? 0;
    const minStock = material.estoque_minimo;
    
    if (minStock !== undefined && minStock !== null) {
      return `${stock}/${minStock} ${material.unidade_medida}`;
    }
    return `${stock} ${material.unidade_medida}`;
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (!isOpen) setIsOpen(true);
  };

  const handleMaterialSelect = (material: Material) => {
    onValueChange(material.id);
    setIsOpen(false);
    setSearchValue('');
  };

  const handleClear = () => {
    onValueChange(null);
    setSearchValue('');
    setIsOpen(false);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="relative">
        <div className="relative flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={selectedMaterial ? selectedMaterial.codigo_material_completo : placeholder}
            value={searchValue}
            onChange={handleSearchChange}
            onFocus={() => setIsOpen(true)}
            disabled={disabled}
            className="pl-10 pr-20"
          />
          {selectedMaterial && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="absolute right-1 h-8 px-2 text-xs"
            >
              Limpar
            </Button>
          )}
        </div>
        
        {selectedMaterial && !searchValue && (
          <div className="mt-2 p-2 bg-muted rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-sm font-medium">
                  {selectedMaterial.codigo_material_completo}
                </span>
                <span className="text-sm text-muted-foreground">
                  {selectedMaterial.descricao_completa}
                </span>
                <span className="text-xs text-muted-foreground">
                  {selectedMaterial.material_composicao}
                </span>
              </div>
              {showStock && (
                <Badge 
                  variant={getStockBadgeVariant(
                    selectedMaterial.estoque_atual ?? 0, 
                    selectedMaterial.estoque_minimo
                  )}
                  className="text-xs"
                >
                  {formatStockInfo(selectedMaterial)}
                </Badge>
              )}
            </div>
          </div>
        )}
      </div>

      {isOpen && (searchValue || !selectedMaterial) && (
        <Card className="absolute top-full left-0 right-0 z-50 mt-1 max-h-80 overflow-hidden">
          <CardContent className="p-0">
            <div className="max-h-80 overflow-y-auto">
              {filteredMaterials.length === 0 ? (
                <div className="p-4 text-center text-muted-foreground">
                  {searchValue ? "Nenhum material encontrado." : "Digite para buscar materiais..."}
                </div>
              ) : (
                <div className="divide-y">
                  {filteredMaterials.map((material) => {
                    const stock = material.estoque_atual ?? 0;
                    const minStock = material.estoque_minimo;
                    
                    return (
                      <button
                        key={material.id}
                        type="button"
                        onClick={() => handleMaterialSelect(material)}
                        className="w-full p-3 text-left hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col gap-1 flex-1 min-w-0">
                            <span className="font-mono text-sm font-medium">
                              {material.codigo_material_completo}
                            </span>
                            <span className="text-sm text-muted-foreground truncate">
                              {material.descricao_completa}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {material.material_composicao}
                            </span>
                          </div>
                          {showStock && (
                            <div className="flex flex-col items-end gap-1 ml-3">
                              <Badge 
                                variant={getStockBadgeVariant(stock, minStock)}
                                className="text-xs"
                              >
                                {formatStockInfo(material)}
                              </Badge>
                              {stock <= 0 && (
                                <span className="text-xs text-destructive font-medium">
                                  Sem estoque
                                </span>
                              )}
                              {minStock && stock > 0 && stock <= minStock && (
                                <span className="text-xs text-amber-600 font-medium">
                                  Estoque baixo
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {isOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
