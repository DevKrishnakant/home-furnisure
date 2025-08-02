import { useEffect, useRef, useState } from 'react';
import { throttle } from '@/lib/utils/helpers';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting && (!options.triggerOnce || !hasTriggered)) {
          setIsVisible(true);
          setHasTriggered(true);
        } else if (!options.triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.3,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce, hasTriggered]);

  return {
    elementRef,
    isVisible,
    hasTriggered,
  };
}

export function useParallaxScroll(speed: number = 0.5) {
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    }, 16); // ~60fps

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getParallaxTransform = () => {
    if (!elementRef.current) return 0;
    const rect = elementRef.current.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;
    
    const progress = (scrollY - elementTop + windowHeight) / (windowHeight + elementHeight);
    return Math.max(0, Math.min(1, progress)) * speed * 100;
  };

  return {
    elementRef,
    scrollY,
    parallaxTransform: getParallaxTransform(),
  };
} 