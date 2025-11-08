import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea, Box } from '@mui/material';

/**
 * Standardized HallMemberCard — fixed image height & full-height card so grid items are same size.
 * Props:
 * - member: object { id, name, role, photo, ... }
 * - onClick: function
 */
const HallMemberCard = ({ member, onClick }) => {
  return (
    <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea
        onClick={() => onClick?.(member)}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: '100%' }}
      >
        <CardMedia
          component="img"
          image={member.photo}
          alt={member.name}
          sx={{
            height: 180, // fixed image height for uniformity
            objectFit: 'cover',
            width: '100%',
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Box>
            <Typography variant="h6" gutterBottom noWrap>
              {member.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {member.role}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HallMemberCard;