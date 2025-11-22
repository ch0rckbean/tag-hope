// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box,Stepper,Step,StepLabel } from '@mui/material';
import { motion } from 'framer-motion';

const childrenList = [
  { id: 1, name: '짱구', imgSrc: '/img/ch1.jpeg', age: 5 },
  { id: 2, name: '훈이', imgSrc: '/img/ch2.jpeg', age: 5 },
  { id: 3, name: '맹구', imgSrc: '/img/ch3.png', age: 5 },
  { id: 4, name: '봉미선', imgSrc: '/img/ch4.jpeg', age: 6 },
];

export default function Home() {
  const nav = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background:'#FEFE91'}}>
      {/* 눈/곰돌이 이펙트 */}
      
      {/* 메인 배너 */}
      <Container sx={{ textAlign: 'center', py: 8 }}>
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Typography variant="h3" sx={{ fontWeight:'bold', mb:2, color:'#FF90BB'}}>
            희망을 태그하다
          </Typography>
          <Typography variant="h6" sx={{ mb:4, color:'#C68EFD' }}>
따뜻한 마음을 나눠요
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ background:'#E9A5F1' }}
            onClick={() => document.getElementById('children')?.scrollIntoView({ behavior:'smooth'})}
          >
            후원하러 가기 
          </Button>
        </motion.div>
      </Container>

      {/* 아동 리스트 */}
      <Container id="children" sx={{ py: 6 }}>
        <Typography variant="h4" sx={{ mb:4, textAlign:'center', color:'#FF90BB', fontWeight:'bold' }}>
          오늘의 추천 아동 
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {childrenList.map((child, index) => (
            <Grid key={child.id} item xs={12} sm={6} md={4} lg={3}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.6, delay:index*0.2 }}
              >
                <Card sx={{ borderRadius: '20px', overflow:'hidden', cursor:'pointer', boxShadow:'0 8px 20px rgba(0,0,0,0.2)' }}
                  onClick={() => nav('/donate', { state: { childName: child.name }})}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={child.imgSrc}
                    alt={child.name}
                  />
                  <CardContent sx={{ textAlign:'center' }}>
                    <Typography variant="h6" fontWeight="bold">{child.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{child.age}살</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 후원 안내 섹션 */}
      <Container sx={{ py:8, textAlign:'center' }}>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1, transition:{ duration:1.2 }}}>
          <Typography variant="h4" sx={{ mb:2, color:'#C68EFD', fontWeight:'bold' }}>
            💡 후원 참여 방법
          </Typography>
           <Stepper activeStep={-1} alternativeLabel>
      {['이름 입력', '금액 선택', '후원 완료'].map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
          <Button variant="contained" sx={{ background:'#E9A5F1' }} onClick={() => nav('/donate')}>
            지금 후원하기 🐻
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
