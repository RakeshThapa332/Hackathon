import { Box } from "@mui/material";
import {
  Upload,
  MessageSquare,
  BarChart3,
  FileText,
} from "lucide-react";

import PrimaryButton from "../common/Button";

function QuickActions() {
  return (
    <Box
      display="flex"
      gap={2}
      flexWrap="wrap"
    >
      <PrimaryButton
        startIcon={<Upload size={18} />}
      >
        Upload
      </PrimaryButton>

      <PrimaryButton
        startIcon={<MessageSquare size={18} />}
      >
        AI Chat
      </PrimaryButton>

      <PrimaryButton
        startIcon={<BarChart3 size={18} />}
      >
        Analytics
      </PrimaryButton>

      <PrimaryButton
        startIcon={<FileText size={18} />}
      >
        Reports
      </PrimaryButton>
    </Box>
  );
}

export default QuickActions;