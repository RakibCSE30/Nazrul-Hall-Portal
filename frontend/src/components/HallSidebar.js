import React from 'react';
import { Box, List, ListItemButton, ListItemAvatar, Avatar, ListItemText, Typography, Divider } from '@mui/material';

/**
 * Props:
 * - members: array of member objects
 * - selectedId: id of selected member
 * - onSelect: function(member)
 */
const HallSidebar = ({ members, selectedId, onSelect }) => {
  return (
    <Box sx={{ width: { xs: 300, md: 320 }, p: 1 }}>
      <Typography variant="h6" sx={{ px: 1, mb: 1 }}>Hall Shangsod</Typography>
      <Divider />
      <List>
        {members.map(m => (
          <ListItemButton
            key={m.id}
            selected={selectedId === m.id}
            onClick={() => onSelect(m)}
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