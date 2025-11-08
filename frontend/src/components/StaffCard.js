import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea, Box, Chip } from '@mui/material';

/**
 * Updated StaffCard: clickable and shows big image + details
 * Props:
 * - staff: staff object
 * - onClick: function
 */
const StaffCard = ({ staff, onClick }) => {
  return (
    <Card elevation={3} sx={{ borderRadius: 2, overflow: 'hidden', height: '100%' }}>
      <CardActionArea onClick={() => onClick?.(staff)}>
        <CardMedia
          component="img"
          height="220"
          image={staff.photo}
          alt={staff.name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="start" mb={1}>
            <Box>
              <Typography variant="h6">{staff.name}</Typography>
              <Typography variant="body2" color="text.secondary">{staff.designation}</Typography>
            </Box>
            {staff.type && <Chip label={staff.type} size="small" color="primary" />}
          </Box>

          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Phone:</strong> {staff.phone} <br />
            <strong>Blood:</strong> {staff.blood}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {staff.info}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default StaffCard;