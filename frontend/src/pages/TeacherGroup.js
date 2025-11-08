import React, { useMemo, useState } from 'react';
import { Container, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import TEACHERS from '../data/teachers';
import TeacherCard from '../components/TeacherCard';

const groupLabel = (key) => {
  switch (key) {
    case 'provost': return 'Provost';
    case 'past-provost': return 'Past Provost';
    case 'warden': return 'Warden';
    case 'teacher': return 'Teachers';
    case 'others': return 'Other Staff';
    default: return key;
  }
};

const TeacherGroup = () => {
  const { group } = useParams();
  const [selected, setSelected] = useState(null);

  // for now filter static TEACHERS; ideally fetch from API /api/teachers?group=...
  const members = useMemo(() => {
    if (group === 'others') return TEACHERS.filter(() => false); // placeholder
    return TEACHERS.filter(t => t.group === group);
  }, [group]);

  return (
    <Container sx={{ mt: 10, mb: 6 }}>
      <Typography variant="h4" gutterBottom>{groupLabel(group)}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Click a card to view more details.
      </Typography>

      <Grid container spacing={3}>
        {members.length === 0 && (
          <Grid item xs={12}>
            <Typography color="text.secondary">No entries yet for this group. You can add them from the admin backend later.</Typography>
          </Grid>
        )}
        {members.map(t => (
          <Grid item xs={12} sm={6} md={4} key={t.id}>
            <TeacherCard teacher={t} onClick={(teacher) => setSelected(teacher)} />
          </Grid>
        ))}
      </Grid>

      <Dialog open={Boolean(selected)} onClose={() => setSelected(null)} fullWidth maxWidth="sm">
        {selected && (
          <>
            <DialogTitle>{selected.name}</DialogTitle>
            <DialogContent dividers>
              <img src={selected.photo} alt={selected.name} style={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 8 }} />
              <Typography variant="h6" sx={{ mt: 2 }}>{selected.position}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{selected.bio}</Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>Email: {selected.email}</Typography>
              <Typography variant="body2">Phone: {selected.phone}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelected(null)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default TeacherGroup;