import React from 'react';
import Image from 'next/image';

interface WorkerIconProps {
  className?: string;
  size?: number;
}

export function WorkerIcon({ className = 'w-8 h-8', size = 48 }: WorkerIconProps) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <Image
        src="/worker-avatar.png"
        alt="Worker Candidate"
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
