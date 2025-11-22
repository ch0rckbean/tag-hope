import React, { useMemo, useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function DonDrop({ donors = [], name }) {
  const wrapperRef = useRef(null);
  const allDonors = [...donors, name].filter(Boolean);

  const BOX_WIDTH = 120;
  const BOX_HEIGHT = 60;
  const GAP = 10;
  const PER_ROW = 3;

  const [wrapperWidth, setWrapperWidth] = useState(0);

  useEffect(() => {
    if (wrapperRef.current) {
      setWrapperWidth(wrapperRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (wrapperRef.current) {
        setWrapperWidth(wrapperRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rowCount = Math.ceil(allDonors.length / PER_ROW);

  const positions = useMemo(() => {
    return allDonors.map((_, index) => {
      const row = Math.floor(index / PER_ROW);
      const col = index % PER_ROW;

      // 마지막 줄 아이템 수
      const lastRowCount = allDonors.length % PER_ROW || PER_ROW;
      const rowItemCount = row === rowCount - 1 ? lastRowCount : PER_ROW;

      const rowWidth = rowItemCount * BOX_WIDTH + (rowItemCount - 1) * GAP;
      const offsetX = (wrapperWidth - rowWidth) / 2 + col * (BOX_WIDTH + GAP);
      const offsetY = row * (BOX_HEIGHT + GAP);

      return { x: offsetX, y: offsetY };
    });
  }, [allDonors, rowCount, wrapperWidth]);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: rowCount * (BOX_HEIGHT + GAP),
        marginTop: 40,
      }}
    >
      {allDonors.map((donor, index) => {
        const pos = positions[index] || { x: 0, y: 0 };

        return (
          <motion.div
            key={`${donor}-${index}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: pos.y, x: pos.x, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            style={{
              position: 'absolute',
              width: BOX_WIDTH,
              height: BOX_HEIGHT,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '3vh',
              padding: '0 6px',
              whiteSpace: 'nowrap',
            }}
          >
            {donor}
          </motion.div>
        );
      })}
    </div>
  );
}
