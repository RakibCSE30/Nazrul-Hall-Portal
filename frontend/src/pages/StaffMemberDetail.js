import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, CardContent, Avatar, Typography, Box, Button } from '@mui/material';
import STAFF from '../data/staff';
import StaffSidebar from '../components/StaffSidebar';

/**
 * Staff member dedicated detail page (route: /staffs/:id)
 */
const StaffMemberDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = STAFF.find(s => s.id === id);

  if (!member) {
    return (
      <Container sx={{ mt: 10 }}>
        <Typography variant="h5">Staff member not found</Typography>
        <Button onClick={() => navigate('/staffs')}>Back to Staffs</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      <Card>
        <CardContent>
          <Box display="flex" gap={3} flexDirection={{ xs: 'column', md: 'row' }}>
            <Avatar src={member.photo} alt={member.name} sx={{ width: { xs: 200, md: 300 }, height: { xs: 200, md: 300 }, borderRadius: 2 }} />
            <Box>
              <Typography variant="h3">{member.name}</Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>{member.designation}</Typography>

              <Box mt={2}>
                <Typography variant="body1"><strong>Phone:</strong> {member.phone}</Typography>
                <Typography variant="body1"><strong>Blood Group:</strong> {member.blood}</Typography>
                <Typography variant="body1"><strong>Extra info:</strong> {member.info}</Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default StaffMemberDetail;