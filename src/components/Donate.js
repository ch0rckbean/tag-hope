import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material';

const childrenList = [
  { id: 1, name: '짱구', imgSrc: '/img/ch1.jpeg', age: 5 },
  { id: 2, name: '훈이', imgSrc: '/img/ch2.jpeg', age: 5 },
  { id: 3, name: '맹구', imgSrc: '/img/ch3.png', age: 5 },
  { id: 4, name: '봉미선', imgSrc: '/img/ch4.jpeg', age: 6 },
];

export default function Donate() {
  const nav = useNavigate();

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        희망 나누기
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {childrenList.map((ch) => (
          <Grid key={ch.id} xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center">
            <Card
              sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardMedia
                component="img"
                image={ch.imgSrc}
                alt={ch.name}
                 sx={{
    width: '100%',       // 카드 너비에 맞춤
    height: 200,         // 최대 높이
    objectFit: 'contain', // 이미지 비율 유지, 잘리지 않음
    backgroundColor: '#fff' // 빈 공간 배경색
                 }}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6">{ch.name}</Typography>
                <Typography color="primary">아기 설명</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => nav('/donate2', { state: { childName: ch.name } })}
                >
                  후원하기
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
