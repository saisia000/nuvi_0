import React from 'react';

export default function NuvoriBlueprint() {
  return (
    <div className="w-full bg-background p-8">
      <div className="relative w-full h-[500px] bg-gradient-to-br from-amber-50 to-orange-50 border-4 border-amber-300 rounded-[40px] overflow-hidden shadow-lg">
        <svg width="100%" height="100%" viewBox="0 0 800 500" className="w-full h-full">
          {/* Dotted connecting lines */}
          <defs>
            <pattern id="dotted" patternUnits="userSpaceOnUse" width="8" height="8">
              <circle cx="4" cy="4" r="1.5" fill="#7c2d12" opacity="0.9">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
              </circle>
            </pattern>
          </defs>

          {/* Connection lines */}
          {/* Nuvori to Emotional AI */}
          <line x1="400" y1="100" x2="400" y2="200" 
                stroke="#7c2d12" 
                strokeWidth="3" 
                strokeDasharray="8,4"
                opacity="0.8">
            <animate attributeName="stroke-dashoffset" values="12;0" dur="3s" repeatCount="indefinite"/>
          </line>
          
          {/* Emotional AI to Innovation */}
          <line x1="320" y1="240" x2="250" y2="340" 
                stroke="#7c2d12" 
                strokeWidth="3" 
                strokeDasharray="8,4"
                opacity="0.8">
            <animate attributeName="stroke-dashoffset" values="12;0" dur="3s" begin="0.5s" repeatCount="indefinite"/>
          </line>
          
          {/* Emotional AI to Unmet Human Needs */}
          <line x1="480" y1="240" x2="550" y2="340" 
                stroke="#7c2d12" 
                strokeWidth="3" 
                strokeDasharray="8,4"
                opacity="0.8">
            <animate attributeName="stroke-dashoffset" values="12;0" dur="3s" begin="1s" repeatCount="indefinite"/>
          </line>
          
          {/* Innovation to Unmet Human Needs horizontal line */}
          <line x1="350" y1="380" x2="450" y2="380" 
                stroke="#7c2d12" 
                strokeWidth="3" 
                strokeDasharray="8,4"
                opacity="0.8">
            <animate attributeName="stroke-dashoffset" values="12;0" dur="3s" begin="1.5s" repeatCount="indefinite"/>
          </line>

          {/* Nuvori - Top oval */}
          <ellipse cx="400" cy="70" rx="140" ry="35" 
                   fill="#fef3c7" 
                   stroke="#92400e" 
                   strokeWidth="2" 
                   className="drop-shadow-md" />
          <text x="400" y="80" 
                textAnchor="middle" 
                className="fill-amber-900 font-bold font-caveat"
                style={{ fontSize: '32px' }}>
            Nuvori
          </text>

          {/* Emotional AI - Center oval */}
          <ellipse cx="400" cy="220" rx="120" ry="30"
                fill="#fef3c7" 
                stroke="#92400e" 
                strokeWidth="2" 
                className="drop-shadow-md" />
          <text x="400" y="230" 
                textAnchor="middle" 
                className="fill-amber-900 font-semibold font-caveat"
                style={{ fontSize: '24px' }}>
            Emotional AI
          </text>

          {/* Innovation - Bottom left rounded rectangle */}
          <rect x="150" y="350" width="200" height="60" rx="30" ry="30"
                fill="#e5e7eb" 
                stroke="#6b7280" 
                strokeWidth="2" 
                className="drop-shadow-md" />
          <text x="250" y="385" 
                textAnchor="middle" 
                className="fill-slate-700 font-semibold font-caveat"
                style={{ fontSize: '24px' }}>
            Innovation
          </text>

          {/* Unmet Human Needs - Bottom right rounded rectangle */}
          <rect x="450" y="350" width="200" height="60" rx="30" ry="30"
                fill="#e5e7eb" 
                stroke="#6b7280" 
                strokeWidth="2" 
                className="drop-shadow-md" />
          <text x="550" y="375" 
                textAnchor="middle" 
                className="fill-slate-700 font-semibold font-caveat"
                style={{ fontSize: '20px' }}>
            Unmet
          </text>
          <text x="550" y="395" 
                textAnchor="middle" 
                className="fill-slate-700 font-semibold font-caveat"
                style={{ fontSize: '20px' }}>
            Human Needs
          </text>
        </svg>
      </div>
    </div>
  );
}