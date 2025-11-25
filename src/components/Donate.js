// src/components/Donate.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
} from '@mui/material';
import { motion } from 'framer-motion';

const childrenList = [
  { id: 1, name: '짱구', imgSrc: 'ch1.jpeg', age: 5 },
  { id: 2, name: '훈이', imgSrc: 'ch2.jpeg', age: 5 },
  { id: 3, name: '맹구', imgSrc: 'ch3.jpeg', age: 5 },
  { id: 4, name: '봉미선', imgSrc: 'ch4.jpeg', age: 6 },
];

export default function Donate() {
  const nav = useNavigate();

  // 페이지 로드 시 스크롤 맨 위로
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const [inputValue, setInputValue] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [selectedChildName, setSelectedChildName] = useState('');

  const handleAmountClick = (amount) => setSelectedAmount(amount);

  const handleComplete = () => {
    if (!inputValue || !selectedAmount) {
      alert('이름과 후원 금액을 선택해주세요!');
      return;
    }

    // 🎉 confetti 효과
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });

    // 0.8초 뒤 완료 페이지로 이동
    setTimeout(() => {
      nav('/complete', {
        state: {
          name: inputValue,
          amount: selectedAmount,
          childName: selectedChildName,
        },
      });
    }, 800);
  };

  return (
    <Container
      sx={{
        py: 8,
        minHeight: '100vh',
        maxWidth: '100% !important',
        background: '#FFC4C4',
      }}
    >
      {/* 페이지 제목 */}
      <Typography
        variant='h4'
        align='center'
        gutterBottom
        sx={{ fontWeight: 'bold', mb: 6, color: '#c5f1ff' }}
      >
        🤍희망 나누기🤍
      </Typography>

      {/* -------- 아동 카드 영역 -------- */}
      <Grid container spacing={4} justifyContent='center'>
        {childrenList.map((ch, index) => (
          <Grid
            key={ch.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            display='flex'
            justifyContent='center'
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Card
              sx={{
                width: 260,
                minHeight: 360,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '30px',
                boxShadow: '0 15px 25px rgba(0,0,0,0.2)',
                overflow: 'hidden',
                background: '#fff',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 30px rgba(0,0,0,0.3)',
                },
              }}
            >
              <CardMedia
                component='img'
                image={ch.imgSrc}
                alt={ch.name}
                sx={{
                  width: '100%',
                  height: 220,
                  objectFit: 'cover',
                  background: '#fff',
                }}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                <Typography variant='h6' color='#F688BB' fontWeight='bold'>
                  {ch.name}
                </Typography>
                <Typography color='#F688BB'>{ch.age}살 어린이</Typography>
              </CardContent>
              <CardActions sx={{ mt: 'auto', mb: 2 }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant='contained'
                    sx={{
                      borderRadius: '20px',
                      background: '#c184d9',
                      px: 3,
                      py: 1,
                      fontWeight: 'bold',
                    }}
                    onClick={() => {
                      setSelectedChildName(ch.name);
                      document.getElementById('donate2')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }}
                  >
                    후원하기
                  </Button>
                </motion.div>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* -------- 후원자 입력 -------- */}
      <Typography
        variant='h4'
        align='center'
        gutterBottom
        sx={{ mt: 8 }}
        id='donate2'
        fontWeight='bold'
        textAlign='center'
      >
        <span style={{ color: '#c5f1ff' }}>{selectedChildName}</span>
        <span style={{ color: '#c184d9' }}>
          에게 후원하기 <br />
          후원자님을 알려주세요 🤍
        </span>
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent='center'
        alignItems='center'
        sx={{ mb: 3 }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label='이름'
            variant='outlined'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#c184d9',
                '& fieldset': {
                  borderColor: '#c184d9',
                },
                '&:hover fieldset': {
                  borderColor: '#fff',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#fff',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#c184d9',
                '&.Mui-focused': {
                  color: '#fff',
                },
              },
            }}
          />
        </Grid>
      </Grid>

      {/* -------- 금액 선택 -------- */}
      <Grid
        container
        spacing={2}
        justifyContent='center'
        alignItems='center'
        sx={{ mb: 3 }}
      >
        {['10000', '20000', '30000'].map((amount) => (
          <Grid item key={amount}>
            <Button
              variant={selectedAmount === amount ? 'contained' : 'outlined'}
              onClick={() => handleAmountClick(amount)}
              sx={{
                minWidth: 100,
                borderColor: '#fff',
                background: '#c184d9',
                color: '#fff',
                '&:hover': {
                  background: '#fff',
                  color: '#c184d9',
                  borderColor: '#fff',
                },
              }}
            >
              {amount}원
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* -------- 완료 버튼 -------- */}
      <Grid container justifyContent='center'>
        <Button
          variant='contained'
          color='secondary'
          size='large'
          onClick={handleComplete}
        >
          후원 완료 💖
        </Button>
      </Grid>
    </Container>
  );
}
