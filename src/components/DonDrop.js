// src/components/DonDrop.js
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function DonDrop({ donors = [], name }) {
  const allDonors = [...donors, name].filter(Boolean);

  // 컨테이너 넓이, 높이
  const containerWidth = 350;
  const containerHeight = 250;

  // 충돌 없이 랜덤 위치 계산
  const positions = useMemo(() => {
    const placed = [];

    allDonors.forEach(() => {
      let safe = false;
      let x = 0;
      let y = 0;

      while (!safe) {
        x = Math.random() * (containerWidth - 120); // 도형 너비 고려
        y = Math.random() * (containerHeight - 60); // 도형 높이 고려
        safe = true;

        // 기존 도형과 겹치면 재계산
        for (let p of placed) {
          const dx = Math.abs(p.x - x);
          const dy = Math.abs(p.y - y);
          if (dx < 120 && dy < 60) {
            safe = false;
            break;
          }
        }
      }

      placed.push({ x, y });
    });

    return placed;
  }, [allDonors, containerWidth, containerHeight]);

  return (
    <div
      style={{
        position: 'relative',
        width: containerWidth,
        height: containerHeight,
        marginTop: 30,
        border: '1px dashed transparent',
      }}
    >
      {allDonors.map((donor, index) => {
        const width = 100 + Math.random() * 40; // 너비 100~140
        const height = 60; // 일정 높이
        const borderRadius = '50% / 50%'; // 타원

        const pos = positions[index];

        return (
          <motion.div
            key={donor + index}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: pos.y, x: pos.x, opacity: 1 }}
            transition={{ duration: 1 + index * 0.2, delay: index * 0.1 }}
            style={{
              position: 'absolute',
              width,
              height,
              borderRadius,
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#8CE4FF',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
              padding: '0 10px',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            }}
          >
            {donor}
          </motion.div>
        );
      })}
    </div>
  );
}
