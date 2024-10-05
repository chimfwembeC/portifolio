// src/hooks/useSkillAnimation.ts
import { useSpring } from '@react-spring/web';

const useSkillAnimation = (progress: number) => {
  return useSpring({
    to: { width: `${progress}%` },
    from: { width: '0%' },
    config: { duration: 1000 } // Duration of the animation
  });
};

export default useSkillAnimation;
