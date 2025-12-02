// src/components/Home.js
import { React, useState, useEffect } from 'react';
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
  StepLabel,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);

const childrenList = [
  {
    id: 1,
    name: '짱구',
    imgSrc: '/ch1.jpeg',
    age: 2,
    story: '호기심이 많아 매일 새로운 모험을 꿈꾸는 아이예요.',
  },
  {
    id: 2,
    name: '훈이',
    imgSrc: '/ch2.jpeg',
    age: 5,
    story: '그림 그리기를 좋아하는 조용한 아이, 꿈은 화가가 되는 것입니다.',
  },
  {
    id: 3,
    name: '맹구',
    imgSrc: '/ch3.jpeg',
    age: 5,
    story: '운동을 좋아하지만, 병에 걸리고 나서 자신감이 줄어든 아이입니다.',
  },
  {
    id: 4,
    name: '봉미선',
    imgSrc: '/ch4.jpeg',
    age: 6,
    story: '노래 부르기를 좋아하지만, 마음껏 즐길 기회가 적은 아이예요.',
  },
];

const musicList = [
  {
    img: '/m1.jpg',
    title: 'Last Christmas',
    lyric: 'Once bitten, And twice shy',
    url: 'https://www.youtube.com/watch?v=dNOA7gIA87E&list=RDdNOA7gIA87E&start_radio=1&pp=ygUTQ2hyaXN0bWFzIGxhc3QgZ2xlZaAHAQ%3D%3D',
  },
  {
    img: '/m2.jpeg',
    title: 'Baby It&#39;s Cold Outside',
    lyric: 'But baby it&#39;s cold outside',
    url: 'https://www.youtube.com/watch?v=zUoJ8e2J-_w&list=RDzUoJ8e2J-_w&start_radio=1&pp=ygUtICAgIHRpdGxlOiAnQmFieSBJdCYjMzk7cyBDb2xkIE91dHNpZGUnLCBnbGVloAcB',
  },
  {
    img: '/m3.jpeg',
    title: 'The Most Wonderful Day of the Year',
    lyric: 'Toys galore scattered on the floor, there&#39;s no room for more',
    url: 'https://www.youtube.com/watch?v=DCHAJ3_mAms&list=RDDCHAJ3_mAms&start_radio=1&pp=ygUnVGhlIE1vc3QgV29uZGVyZnVsIERheSBvZiB0aGUgWWVhciBnbGVloAcB',
  },
  {
    img: '/m4.jpeg',
    title: 'Christmas in New York',
    lyric: 'Making my wish list, but all 1 wish is you',
    url: 'https://www.youtube.com/watch?v=DudygHca9AY&list=RDDudygHca9AY&start_radio=1&pp=ygUVY2hyaXN0bWFzIGluIG5ldyB5b3JroAcB',
  },
  {
    img: '/m5.jpeg',
    title: '눈보다 먼저',
    lyric: '눈보다 먼저 내렸으면',
    url: 'https://www.youtube.com/watch?v=h_eTLBDVzhI&list=RDh_eTLBDVzhI&start_radio=1&pp=ygUP64iI67O064uk66i87KCAoAcB',
  },
  {
    img: '/m6.jpeg',
    title: '소격동',
    lyric: '너의 모든 걸 두 눈에 담고 있었죠',
    url: 'https://www.youtube.com/watch?v=GHu39FEFIks&list=RDGHu39FEFIks&start_radio=1&pp=ygUJ7IaM6rKp64-ZoAcB',
  },
  {
    img: '/m7.jpeg',
    title: '눈이 오면 mmm',
    lyric: '하얀 눈이 내려 물들어가요',
    url: 'https://www.youtube.com/watch?v=kH-jAT8fJ6k&list=RDkH-jAT8fJ6k&start_radio=1',
  },
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
  const [dailyItem, setDailyItem] = useState(null);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const index = today.split('-').join('').slice(-1) % musicList.length;
    setDailyItem(musicList[index]);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const steps = ['이름 입력', '금액 선택', '후원 완료'];

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background: '#FEFE91',
      }}
    >
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

          <Typography variant="h6" sx={{ mb: 4, color: '#00daff' }}>
            태그 한 번에, 아이에게 닿는 희망
          </Typography>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                background: '#fff',
                color: '#00daff',
                width: '40%',
                height: '7vh',
                mb: '3vh',
                fontSize: '2vh',
              }}
              onClick={() =>
                document.getElementById('children')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              아동 미리 만나보기
            </Button>
            {/* <Button
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
</Button> */}

            {/* 음악 리스트 */}
            {dailyItem && (
              <Box sx={{ mt: 5, textAlign: 'center' }}>
                <a href={dailyItem.url}>
                  <img
                    src={dailyItem.img}
                    alt="music"
                    style={{ width: '200px', marginBottom: '15px' }}
                  />
                </a>
                <Typography variant="h6" fontWeight="bold" color="#00daff" sx={{ mb: 1 }}>
                  {dailyItem.title}
                </Typography>

                <Typography variant="body1" color="#00daff">
                  "{dailyItem.lyric}"
                </Typography>
              </Box>
            )}
          </div>
        </motion.div>
      </Container>

      {/* 아동 리스트 */}
      <Container id="children" sx={{ py: 6, paddingTop: '!important 0' }}>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            textAlign: 'center',
            color: '#FFA6D5',
            fontWeight: 'bold',
          }}
        >
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
                    overflow: 'hidden',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                  }}
                  // onClick={() =>
                  //   nav('/donate', { state: { childName: child.name } })
                  // }
                >
                  <CardMedia component="img" height="220" image={child.imgSrc} alt={child.name} />
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold " color="#F688BB">
                      {child.name}({child.age}살)
                    </Typography>
                    <Typography variant="body2" color="#F688BB">
                      {child.story}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </MotionGrid>
      </Container>

      {/* 후원 안내 섹션 */}
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.2 } }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              textAlign: 'center',
              color: '#BC7AF9',
              fontWeight: 'bold',
            }}
          >
            후원 참여 방법
          </Typography>

          {/* Stepper */}
          <Stepper activeStep={-1} alternativeLabel sx={{ pb: '5vh' }}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconProps={{
                    sx: {
                      color: index === 0 ? '#dff8d5' : index === 1 ? '#f8d5d5' : '#d5d8f8',
                    },
                  }}
                >
                  <span style={{ color: '#BC7AF9' }}>{label}</span>
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <Button
            variant="contained"
            size="large"
            sx={{
              color: '#fff',
              background: '#BC7AF9',
              width: 'fit-content',
              height: '7vh',
              mb: '3vh',
            }}
            onClick={() => nav('/donate')}
          >
            지금 후원하기
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
