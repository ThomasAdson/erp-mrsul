import { useState } from "react";
import { AlertTriangle, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTauriEnvironment } from "@/lib/useTauriEnvironment";

interface TauriEnvironmentWarningProps {
  className?: string;
  showDebugInfo?: boolean;
}

const TauriEnvironmentWarning = ({
  className = "",
  showDebugInfo = false,
}: TauriEnvironmentWarningProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const { isTauriContext, isLocalhost, debugInfo } = useTauriEnvironment();

  // Show warning if we're in browser context (especially localhost)
  const shouldShowWarning = !isTauriContext && isLocalhost && isVisible;

  if (!shouldShowWarning) {
    return null;
  }

  return (
    <Card className={`border-orange-500 bg-orange-50 shadow-lg ${className}`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-semibold text-orange-900 mb-2">
              ⚠️ Você está no navegador web, não no aplicativo desktop!
            </h3>
            <div className="text-sm text-orange-800 space-y-2">
              <p>
                <strong>Para usar todas as funcionalidades do sistema:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Feche esta aba do navegador</li>
                <li>
                  Use a janela do <strong>aplicativo desktop</strong> que abriu
                  automaticamente
                </li>
                <li>
                  Se não abriu, execute:{" "}
                  <code className="bg-orange-200 px-1 rounded">
                    npm run tauri dev
                  </code>
                </li>
              </ol>

              <div className="mt-3 p-3 bg-orange-100 border border-orange-300 rounded">
                <p className="font-medium text-orange-900">
                  💡 Dica: O aplicativo desktop tem o ícone do Tauri na barra de
                  tarefas
                </p>
              </div>

              {showDebugInfo && (
                <details className="mt-3">
                  <summary className="cursor-pointer font-medium text-orange-900 hover:text-orange-700">
                    🔧 Informações técnicas (clique para expandir)
                  </summary>
                  <div className="mt-2 p-2 bg-orange-100 rounded text-xs font-mono">
                    <div>
                      <strong>URL:</strong> {debugInfo.url}
                    </div>
                    <div>
                      <strong>Tauri Global:</strong>{" "}
                      {debugInfo.hasTauriGlobal ? "✅" : "❌"}
                    </div>
                    <div>
                      <strong>Tauri API:</strong>{" "}
                      {debugInfo.hasTauriAPI ? "✅" : "❌"}
                    </div>
                    <div>
                      <strong>Tauri Invoke:</strong>{" "}
                      {debugInfo.hasTauriInvoke ? "✅" : "❌"}
                    </div>
                    <div>
                      <strong>Is Tauri Context:</strong>{" "}
                      {isTauriContext ? "✅" : "❌"}
                    </div>
                    <div>
                      <strong>Is Localhost:</strong> {isLocalhost ? "✅" : "❌"}
                    </div>
                    <div>
                      <strong>User Agent:</strong> {debugInfo.userAgent}
                    </div>
                    <div>
                      <strong>Timestamp:</strong> {debugInfo.timestamp}
                    </div>
                  </div>
                </details>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="h-6 w-6 text-orange-600 hover:text-orange-900 hover:bg-orange-200"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TauriEnvironmentWarning;
