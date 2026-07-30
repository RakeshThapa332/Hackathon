import { useMemo, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const contacts = [
  {
    id: 1,
    name: "Research Team",
    status: "Online",
    avatar: "RT",
    lastMessage: "Please review the uploaded proposal.",
  },
  {
    id: 2,
    name: "Finance Office",
    status: "Away",
    avatar: "FO",
    lastMessage: "Budget approved for Phase II.",
  },
  {
    id: 3,
    name: "Project Manager",
    status: "Online",
    avatar: "PM",
    lastMessage: "Meeting starts at 2 PM.",
  },
  {
    id: 4,
    name: "Supervisor",
    status: "Offline",
    avatar: "SP",
    lastMessage: "Update the project milestones.",
  },
];

const initialMessages = [
  {
    id: 1,
    sender: "Research Team",
    text: "Hi! Have you uploaded the revised proposal?",
    own: false,
    time: "09:45",
  },
  {
    id: 2,
    sender: "You",
    text: "Yes, I uploaded it this morning.",
    own: true,
    time: "09:47",
  },
  {
    id: 3,
    sender: "Research Team",
    text: "Great. We'll review it today.",
    own: false,
    time: "09:48",
  },
];

function Chat() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages);

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "You",
        text: message,
        own: true,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setMessage("");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Team Chat
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Communicate with your project members and collaborators.
      </Typography>

      <Card elevation={2}>
        <CardContent sx={{ p: 0 }}>
          <Stack direction={{ xs: "column", md: "row" }} sx={{ height: 650 }}>
            {/* Contacts */}
            <Box
              sx={{
                width: { xs: "100%", md: 320 },
                borderRight: { md: "1px solid" },
                borderColor: "divider",
              }}
            >
              <Box sx={{ p: 2 }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Search conversations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Divider />

              <List sx={{ p: 0 }}>
                {filteredContacts.map((contact) => (
                  <ListItemButton
                    key={contact.id}
                    selected={selectedContact.id === contact.id}
                    onClick={() => setSelectedContact(contact)}
                  >
                    <ListItemAvatar>
                      <Avatar>{contact.avatar}</Avatar>
                    </ListItemAvatar>

                    <ListItemText
                      primary={contact.name}
                      secondary={contact.lastMessage}
                    />

                    <Chip
                      size="small"
                      color={
                        contact.status === "Online"
                          ? "success"
                          : contact.status === "Away"
                          ? "warning"
                          : "default"
                      }
                      label={contact.status}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Box>

            {/* Conversation */}
            <Stack sx={{ flex: 1 }}>
              <Paper
                elevation={0}
                sx={{
                  px: 3,
                  py: 2,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar>{selectedContact.avatar}</Avatar>

                    <Box>
                      <Typography fontWeight={700}>
                        {selectedContact.name}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {selectedContact.status}
                      </Typography>
                    </Box>
                  </Stack>

                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </Stack>
              </Paper>

              <Box
                sx={{
                  flex: 1,
                  overflowY: "auto",
                  p: 3,
                  bgcolor: "background.default",
                }}
              >
                {messages.map((msg) => (
                  <Box
                    key={msg.id}
                    sx={{
                      display: "flex",
                      justifyContent: msg.own ? "flex-end" : "flex-start",
                      mb: 2,
                    }}
                  >
                    <Paper
                      elevation={1}
                      sx={{
                        px: 2,
                        py: 1.5,
                        maxWidth: 420,
                        bgcolor: msg.own ? "primary.main" : "background.paper",
                        color: msg.own ? "#fff" : "text.primary",
                        borderRadius: 3,
                      }}
                    >
                      <Typography variant="body1">
                        {msg.text}
                      </Typography>

                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          mt: 1,
                          opacity: 0.75,
                          textAlign: "right",
                        }}
                      >
                        {msg.time}
                      </Typography>
                    </Paper>
                  </Box>
                ))}
              </Box>

              <Divider />

              <Box sx={{ p: 2 }}>
                <Stack direction="row" spacing={2}>
                  <TextField
                    fullWidth
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSend();
                    }}
                  />

                  <IconButton>
                    <AttachFileIcon />
                  </IconButton>

                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={handleSend}
                  >
                    Send
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Chat;