import React, { useState, useEffect, useRef } from 'react';
import Frame from './Frame';

function FrameSlideshow({ images , className}) {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const animationFrameId = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [frameWidth, setFrameWidth] = useState(0);
  const [frameMargin, setFrameMargin] = useState(50); // 기본 마진
  const speed = 0.5; // 1px per frame

  useEffect(() => {
    if (frameRef.current) {
      const width = frameRef.current.offsetWidth;
      const margin = parseInt(window.getComputedStyle(frameRef.current).marginRight) || 20;
      setFrameWidth(width);
      setFrameMargin(margin);
    }
  }, [images]);

  useEffect(() => {
    const totalWidth = (frameWidth + frameMargin) * images.length;

    const animate = () => {
      setScrollPosition(prev => {
        const newPos = prev + speed;
        return newPos >= totalWidth ? 0 : newPos;
      });
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId.current);
  }, [frameWidth, frameMargin, images.length]);

  return (
    <div style={slidingBackgroundContainerStyle} ref={containerRef} className={className}>
      <div
        style={{
          ...slidingBackgroundContentStyle,
          transform: `translateX(-${scrollPosition}px)`,
        }}
      >
        {[...images, ...images].map((imageUrl, index) => (
          <div
            key={index}
            style={{ marginRight: `${frameMargin}px` }}
            ref={index === 0 ? frameRef : null}
          >
            <Frame imageUrl={imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}

const slidingBackgroundContainerStyle = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
};

const slidingBackgroundContentStyle = {
  display: 'flex',
  willChange: 'transform',
};

export default FrameSlideshow;
