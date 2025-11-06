import React, { useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";

// ফেক ছবি URL জেনারেটর (পরে তোমার backend থেকে আসবে)
const getRandomImage = () =>
  `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`;

// ব্লাড গ্রুপ লিস্ট
const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

// ১০০০+ ফেক ডাটা জেনারেট করো
const generateStudents = (batch) => {
  const students = [];
  for (let i = 1; i <= 1200; i++) {
    // ১২০০+ করে দিলাম 😎
    students.push({
      id: (batch - 48) * 1000 + i,
      name: `স্টুডেন্ট ${i} (ব্যাচ ${batch})`,
      room: `${Math.floor(Math.random() * 6) + 1}0${
        Math.floor(Math.random() * 9) + 1
      }`,
      phone: `017${Math.floor(10000000 + Math.random() * 90000000)}`,
      blood: bloodGroups[Math.floor(Math.random() * bloodGroups.length)],
      photo: getRandomImage(),
      batch: batch,
    });
  }
  return students;
};

const fakeData = {
  48: generateStudents(48),
  49: generateStudents(49),
  50: generateStudents(50),
  51: generateStudents(51),
  52: generateStudents(52),
  53: generateStudents(53),
};

const batches = [48, 49, 50, 51, 52, 53];

const Students = () => {
  const [selectedBatch, setSelectedBatch] = useState(50);
  const students = fakeData[selectedBatch] || [];

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "photo",
      headerName: "ছবি",
      width: 100,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="student"
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            objectFit: "cover",
          }}
          loading="lazy" // লেজি লোড
        />
      ),
    },
    { field: "name", headerName: "নাম", width: 250 },
    { field: "room", headerName: "রুম", width: 120 },
    { field: "phone", headerName: "ফোন", width: 180 },
    {
      field: "blood",
      headerName: "ব্লাড গ্রুপ",
      width: 130,
      renderCell: (params) => (
        <span
          style={{
            fontWeight: "bold",
            color: params.value.includes("O") ? "red" : "blue",
          }}
        >
          {params.value}
        </span>
      ),
    },
  ];

  return (
    <Container style={{ marginTop: "80px" }}>
      <Typography variant="h3" gutterBottom textAlign="center" color="primary">
        নজরুল হল ছাত্র তালিকা
      </Typography>

      <Box textAlign="center" mb={4}>
        <FormControl style={{ width: "250px" }}>
          <InputLabel>ব্যাচ সিলেক্ট করুন</InputLabel>
          <Select
            value={selectedBatch}
            label="ব্যাচ সিলেক্ট করুন"
            onChange={(e) => setSelectedBatch(e.target.value)}
          >
            {batches.map((batch) => (
              <MenuItem key={batch} value={batch}>
                ব্যাচ {batch}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="h6" mt={2}>
          মোট ছাত্র: {students.length}+
        </Typography>
      </Box>

      <Box style={{ height: 700, width: "100%" }}>
        {/* <DataGridPro
          rows={students}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20, 50, 100]}
          disableSelectionOnClick
          loading={students.length === 0}
          sx={{
            '& .MuiDataGrid-virtualScroller': {
              overflowX: 'auto',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#1e88e5',
              color: 'white',
              fontWeight: 'bold',
            },
          }}
        /> */}
        <DataGridPro
          rows={students}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20, 50, 100]}
          disableSelectionOnClick
          loading={students.length === 0}
          sx={(theme) => ({
            "& .MuiDataGrid-virtualScroller": {
              overflowX: "auto",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "#2e7d32" // Dark green for dark mode
                  : "#c8e6c9", // Light green for light mode
              color: theme.palette.mode === "dark" ? "white" : "#1b5e20", // Dark green text in light mode
              fontWeight: "bold",
            },
            "& .MuiDataGrid-row": {
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.04)",
              },
            },
          })}
        />
      </Box>
    </Container>
  );
};

export default Students;
