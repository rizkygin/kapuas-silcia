'use client'
import React, { useState, CSSProperties, useEffect } from 'react'
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'

import styles from './stylegallery.module.css'

const gallery = [
    {src: 'pic41.jpg', name:'Clean'},
    {src: 'pic21.jpg', name:'Believe'},
    {src: 'pic31.jpg', name:'Trust'}
];
const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = [];

gallery.map((e,i)=>{
    pages[i] =  ({ style }) => <animated.div style={{ ...style}}><img src={gallery[i].src} alt="" className='rounded-2xl'/> <span className='absolute bottom-0 left-2'>{gallery[i].name}</span></animated.div>
});

const pages1: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = [
  ({ style }) => <animated.div style={{ ...style}}>Believed</animated.div>,
  ({ style }) => <animated.div style={{ ...style}}>Trust</animated.div>,
  ({ style }) => <animated.div style={{ ...style}}><img src="pic1.jpg" alt="" className='rounded-2xl' /> <span className='absolute bottom-0 left-2'>Clean</span></animated.div>,
]

export default function SlideGallery() {
  const [index, set] = useState(0)
  const onClick = () => set(state => (state + 1) % gallery.length)
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  useEffect(() => {
    transRef.start()
  }, [index])
  return (
    <div className={`flex fill ${styles.container} rounded-3xl`} onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })}
    </div>
  )
}
