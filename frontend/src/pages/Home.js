// import React from 'react';
// import { Container, Typography, Button } from '@mui/material';

// const Home = () => (
//   <Container style={{ textAlign: 'center', marginTop: '100px' }}>
//     <Typography variant="h3">স্বাগতম – নজরুল হল পোর্টাল</Typography>
//     <Typography variant="h6">JKKNIU নজরুল হল</Typography>
//     <img src="https://jkkniu.edu.bd/wp-content/uploads/2020/08/logo.png" alt="Logo" style={{ width: '180px' }} />
//     <br /><br />
//     <Button variant="contained" size="large" href="/dining">টোকেন কালেক্ট</Button>
//   </Container>
// );
// export default Home;

import React from 'react';
import Slider from 'react-slick';
import { Container, Typography, Button } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { title: 'Welcome to Nazrul Hall', desc: 'JKKNIU - Nazrul Hall', img: 'https://i.imgur.com/5u6Yv.jpg' },
  { title: 'Dining Token System', desc: 'Fast and easy token', img: 'https://i.imgur.com/8Km9tLL.jpg' },
  { title: 'Students Directory', desc: 'Search by room, dept, batch', img: 'https://i.imgur.com/2nCt3Sbl.jpg' },
];

const Home = () => {
  const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 4000 };

  return (
    <Container style={{ marginTop: 90 }}>
      <Slider {...settings}>
        {slides.map((s, idx) => (
          <div key={idx} style={{ position: 'relative' }}>
            <img src={s.img} alt={s.title} style={{ width: '100%', height: 420, objectFit: 'cover', borderRadius: 12 }} />
            <div style={{ position: 'absolute', top: '20%', left: '6%', color: 'white' }}>
              <Typography variant="h3" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{s.title}</Typography>
              <Typography variant="h6" style={{ marginTop: 8, textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{s.desc}</Typography>
              <Button variant="contained" color="secondary" href="/dining" style={{ marginTop: 12 }}>Collect Token</Button>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Home;
