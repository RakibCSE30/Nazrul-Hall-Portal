import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Avatar, Typography, Box, Button } from '@mui/material';
import HALL_SHANGSOD from '../data/hallShangsod';
import HallSidebar from '../components/HallSidebar';

/**
 * Dedicated member detail route: /hall-shangsod/:id
 * Shows member's big profile and a right-side nav (sticky).
 */
const HallMemberDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = useMemo(() => HALL_SHANGSOD.find(m => m.id === id) || null, [id]);

  if (!member) {
    return (
      <Container sx={{ mt: 10 }}>
        <Typography variant="h5">Member not found</Typography>
        <Button onClick={() => navigate('/hall-shangsod')}>Back to Hall Shangsod</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box display="flex" gap={3} flexDirection={{ xs: 'column', sm: 'row' }}>
                <Avatar src={member.photo} alt={member.name} sx={{ width: { xs: 220, sm: 300 }, height: { xs: 220, sm: 300 }, borderRadius: 2 }} />
                <Box>
                  <Typography variant="h3">{member.name}</Typography>
                  <Typography variant="h6" color="text.secondary" gutterBottom>{member.role}</Typography>

                  <Box mt={2}>
                    <Typography variant="body1"><strong>Designation:</strong> {member.position || member.role}</Typography>
                    <Typography variant="body1"><strong>Phone:</strong> {member.phone}</Typography>
                    <Typography variant="body1"><strong>Email:</strong> {member.email}</Typography>
                    <Typography variant="body1"><strong>Blood Group:</strong> {member.blood}</Typography>
                    <Typography variant="body1" mt={1}><strong>Responsibilities:</strong> {member.responsibilities || member.info || '—'}</Typography>
                    <Typography variant="body1" mt={1}><strong>Office Hours:</strong> {member.officeHours || 'As posted'}</Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography variant="body2" color="text.secondary">{member.bio || member.info}</Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ position: 'sticky', top: 96 }}>
            <HallSidebar members={HALL_SHANGSOD} selectedId={member.id} onSelect={() => {}} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HallMemberDetail;