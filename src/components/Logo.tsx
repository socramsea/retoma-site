import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '' }) => {
  const symbolColor = variant === 'light' ? '#FFC23D' : '#0B1F26';
  const textColor = variant === 'light' ? '#F2F4F1' : '#0B1F26';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" rx="20" fill={symbolColor} />
        <path d="M25 72V28H38V60H58V72H25Z" fill={textColor} />
        <rect x="62" y="28" width="13" height="44" rx="2" fill={textColor} />
      </svg>
      <span
        className="font-display font-black text-2xl tracking-tight"
        style={{ color: textColor }}
      >
        RETOMA
      </span>
    </div>
  );
};

export default Logo;
