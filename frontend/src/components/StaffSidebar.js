import React from 'react';
import { Box, List, ListItemButton, ListItemText, ListItemAvatar, Avatar, Typography, Divider } from '@mui/material';

/**
 * Props:
 * - groups: array of { key, label }
 * - selectedKey
 * - onSelect(key)
 */
const StaffSidebar = ({ groups, selectedKey, onSelect }) => {
  return (
    <Box sx={{ width: { xs: 280, md: 320 }, p: 1 }}>
      <Typography variant="h6" sx={{ px: 1, mb: 1 }}>Staff Categories</Typography>
      <Divider />
      <List>
        {groups.map(g => (
          <ListItemButton key={g.key} selected={selectedKey === g.key} onClick={() => onSelect(g.key)}>
            <ListItemText primary={g.label} secondary={g.subLabel} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default StaffSidebar;