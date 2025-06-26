import { useState } from "react";
import { useToast } from "@/lib/use-toast";
import {
  getUserFriendlyErrorMessage,
  logError,
  isEnvironmentError,
} from "@/lib/errorUtils";

interface ApiErrorState {
  error: string | null;
  isLoading: boolean;
}

interface UseApiErrorHandlingReturn {
  error: string | null;
  isLoading: boolean;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
  handleApiCall: <T>(
    apiCall: () => Promise<T>,
    options?: {
      onSuccess?: (result: T) => void;
      onError?: (error: Error) => void;
      showToast?: boolean;
      loadingMessage?: string;
      successMessage?: string;
    },
  ) => Promise<T | null>;
  clearError: () => void;
}

export const useApiErrorHandling = (): UseApiErrorHandlingReturn => {
  const [state, setState] = useState<ApiErrorState>({
    error: null,
    isLoading: false,
  });
  const { toast } = useToast();

  const setError = (error: string | null) => {
    setState((prev) => ({ ...prev, error }));
  };

  const setLoading = (isLoading: boolean) => {
    setState((prev) => ({ ...prev, isLoading }));
  };

  const clearError = () => {
    setState((prev) => ({ ...prev, error: null }));
  };

  const getToastMessage = (error: Error): string => {
    if (isEnvironmentError(error)) {
      return "Execute o aplicativo desktop para acessar esta funcionalidade";
    }

    return "Ocorreu um erro. Tente novamente.";
  };

  const handleApiCall = async <T>(
    apiCall: () => Promise<T>,
    options: {
      onSuccess?: (result: T) => void;
      onError?: (error: Error) => void;
      showToast?: boolean;
      loadingMessage?: string;
      successMessage?: string;
    } = {},
  ): Promise<T | null> => {
    const { onSuccess, onError, showToast = true, successMessage } = options;

    try {
      setLoading(true);
      setError(null);

      const result = await apiCall();

      if (onSuccess) {
        onSuccess(result);
      }

      if (showToast && successMessage) {
        toast({
          title: "Sucesso",
          description: successMessage,
        });
      }

      return result;
    } catch (error) {
      const errorObj =
        error instanceof Error ? error : new Error("Erro desconhecido");
      const errorMessage = getUserFriendlyErrorMessage(errorObj);

      logError(errorObj, "API call");
      setError(errorMessage);

      if (onError) {
        onError(errorObj);
      }

      if (showToast) {
        toast({
          variant: "destructive",
          title: "Erro",
          description: getToastMessage(errorObj),
        });
      }

      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    error: state.error,
    isLoading: state.isLoading,
    setError,
    setLoading,
    handleApiCall,
    clearError,
  };
};

export default useApiErrorHandling;
