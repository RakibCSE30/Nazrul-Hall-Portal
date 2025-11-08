import React from 'react';
import { Box, List, ListItemButton, ListItemAvatar, Avatar, ListItemText, Typography, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

/**
 * HallSidebar
 * Props:
 * - members: array of member objects
 * - selectedId: currently selected member id
 * - onSelect: optional callback (will also navigate)
 *
 * This sidebar is intended to sit on the LEFT (desktop) and open from left on mobile.
 */
const HallSidebar = ({ members = [], selectedId, onSelect }) => {
  const navigate = useNavigate();

  const handleClick = (m) => {
    // navigate to left-side member-specific route
    navigate(`/hall-shangsod/${m.id}`);
    if (onSelect) onSelect(m);
  };

  return (
    <Box sx={{ width: { xs: 300, md: 280 }, p: 1 }}>
      <Typography variant="h6" sx={{ px: 1, mb: 1 }}>
        Hall Shangsod
      </Typography>
      <Divider />
      <List>
        {members.map((m) => (
          <ListItemButton
            key={m.id}
            selected={selectedId === m.id}
            onClick={() => handleClick(m)}
            sx={{ py: 1.25 }}
          >
            <ListItemAvatar>
              <Avatar src={m.photo} alt={m.name} />
            </ListItemAvatar>
            <ListItemText primary={m.name} secondary={m.role} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default HallSidebar;