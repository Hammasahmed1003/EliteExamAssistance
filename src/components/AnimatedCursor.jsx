import { useEffect, useRef, useState } from 'react';

const prefersFinePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const positionRef = useRef({ x: 0, y: 0 });
  const enabled = prefersFinePointer();

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    let frameId;

    const onMouseMove = (event) => {
      const nextPosition = { x: event.clientX, y: event.clientY };
      positionRef.current = nextPosition;
      setPosition(nextPosition);
    };

    const onMouseOver = (event) => {
      const clickable = event.target.closest(
        'a, button, input, textarea, select, [role="button"]'
      );
      setIsHovering(Boolean(clickable));
    };

    const animateTrail = () => {
      setTrailPosition((previous) => ({
        x: previous.x + (positionRef.current.x - previous.x) * 0.12,
        y: previous.y + (positionRef.current.y - previous.y) * 0.12,
      }));

      frameId = window.requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    frameId = window.requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.cancelAnimationFrame(frameId);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`cursor-trail ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
