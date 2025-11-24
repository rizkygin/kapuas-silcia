'use client';
import React, { ReactElement, useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

const MarqueeText = ({
  text,
  duration,
}: {
  text: String;
  duration: number;
}): ReactElement => {
  const { x } = useSpring({
    from: { x: 50 },
    to: { x: -100 }, // Adjust based on text width and desired scroll amount
    loop: true,
    config: { duration: duration }, // Adjust for scroll speed
  });

  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <animated.span
        style={{
          fontSize: '6rem',
          color: 'white',
          display: 'inline-block',
          transform: x.to((val) => {
            console.log(val);
            return `translatex(${val}%)`
          }),
          
        }}
      >
        {text}
      </animated.span>
    </div>
  );
};

export default MarqueeText;
