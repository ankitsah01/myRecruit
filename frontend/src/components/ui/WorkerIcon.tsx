import React from 'react';
import Image from 'next/image';
import workerAvatarImg from '../../../public/worker-avatar.png';

interface WorkerIconProps {
  className?: string;
}

export function WorkerIcon({ className = 'w-8 h-8' }: WorkerIconProps) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <Image
        src={workerAvatarImg}
        alt="Worker Candidate"
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}
