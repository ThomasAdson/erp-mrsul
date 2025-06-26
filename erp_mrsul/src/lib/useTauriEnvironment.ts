import { useState, useEffect } from "react";

interface TauriEnvironment {
  isTauriContext: boolean;
  isLocalhost: boolean;
  debugInfo: {
    url: string;
    userAgent: string;
    hasTauriGlobal: boolean;
    hasTauriAPI: boolean;
    hasTauriInvoke: boolean;
    timestamp: string;
  };
}

export const useTauriEnvironment = (): TauriEnvironment => {
  const [environment, setEnvironment] = useState<TauriEnvironment>({
    isTauriContext: false,
    isLocalhost: false,
    debugInfo: {
      url: "",
      userAgent: "",
      hasTauriGlobal: false,
      hasTauriAPI: false,
      hasTauriInvoke: false,
      timestamp: "",
    },
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const win = window as any;
    const hasTauriGlobal = win.__TAURI__ !== undefined;
    const hasTauriAPI = win.__TAURI_INTERNALS__ !== undefined;
    const hasTauriInvoke = win.__TAURI_INVOKE__ !== undefined;

    const isTauriContext = hasTauriGlobal || hasTauriAPI || hasTauriInvoke;
    const isLocalhost = window.location.href.includes("localhost");

    setEnvironment({
      isTauriContext,
      isLocalhost,
      debugInfo: {
        url: window.location.href,
        userAgent: navigator.userAgent,
        hasTauriGlobal,
        hasTauriAPI,
        hasTauriInvoke,
        timestamp: new Date().toISOString(),
      },
    });
  }, []);

  return environment;
};

export default useTauriEnvironment;
