/**
 * Utility functions for error handling and user-friendly messaging
 */

export interface ErrorInfo {
  message: string;
  isEnvironmentError: boolean;
  isCritical: boolean;
  suggestedAction: string;
}

/**
 * Analyzes an error and returns structured information about it
 */
export const analyzeError = (error: Error | string): ErrorInfo => {
  const message = typeof error === "string" ? error : error.message;
  const lowerMessage = message.toLowerCase();

  // Tauri environment errors
  if (
    lowerMessage.includes("tauri api not available") ||
    lowerMessage.includes("navegador web") ||
    lowerMessage.includes("__tauri__")
  ) {
    return {
      message: "Funcionalidade disponível apenas no aplicativo desktop",
      isEnvironmentError: true,
      isCritical: true,
      suggestedAction:
        'Use a janela do aplicativo desktop que abriu ao executar "npm run tauri dev"',
    };
  }

  // Network/connection errors
  if (
    lowerMessage.includes("network") ||
    lowerMessage.includes("fetch") ||
    lowerMessage.includes("connection")
  ) {
    return {
      message: "Erro de conexão",
      isEnvironmentError: false,
      isCritical: false,
      suggestedAction: "Verifique sua conexão com a internet e tente novamente",
    };
  }

  // Validation errors
  if (
    lowerMessage.includes("validation") ||
    lowerMessage.includes("required") ||
    lowerMessage.includes("invalid")
  ) {
    return {
      message: "Dados inválidos",
      isEnvironmentError: false,
      isCritical: false,
      suggestedAction: "Verifique os campos obrigatórios e tente novamente",
    };
  }

  // Permission errors
  if (
    lowerMessage.includes("permission") ||
    lowerMessage.includes("unauthorized") ||
    lowerMessage.includes("forbidden")
  ) {
    return {
      message: "Acesso negado",
      isEnvironmentError: false,
      isCritical: true,
      suggestedAction: "Você não tem permissão para executar esta ação",
    };
  }

  // Default case
  return {
    message: message || "Erro desconhecido",
    isEnvironmentError: false,
    isCritical: false,
    suggestedAction: "Tente novamente ou entre em contato com o suporte",
  };
};

/**
 * Gets a user-friendly error message for display in the UI
 */
export const getUserFriendlyErrorMessage = (error: Error | string): string => {
  const errorInfo = analyzeError(error);
  return errorInfo.message;
};

/**
 * Gets a suggested action for the user based on the error
 */
export const getErrorSuggestedAction = (error: Error | string): string => {
  const errorInfo = analyzeError(error);
  return errorInfo.suggestedAction;
};

/**
 * Determines if an error is related to the Tauri environment
 */
export const isEnvironmentError = (error: Error | string): boolean => {
  const errorInfo = analyzeError(error);
  return errorInfo.isEnvironmentError;
};

/**
 * Determines if an error is critical and should be prominently displayed
 */
export const isCriticalError = (error: Error | string): boolean => {
  const errorInfo = analyzeError(error);
  return errorInfo.isCritical;
};

/**
 * Logs error information for debugging purposes
 */
export const logError = (error: Error | string, context?: string): void => {
  const errorInfo = analyzeError(error);
  const errorObj = typeof error === "string" ? new Error(error) : error;

  console.group(`🚨 Error${context ? ` in ${context}` : ""}`);
  console.error("Original error:", errorObj);
  console.log("Analysis:", errorInfo);
  console.log("Stack trace:", errorObj.stack);
  console.groupEnd();
};

export default {
  analyzeError,
  getUserFriendlyErrorMessage,
  getErrorSuggestedAction,
  isEnvironmentError,
  isCriticalError,
  logError,
};
