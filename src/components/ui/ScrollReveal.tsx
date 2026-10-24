import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: string; // Translate distance e.g. "40px"
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 800,
  direction = 'up',
  distance = '40px',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is in viewport
        rootMargin: '0px 0px -60px 0px', // Trigger slightly before crossing the viewport
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      if (direction === 'up') return `translateY(${distance})`;
      if (direction === 'down') return `translateY(-${distance})`;
      if (direction === 'left') return `translateX(${distance})`;
      if (direction === 'right') return `translateX(-${distance})`;
    }
    return 'translate(0)';
  };

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.215, 0.61, 0.355, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.215, 0.61, 0.355, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
