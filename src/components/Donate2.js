import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Button, TextField, Typography } from '@mui/material';

export default function Donate2() {
  const nav = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
  };

  const handleComplete = () => {
    if (!inputValue || !selectedAmount) {
      alert('이름과 후원 금액을 선택해주세요!');
      return;
    }
    nav('/complete', { state: { name: inputValue, amount: selectedAmount } });
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        후원자님을 알려주세요
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="이름"
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 3 }}>
        {['10000', '20000', '30000'].map((amount) => (
          <Grid item key={amount}>
            <Button
              variant={selectedAmount === amount ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleAmountClick(amount)}
            >
              {amount}원
            </Button>
          </Grid>
        ))}
      </Grid>

      <Grid container justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleComplete}>
          후원 완료
        </Button>
      </Grid>
    </Container>
  );
}
