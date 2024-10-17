import { useState } from "react";

type SnackbarSeverity = "success" | "error";

export const useSnackbar = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<SnackbarSeverity>("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const showSnackbar = (message: string, severity: SnackbarSeverity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  return {
    snackbarOpen,
    snackbarSeverity,
    snackbarMessage,
    showSnackbar,
    closeSnackbar,
  };
};
