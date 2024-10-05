import React from 'react';

interface SkillIconProps {
  src: string;
  alt: string;
  className?: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-12 h-12 ${className}`} // Customize size and other styles here
    />
  );
};

export default SkillIcon;
