export const cubicBezier = {
  ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
};

export const transitions = {
  fast: '0.2s',
  normal: '0.3s',
  slow: '0.5s',
  verySlow: '0.8s',
  extraSlow: '1.2s',
};

export const transforms = {
  slideUp: 'translateY(-100%)',
  slideDown: 'translateY(100%)',
  slideLeft: 'translateX(-100%)',
  slideRight: 'translateX(100%)',
  fadeIn: 'opacity(1)',
  fadeOut: 'opacity(0)',
  scaleIn: 'scale(1)',
  scaleOut: 'scale(0)',
};

export const createAnimation = (
  property: string,
  duration: string = transitions.normal,
  easing: string = cubicBezier.ease
) => `${property} ${duration} ${easing}`;

export const createRevealAnimation = (
  delay: number = 0,
  duration: string = transitions.normal
) => ({
  opacity: 0,
  transform: 'translateY(60px)',
  transition: `opacity ${duration} ${cubicBezier.ease}, transform ${duration} ${cubicBezier.ease}`,
  transitionDelay: `${delay}s`,
  '&.revealed': {
    opacity: 1,
    transform: 'translateY(0)',
  },
}); 