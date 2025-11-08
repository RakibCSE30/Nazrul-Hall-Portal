import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';

const TeacherCard = ({ teacher, onClick }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea onClick={() => onClick(teacher)}>
        <CardMedia
          component="img"
          height="160"
          image={teacher.photo}
          alt={teacher.name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">{teacher.name}</Typography>
          <Typography variant="body2" color="text.secondary">{teacher.position}</Typography>
          <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
            {teacher.email} • {teacher.phone}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TeacherCard;