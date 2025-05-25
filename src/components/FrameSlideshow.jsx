import React, { useState, useEffect, useRef } from 'react';
import Frame from './Frame';

function FrameSlideshow({ images, className }) {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const animationFrameId = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [frameWidth, setFrameWidth] = useState(0);
  const [frameMargin, setFrameMargin] = useState(50);
  const speed = 0.5; // px per frame

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
            style={{
              width: 'min(30vw, 320px)', // 반응형 너비
              marginRight: `${frameMargin}px`,
              flexShrink: 0, // 줄어들지 않게
            }}
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
  width: '100%',
  height: '100%',
  overflow: 'hidden',
};

const slidingBackgroundContentStyle = {
  display: 'flex',
  willChange: 'transform',
};

export default FrameSlideshow;
