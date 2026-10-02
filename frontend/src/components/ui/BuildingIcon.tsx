import React from 'react';

interface BuildingIconProps {
  className?: string;
  variant?: 'colorful' | 'black' | 'teal';
}

export function BuildingIcon({
  className = 'w-5 h-5',
  variant = 'colorful',
}: BuildingIconProps) {
  if (variant === 'black') {
    return (
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Stepped Pedestal Foundation */}
        <path
          d="M8 92H92V96H8V92ZM12 87H88V91H12V87Z"
          fill="#0f172a"
          className="dark:fill-slate-900"
        />

        {/* Central Stepped Skyscraper Tower */}
        <path
          d="M41 15H59V21H41V15ZM35 21H65V28H35V21ZM30 28H70V86H30V28Z"
          fill="#0f172a"
          className="dark:fill-slate-900"
        />

        {/* 8 Crisp Cutout Windows in Center Tower */}
        <rect x="37" y="35" width="9" height="9" rx="0.5" fill="#ffffff" />
        <rect x="54" y="35" width="9" height="9" rx="0.5" fill="#ffffff" />
        <rect x="37" y="47" width="9" height="9" rx="0.5" fill="#ffffff" />
        <rect x="54" y="47" width="9" height="9" rx="0.5" fill="#ffffff" />
        <rect x="37" y="59" width="9" height="9" rx="0.5" fill="#ffffff" />
        <rect x="54" y="59" width="9" height="9" rx="0.5" fill="#ffffff" />
        <rect x="37" y="71" width="9" height="9" rx="0.5" fill="#ffffff" />
        <rect x="54" y="71" width="9" height="9" rx="0.5" fill="#ffffff" />

        {/* Left Angled Wing with architectural gap from center */}
        <path
          d="M13 49L27 36V86H13V49Z"
          fill="#1e293b"
          className="dark:fill-slate-800"
        />
        {/* Left Wing Slit Windows */}
        <rect x="23" y="44" width="2" height="6" rx="0.5" fill="#ffffff" />
        <rect x="17" y="53" width="2" height="6" rx="0.5" fill="#ffffff" />
        <rect x="23" y="53" width="2" height="6" rx="0.5" fill="#ffffff" />
        <rect x="17" y="63" width="2" height="6" rx="0.5" fill="#ffffff" />
        <rect x="23" y="63" width="2" height="6" rx="0.5" fill="#ffffff" />
        <rect x="17" y="73" width="2" height="6" rx="0.5" fill="#ffffff" />
        <rect x="23" y="73" width="2" height="6" rx="0.5" fill="#ffffff" />

        {/* Right Angled Wing with architectural gap from center */}
        <path
          d="M87 49L73 36V86H87V49Z"
          fill="#1e293b"
          className="dark:fill-slate-800"
        />
        {/* Right Wing Slit Windows */}
        <rect x="75" y="44" width="2" height="6" rx="0.5" fill="#ffffff" />
        <rect x="75" y="53" width="2" height="6" rx="0.5" fill="#ffffff" />
        <rect x="81" y="53" width="2" height="6" rx="0.5" fill="#ffffff" />
        <rect x="75" y="63" width="2" height="6" rx="0.5" fill="#ffffff" />
        <rect x="81" y="63" width="2" height="6" rx="0.5" fill="#ffffff" />
        <rect x="75" y="73" width="2" height="6" rx="0.5" fill="#ffffff" />
        <rect x="81" y="73" width="2" height="6" rx="0.5" fill="#ffffff" />
      </svg>
    );
  }

  if (variant === 'teal') {
    return (
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M8 92H92V96H8V92ZM12 87H88V91H12V87Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41 15H59V21H41V15ZM35 21H65V28H35V21ZM30 28H70V86H30V28ZM37 35H46V44H37V35ZM54 35H63V44H54V35ZM37 47H46V56H37V47ZM54 47H63V56H54V47ZM37 59H46V68H37V59ZM54 59H63V68H54V59ZM37 71H46V80H37V71ZM54 71H63V80H54V71Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 49L27 36V86H13V49ZM23 44H25V50H23V44ZM17 53H19V59H17V53ZM23 53H25V59H23V53ZM17 63H19V69H17V63ZM23 63H25V69H23V63ZM17 73H19V79H17V73ZM23 73H25V79H23V73Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M87 49L73 36V86H87V49ZM75 44H77V50H75V44ZM75 53H77V59H75V53ZM81 53H83V59H81V53ZM75 63H77V69H75V63ZM81 63H83V69H81V63ZM75 73H77V79H75V73ZM81 73H83V79H81V73Z"
        />
      </svg>
    );
  }

  // Modern Multi-Color Corporate Skyscraper (Teal, Cyan, Electric Blue, Shaded Wings, Illuminated Windows)
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Gradients for multi-tone 3D corporate skyscraper */}
        <linearGradient id="towerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#0f766e" />
        </linearGradient>

        <linearGradient id="leftWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#115e59" />
        </linearGradient>

        <linearGradient id="rightWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>

        <linearGradient id="baseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="50%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>

        <linearGradient id="winGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cffafe" />
        </linearGradient>
      </defs>

      {/* Stepped Pedestal Foundation with Teal Highlight Trim */}
      <path d="M8 92H92V96H8V92Z" fill="url(#baseGrad)" />
      <path d="M12 87H88V91H12V87Z" fill="#1e293b" />
      <rect x="12" y="86.5" width="76" height="1" fill="#2dd4bf" opacity="0.8" />

      {/* Left Shaded Wing */}
      <path
        d="M13 49L27 36V86H13V49Z"
        fill="url(#leftWingGrad)"
      />
      {/* Left Wing Slits in Sky Cyan */}
      <rect x="23" y="44" width="2" height="6" rx="0.5" fill="#38bdf8" />
      <rect x="17" y="53" width="2" height="6" rx="0.5" fill="#38bdf8" />
      <rect x="23" y="53" width="2" height="6" rx="0.5" fill="#38bdf8" />
      <rect x="17" y="63" width="2" height="6" rx="0.5" fill="#38bdf8" />
      <rect x="23" y="63" width="2" height="6" rx="0.5" fill="#38bdf8" />
      <rect x="17" y="73" width="2" height="6" rx="0.5" fill="#38bdf8" />
      <rect x="23" y="73" width="2" height="6" rx="0.5" fill="#38bdf8" />

      {/* Right Reflective Wing */}
      <path
        d="M87 49L73 36V86H87V49Z"
        fill="url(#rightWingGrad)"
      />
      {/* Right Wing Slits in Ice Cyan */}
      <rect x="75" y="44" width="2" height="6" rx="0.5" fill="#e0f2fe" />
      <rect x="75" y="53" width="2" height="6" rx="0.5" fill="#e0f2fe" />
      <rect x="81" y="53" width="2" height="6" rx="0.5" fill="#e0f2fe" />
      <rect x="75" y="63" width="2" height="6" rx="0.5" fill="#e0f2fe" />
      <rect x="81" y="63" width="2" height="6" rx="0.5" fill="#e0f2fe" />
      <rect x="75" y="73" width="2" height="6" rx="0.5" fill="#e0f2fe" />
      <rect x="81" y="73" width="2" height="6" rx="0.5" fill="#e0f2fe" />

      {/* Main Center Stepped Tower */}
      {/* Crown Top Tier */}
      <rect x="41" y="15" width="18" height="6" fill="#38bdf8" rx="0.5" />
      {/* Crown Middle Tier */}
      <rect x="35" y="21" width="30" height="7" fill="#06b6d4" rx="0.5" />
      {/* Main Tower Body */}
      <path
        d="M30 28H70V86H30V28Z"
        fill="url(#towerGrad)"
      />

      {/* 8 Crisp Illuminated Center Windows */}
      <rect x="37" y="35" width="9" height="9" rx="1" fill="url(#winGlow)" stroke="#0284c7" strokeWidth="0.5" />
      <rect x="54" y="35" width="9" height="9" rx="1" fill="url(#winGlow)" stroke="#0284c7" strokeWidth="0.5" />
      <rect x="37" y="47" width="9" height="9" rx="1" fill="url(#winGlow)" stroke="#0284c7" strokeWidth="0.5" />
      <rect x="54" y="47" width="9" height="9" rx="1" fill="url(#winGlow)" stroke="#0284c7" strokeWidth="0.5" />
      <rect x="37" y="59" width="9" height="9" rx="1" fill="url(#winGlow)" stroke="#0284c7" strokeWidth="0.5" />
      <rect x="54" y="59" width="9" height="9" rx="1" fill="url(#winGlow)" stroke="#0284c7" strokeWidth="0.5" />
      <rect x="37" y="71" width="9" height="9" rx="1" fill="url(#winGlow)" stroke="#0284c7" strokeWidth="0.5" />
      <rect x="54" y="71" width="9" height="9" rx="1" fill="url(#winGlow)" stroke="#0284c7" strokeWidth="0.5" />
    </svg>
  );
}
