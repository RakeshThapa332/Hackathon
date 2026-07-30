import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import PrimaryButton from "./Button";

function CustomModal({
  open,
  onClose,
  title,
  children,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>{children}</DialogContent>

      <DialogActions>
        <PrimaryButton
          variant="outlined"
          onClick={onClose}
        >
          {cancelText}
        </PrimaryButton>

        <PrimaryButton
          onClick={onConfirm}
        >
          {confirmText}
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
}

export default CustomModal;