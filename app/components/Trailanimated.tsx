'use client';
import React, { Children, ReactElement, useState } from 'react';
import { useTrail, a } from '@react-spring/web';

import styless from './styles.module.css';

const Trail: React.FC<{ open: boolean; children: ReactElement[] }> = ({
  open,
  children,
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styless.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function Trailanimated() {
  const [open, set] = useState(true);
  return (
    <div className={styless.container} onClick={() => set((state) => !state)}>
      <Trail open={open}>
        <span>Indonesia</span>
        <span>Kapuas</span>
        <span>Silica</span>
      </Trail>
    </div>
  );
}
