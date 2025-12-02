import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import Snowfall from 'react-snowfall';
import { motion } from 'framer-motion';
import DonDrop from './DonDrop';

export default function Complete() {
  const location = useLocation();
  const nav = useNavigate();
  const { name, amount, childName } = location.state || {};

  const handleBackHome = () => nav('/');

  const donors = ['해순', '현우', '성찬', '빈이', '수진', '민지', '시온', '소현'];

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background: '#8CE4FF',
      }}
    >
      <Snowfall snowflakeCount={300} color="#fff" />

      <Container
        sx={{
          maxWidth: '100% !important',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          py: 8,
          color: '#C68EFD',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
            🐻 후원 완료 🐻
          </Typography>

          <Typography variant="h4" sx={{ mb: 2 }}>
                <>
      {childName}에게{' '}
      <span style={{ color: '#fff', fontWeight: 'bold' }}>{name}</span>님이 {amount}원 후원을 완료했어요!
    </>
          </Typography>

          <Typography variant="h6" sx={{ mb: 4 }}>
            따뜻한 겨울을 선물해주셔서 감사합니다 🤍
          </Typography>

          <Box>
            <Button
              variant="contained"
              style={{ background: '#E9A5F1' }}
              onClick={handleBackHome}
            >
              홈으로 돌아가기
            </Button>
          </Box>
        </motion.div>

        {/* 후원자 이름 쌓기 */}
        <DonDrop donors={donors} name={name} />
      </Container>
    </Box>
  );
}
