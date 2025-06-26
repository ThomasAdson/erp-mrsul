import { useTauriEnvironment } from "@/lib/useTauriEnvironment";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DebugInfoProps {
  compact?: boolean;
}

const DebugInfo = ({ compact = false }: DebugInfoProps) => {
  const { isTauriContext, isLocalhost, debugInfo } = useTauriEnvironment();

  // Only show in development
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  if (compact) {
    return (
      <div className="text-xs text-muted-foreground mb-2 p-2 bg-muted/30 rounded border">
        <strong>Dev Info:</strong>{" "}
        {isTauriContext ? "🖥️ Desktop" : "🌐 Browser"} | URL:{" "}
        {debugInfo.url.replace(/^https?:\/\//, "")}
      </div>
    );
  }

  return (
    <Card className="mb-4 border-blue-200 bg-blue-50">
      <CardHeader>
        <CardTitle className="text-sm text-blue-900">
          🔧 Debug Info - Context:{" "}
          {isTauriContext ? "✅ Tauri Desktop App" : "❌ Browser/Proxy"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs space-y-2 text-blue-800">
          <div>
            <strong>URL:</strong> {debugInfo.url}
          </div>
          <div>
            <strong>Environment:</strong> {process.env.NODE_ENV}
          </div>
          <div>
            <strong>Localhost:</strong> {isLocalhost ? "✅" : "❌"}
          </div>
          <div>
            <strong>Tauri Global:</strong>{" "}
            {debugInfo.hasTauriGlobal ? "✅" : "❌"}
          </div>
          <div>
            <strong>Tauri API:</strong> {debugInfo.hasTauriAPI ? "✅" : "❌"}
          </div>
          <div>
            <strong>Tauri Invoke:</strong>{" "}
            {debugInfo.hasTauriInvoke ? "✅" : "❌"}
          </div>
          <div>
            <strong>Timestamp:</strong> {debugInfo.timestamp}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DebugInfo;
