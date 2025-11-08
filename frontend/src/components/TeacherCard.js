// import React from 'react';
// import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';

// const TeacherCard = ({ teacher, onClick }) => {
//   return (
//     <Card sx={{ height: '100%' }}>
//       <CardActionArea onClick={() => onClick(teacher)}>
//         <CardMedia
//           component="img"
//           height="100"
//           image={teacher.photo}
//           alt={teacher.name}
//           sx={{ objectFit: 'cover' }}
//         />
//         <CardContent>
//           <Typography variant="h6" component="div">{teacher.name}</Typography>
//           <Typography variant="body2" color="text.secondary">{teacher.position}</Typography>
//           <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
//             {teacher.email} • {teacher.phone}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };

// export default TeacherCard;






import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea, CardActions, Button } from '@mui/material';

const TeacherCard = ({ teacher, onClick }) => {
  return (
    // <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    //   <CardActionArea onClick={() => onClick(teacher)}>
    //     <CardMedia
    //       component="img"
    //       height="180"
    //       image={teacher.photo}
    //       alt={teacher.name}
    //       sx={{ objectFit: 'cover' }}
    //     />
    //     <CardContent>
    //       <Typography variant="h6" component="div">{teacher.name}</Typography>
    //       <Typography variant="body2" color="text.secondary">{teacher.position}</Typography>
    //       <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
    //         {teacher.email} • {teacher.phone}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>

    //   {/* ✅ Extra button with URL */}
    //   {teacher.url && (
    //     <CardActions sx={{ justifyContent: 'flex-end', pt: 0 }}>
    //       <Button
    //         size="small"
    //         color="primary"
    //         variant="outlined"
    //         onClick={(e) => {
    //           e.stopPropagation(); // prevents opening modal when clicking button
    //           window.open(teacher.url, '_blank'); // opens new tab
    //         }}
    //       >
    //         Visit Profile
    //       </Button>
    //     </CardActions>
    //   )}
    // </Card>



    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
  <CardActionArea onClick={() => onClick(teacher)}>
    <CardMedia
      component="img"
      height="180"
      image={teacher.photo}
      alt={teacher.name}
      sx={{ objectFit: 'cover' }}
    />
    <CardContent>
      <Typography variant="h6">{teacher.name}</Typography>
      <Typography variant="body2" color="text.secondary">{teacher.position}</Typography>
      <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
        {teacher.email} • {teacher.phone}
      </Typography>
    </CardContent>
  </CardActionArea>

  <CardActions sx={{ justifyContent: 'flex-end', pt: 0 }}>
    <Button
      size="small"
      color="primary"
      variant="outlined"
      onClick={(e) => { e.stopPropagation(); window.open(teacher.url, '_blank'); }}
    >
      More About
    </Button>
  </CardActions>
</Card>

  );
};

export default TeacherCard;
