// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);

const childrenList = [
  { id: 1, name: '짱구', imgSrc: '/img/ch1.jpeg', age: 5 },
  { id: 2, name: '훈이', imgSrc: '/img/ch2.jpeg', age: 5 },
  { id: 3, name: '맹구', imgSrc: '/img/ch3.png', age: 5 },
  { id: 4, name: '봉미선', imgSrc: '/img/ch4.jpeg', age: 6 },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // 순차적으로 나타나게
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home({ setCurrentMusic }) {

  const nav = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const steps = ['이름 입력', '금액 선택', '후원 완료'];

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background:'#FEFE91'}}>
      
      {/* 메인 배너 */}
      <Container sx={{ textAlign: 'center', py: 8 }}>
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <MotionTypography
            variant="h3"
            sx={{ fontWeight: 'bold', mb: 2, color: '#00daff' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            희망을 태그하다
          </MotionTypography>

          <Typography variant="h6" sx={{ mb:4, color:'#00daff' }}>
            따뜻한 마음을 나눠요
          </Typography>

          <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
            <Button
              variant="contained"
              size="large"
              sx={{ background:'#fff', color:'#00daff', width:'40%', height:'7vh', mb:'3vh',fontSize:'2vh' }}
              onClick={() => document.getElementById('children')?.scrollIntoView({ behavior:'smooth'})}
            >
              후원하러 가기 
            </Button>
       <Button
  variant="contained"
  size="large"
  sx={{ background:'#fff', color:'#00daff', width:'40%', height:'7vh', mb:'3vh', fontSize:'2vh' }}
 onClick={() => setCurrentMusic('/music1.mp3')}
>
  캐롤 듣기 1
</Button>
       <Button
  variant="contained"
  size="large"
  sx={{ background:'#fff', color:'#00daff', width:'40%', height:'7vh', mb:'3vh', fontSize:'2vh' }}
          onClick={() => setCurrentMusic('/music2.mp3')}
>
  캐롤 듣기 2
</Button>
       <Button
  variant="contained"
  size="large"
  sx={{ background:'#fff', color:'#00daff', width:'40%', height:'7vh', mb:'3vh', fontSize:'2vh' }}
          onClick={() => setCurrentMusic('/music3.mp3')}
>
  캐롤 듣기 3
</Button>

          </div>
        </motion.div>
      </Container>

      {/* 아동 리스트 */}
      <Container id="children" sx={{ py: 6, paddingTop:'!important 0'}}>
        <Typography variant="h5" sx={{ mb:4, textAlign:'center', color:'#FFA6D5', fontWeight:'bold' }}>
          아동 미리 만나보기 
        </Typography>

        <MotionGrid
  container
  spacing={4}
  justifyContent="center"
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }} // ⭐ once: true 추가
>
  {childrenList.map((child) => (
    <Grid key={child.id} item xs={12} sm={6} md={4} lg={3}>
      <motion.div variants={itemVariants}>
        <Card
          sx={{
            borderRadius: '20px',
            overflow:'hidden',
            cursor:'pointer',
            boxShadow:'0 8px 20px rgba(0,0,0,0.2)'
          }}
          onClick={() => nav('/donate', { state: { childName: child.name }})}
        >
          <CardMedia
            component="img"
            height="220"
            image={child.imgSrc}
            alt={child.name}
          />
          <CardContent sx={{ textAlign:'center' }}>
            <Typography variant="h6" fontWeight="bold " color='#F688BB'>{child.name}</Typography>
            <Typography variant="body2" color="#F688BB">{child.age}살</Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  ))}
</MotionGrid>

      </Container>

      {/* 후원 안내 섹션 */}
      <Container sx={{ py:8, textAlign:'center' }}>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1, transition:{ duration:1.2 }}} >
          <Typography variant="h5" sx={{ mb:4, textAlign:'center', color:'#BC7AF9', fontWeight:'bold' }}>
            후원 참여 방법 
          </Typography>  

          {/* Stepper */}
          <Stepper activeStep={-1} alternativeLabel sx={{ pb:'5vh' }}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconProps={{
                    sx: {
                      color: index === 0 ? '#dff8d5' :
                             index === 1 ? '#f8d5d5' :
                             '#d5d8f8',
                    }
                  }}
                >
                  <span style={{color:'#BC7AF9'}}>{label}</span>
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <Button
            variant="contained"
            size='large'
            sx={{ color:'#fff', background:'#BC7AF9', width:'fit-content', height:'7vh', mb:'3vh' }}
            onClick={() => nav('/donate')}
          >
            지금 후원하기 
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
