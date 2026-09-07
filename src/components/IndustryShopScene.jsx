import React from 'react';

function SceneSvg({ children }) {
  return (
    <svg
      className="biz-scene"
      viewBox="0 0 300 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

function RestaurantScene() {
  return (
    <SceneSvg>
      <rect width="300" height="240" fill="var(--biz-scene-bg)" />
      <rect width="300" height="164" fill="var(--biz-scene-wall)" />
      <rect y="164" width="300" height="76" fill="var(--biz-scene-floor)" />
      <path d="M48 164V75C48 40 80 18 126 18s78 22 78 57v89" fill="var(--biz-scene-wall-accent)" />
      <path d="M48 164V75C48 40 80 18 126 18s78 22 78 57v89" stroke="var(--biz-scene-line)" strokeWidth="1.5" />
      <path d="M0 164h300" stroke="var(--biz-scene-structure)" strokeWidth="2" opacity=".7" />

      <g opacity=".9">
        <path d="M27 164c-2-21-7-40-17-56 15 18 23 34 25 56" fill="var(--biz-scene-green)" />
        <path d="M31 164c5-35 13-49 25-62-8 21-13 42-15 62" fill="var(--biz-scene-green)" />
        <path d="M25 164c-13-16-19-20-29-19 13 6 22 13 30 22" fill="var(--biz-scene-green)" />
        <path d="M16 164h27l-4 36H20z" fill="var(--biz-scene-terracotta)" />
        <ellipse cx="29" cy="164" rx="14" ry="3" fill="var(--biz-scene-wood-dark)" />
      </g>

      <g>
        <path d="M122 18v53" stroke="var(--biz-scene-structure-dark)" />
        <path d="m113 83 9-12 9 12z" fill="var(--biz-scene-gold)" />
        <circle cx="122" cy="85" r="3" fill="var(--biz-scene-cream)" />
        <path d="M188 0v48" stroke="var(--biz-scene-structure-dark)" />
        <path d="m177 61 11-14 11 14z" fill="var(--biz-scene-gold)" />
        <path d="M177 61h22l18 66h-58z" fill="var(--biz-scene-glow)" opacity=".45" />
        <circle cx="188" cy="63" r="3.5" fill="var(--biz-scene-cream)" />
      </g>

      <g opacity=".75">
        <ellipse cx="122" cy="139" rx="25" ry="8" fill="var(--biz-scene-wood)" />
        <rect x="119" y="139" width="6" height="25" fill="var(--biz-scene-wood-dark)" />
        <path d="M93 132h12v33H93zm58 0h12v33h-12z" fill="var(--biz-scene-furniture-dark)" />
      </g>

      <g>
        <path d="M144 177c0-34 16-47 30-47 12 0 19 7 22 15l-8 4c-3-6-8-10-14-10-10 0-18 11-18 30z" fill="var(--biz-scene-wood-dark)" />
        <path d="M157 139v39m11-39v39m11-35v35" stroke="var(--biz-scene-wood-dark)" strokeWidth="3" />
        <ellipse cx="181" cy="181" rx="34" ry="9" fill="var(--biz-scene-furniture-dark)" />
        <path d="M153 185l-6 48m55-48 6 48" stroke="var(--biz-scene-wood-dark)" strokeWidth="3" strokeLinecap="round" />
      </g>

      <g>
        <ellipse cx="225" cy="232" rx="62" ry="10" fill="var(--biz-scene-shadow)" />
        <path d="M221 185v43" stroke="var(--biz-scene-wood-dark)" strokeWidth="8" />
        <path d="M203 230c0-6 9-9 22-9s22 3 22 9" fill="var(--biz-scene-wood-dark)" />
        <ellipse cx="225" cy="185" rx="58" ry="16" fill="var(--biz-scene-wood-dark)" />
        <ellipse cx="225" cy="181" rx="58" ry="16" fill="var(--biz-scene-wood)" />
        <path d="M210 166h30l2 37h-34z" fill="var(--biz-scene-cream)" stroke="var(--biz-scene-line)" />
        <path d="M200 177c2-8 4-12 8-12l4 12zm38 0c2-9 7-13 11-13l4 13z" fill="var(--biz-scene-glass)" stroke="var(--biz-scene-glass-border)" />
        <circle cx="218" cy="166" r="5" fill="var(--biz-scene-glow)" />
      </g>
    </SceneSvg>
  );
}

function CafeScene() {
  return (
    <SceneSvg>
      <rect width="300" height="240" fill="var(--biz-scene-bg)" />
      <rect width="300" height="159" fill="var(--biz-scene-wall)" />
      <rect y="159" width="300" height="81" fill="var(--biz-scene-floor)" />
      <g stroke="var(--biz-scene-line)" strokeWidth=".8" opacity=".35">
        <path d="M0 33h300M0 63h300M0 93h300M0 123h300M0 153h300" />
        <path d="M35 33v30m50-30v30m50-30v30m50-30v30m50-30v30M60 63v30m50-30v30m50-30v30m50-30v30" />
      </g>
      <rect x="17" y="32" width="72" height="54" rx="3" fill="var(--biz-scene-furniture-dark)" stroke="var(--biz-scene-wood)" strokeWidth="2" />
      <g stroke="var(--biz-scene-cream)" strokeLinecap="round" opacity=".75">
        <path d="M29 45h32M29 54h45M29 63h36M29 72h42" />
        <path d="M29 45h30" stroke="var(--biz-scene-gold)" strokeWidth="2" />
      </g>
      <g>
        <path d="M153 0v45m73-45v33" stroke="var(--biz-scene-structure-dark)" strokeWidth="1.5" />
        <circle cx="153" cy="49" r="5" fill="var(--biz-scene-gold)" />
        <circle cx="153" cy="49" r="14" fill="var(--biz-scene-glow)" />
        <circle cx="226" cy="37" r="4.5" fill="var(--biz-scene-gold)" />
      </g>
      <g>
        <rect x="85" y="124" width="215" height="96" fill="var(--biz-scene-wood-dark)" />
        <path d="M112 125v95m29-95v95m29-95v95m29-95v95m29-95v95m29-95v95" stroke="var(--biz-scene-wood)" strokeWidth="2" opacity=".55" />
        <path d="M95 212h205" stroke="var(--biz-scene-gold)" strokeWidth="3" />
        <rect x="80" y="119" width="220" height="9" rx="2" fill="var(--biz-scene-wood)" />
      </g>
      <g>
        <rect x="168" y="72" width="82" height="48" rx="3" fill="var(--biz-scene-furniture-dark)" stroke="var(--biz-scene-structure)" />
        <path d="M176 70h70" stroke="var(--biz-scene-gold)" strokeWidth="1.5" />
        <rect x="177" y="62" width="12" height="9" rx="2" fill="var(--biz-scene-cream)" />
        <rect x="192" y="62" width="12" height="9" rx="2" fill="var(--biz-scene-cream)" />
        <rect x="207" y="62" width="12" height="9" rx="2" fill="var(--biz-scene-cream)" />
        <circle cx="183" cy="84" r="4" fill="var(--biz-scene-wall)" stroke="var(--biz-scene-gold)" />
        <circle cx="237" cy="84" r="4" fill="var(--biz-scene-wall)" stroke="var(--biz-scene-gold)" />
        <path d="M190 112h54" stroke="var(--biz-scene-structure-dark)" strokeWidth="7" />
        <path d="M244 93l8 18" stroke="var(--biz-scene-cream)" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g>
        <path d="M105 121h14l-2-20h-10z" fill="var(--biz-scene-cream)" stroke="var(--biz-scene-line)" />
        <rect x="106" y="106" width="13" height="8" fill="var(--biz-scene-wood-light)" />
        <rect x="130" y="110" width="12" height="10" rx="2" fill="var(--biz-scene-gold)" />
        <path d="M142 112c4 0 4 6 0 6" stroke="var(--biz-scene-gold)" strokeWidth="1.5" />
        <path d="M263 115c0-18 26-18 26 0z" fill="var(--biz-scene-glass)" stroke="var(--biz-scene-glass-border)" />
        <path d="M270 114c0-6 13-6 13 0z" fill="var(--biz-scene-wood)" />
      </g>
      <g>
        <ellipse cx="38" cy="224" rx="14" ry="4" fill="var(--biz-scene-shadow)" />
        <path d="M32 174l-5 50m18-50 5 50" stroke="var(--biz-scene-furniture-dark)" strokeWidth="2" />
        <ellipse cx="38" cy="173" rx="14" ry="5" fill="var(--biz-scene-wood)" />
        <ellipse cx="14" cy="235" rx="27" ry="7" fill="var(--biz-scene-shadow)" />
        <path d="M12 185v48" stroke="var(--biz-scene-furniture-dark)" strokeWidth="4" />
        <ellipse cx="12" cy="184" rx="30" ry="9" fill="var(--biz-scene-wood)" />
      </g>
    </SceneSvg>
  );
}

function BakeryScene() {
  return (
    <SceneSvg>
      <rect width="300" height="240" fill="var(--biz-scene-bg)" />
      <rect width="300" height="164" fill="var(--biz-scene-wall)" />
      <rect y="164" width="300" height="76" fill="var(--biz-scene-floor)" />
      <path d="M0 38h300v12H0z" fill="var(--biz-scene-wood-dark)" />
      <path d="M0 50h300" stroke="var(--biz-scene-gold)" strokeWidth="3" />
      <g>
        <rect x="36" y="62" width="250" height="14" rx="2" fill="var(--biz-scene-wood)" />
        <rect x="36" y="113" width="250" height="13" rx="2" fill="var(--biz-scene-wood)" />
        <rect x="36" y="164" width="250" height="14" rx="2" fill="var(--biz-scene-wood)" />
        <path d="M48 76v88m220-88v88" stroke="var(--biz-scene-wood-dark)" strokeWidth="5" />
      </g>
      <g>
        <ellipse cx="74" cy="57" rx="14" ry="7" fill="var(--biz-scene-wood)" />
        <ellipse cx="105" cy="57" rx="16" ry="8" fill="var(--biz-scene-accent-warm)" />
        <ellipse cx="142" cy="57" rx="15" ry="7" fill="var(--biz-scene-gold)" />
        <path d="M63 56c0-10 21-10 21 0m31 0c0-12 24-12 24 0" stroke="var(--biz-scene-cream)" strokeWidth="2" />
        <path d="M77 76v34m-7-33v34m49 1V78m8 32V78" stroke="var(--biz-scene-wood-dark)" strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="220" cy="104" rx="24" ry="9" fill="var(--biz-scene-cream)" />
        <path d="M201 103c4-18 34-18 38 0" fill="var(--biz-scene-wood-light)" />
        <circle cx="237" cy="101" r="4" fill="var(--biz-scene-gold)" />
      </g>
      <g>
        <rect x="38" y="178" width="250" height="49" fill="var(--biz-scene-terracotta)" />
        <rect x="38" y="178" width="250" height="6" fill="var(--biz-scene-gold)" />
        <g fill="var(--biz-scene-gold)"><rect x="58" y="137" width="22" height="13" rx="3" /><rect x="91" y="137" width="22" height="13" rx="3" /><rect x="124" y="137" width="22" height="13" rx="3" /><rect x="157" y="137" width="22" height="13" rx="3" /></g>
        <g fill="var(--biz-scene-cream)"><path d="M59 166c0-9 18-9 18 0z" /><path d="M88 166c0-9 18-9 18 0z" /><path d="M117 166c0-9 18-9 18 0z" /></g>
      </g>
      <g>
        <rect x="57" y="194" width="28" height="12" rx="2" fill="var(--biz-scene-wood-dark)" />
        <rect x="93" y="194" width="28" height="12" rx="2" fill="var(--biz-scene-wood-dark)" />
        <circle cx="175" cy="202" r="8" fill="var(--biz-scene-gold)" />
        <circle cx="175" cy="202" r="3" fill="var(--biz-scene-cream)" />
      </g>
    </SceneSvg>
  );
}

function SweetShopScene() {
  return (
    <SceneSvg>
      <rect width="300" height="240" fill="var(--biz-scene-bg)" />
      <rect width="300" height="166" fill="var(--biz-scene-wall)" />
      <rect y="166" width="300" height="74" fill="var(--biz-scene-floor)" />
      <path d="M0 48h300v10H0zM0 105h300v10H0zM0 166h300v13H0z" fill="var(--biz-scene-gold)" />
      <g>
        <rect x="0" y="25" width="300" height="22" fill="var(--biz-scene-wood-dark)" />
        <rect x="25" y="18" width="48" height="27" rx="3" fill="var(--biz-scene-green)" />
        <rect x="83" y="12" width="55" height="34" rx="3" fill="var(--biz-scene-gold)" />
        <rect x="150" y="8" width="63" height="38" rx="4" fill="var(--biz-scene-red)" />
        <circle cx="182" cy="26" r="8" fill="var(--biz-scene-accent-warm)" />
      </g>
      <g>
        <rect x="0" y="61" width="300" height="40" fill="var(--biz-scene-wall-accent)" />
        <rect x="0" y="119" width="300" height="40" fill="var(--biz-scene-wall-accent)" />
        <rect x="12" y="63" width="42" height="36" rx="3" fill="var(--biz-scene-gold)" />
        <rect x="236" y="61" width="48" height="39" rx="3" fill="var(--biz-scene-red)" />
        <path d="M0 120h300" stroke="var(--biz-scene-amber)" strokeWidth="4" />
        <path d="M0 157h300" stroke="var(--biz-scene-wood-dark)" strokeWidth="4" />
        <path d="M13 129h14l8 8-8 8H13l-8-8zM43 129h14l8 8-8 8H43l-8-8zM73 129h14l8 8-8 8H73l-8-8z" fill="var(--biz-scene-cream)" />
        <g fill="var(--biz-scene-red)"><circle cx="218" cy="138" r="7" /><circle cx="238" cy="138" r="7" /><circle cx="258" cy="138" r="7" /></g>
        <g fill="var(--biz-scene-wood-dark)"><circle cx="35" cy="184" r="7" /><circle cx="57" cy="184" r="7" /><circle cx="79" cy="184" r="7" /><circle cx="101" cy="184" r="7" /><circle cx="123" cy="184" r="7" /></g>
      </g>
      <g>
        <rect y="178" width="300" height="10" fill="var(--biz-scene-wood-dark)" />
        <rect y="217" width="300" height="8" fill="var(--biz-scene-gold)" />
        <rect x="0" y="188" width="300" height="29" fill="var(--biz-scene-furniture-dark)" />
        <circle cx="176" cy="203" r="15" fill="var(--biz-scene-gold)" opacity=".7" />
        <circle cx="176" cy="203" r="7" fill="var(--biz-scene-cream)" opacity=".5" />
      </g>
    </SceneSvg>
  );
}

function QsrScene() {
  return (
    <SceneSvg>
      <rect width="300" height="240" fill="var(--biz-scene-bg)" />
      <rect width="300" height="161" fill="var(--biz-scene-wall)" />
      <rect y="161" width="300" height="79" fill="var(--biz-scene-floor)" />
      <rect width="300" height="24" fill="var(--biz-scene-furniture-dark)" />
      <g fill="var(--biz-scene-structure)"><rect x="43" y="6" width="39" height="12" rx="2" /><rect x="92" y="6" width="42" height="12" rx="2" /><rect x="145" y="6" width="38" height="12" rx="2" /><rect x="193" y="6" width="42" height="12" rx="2" /><rect x="244" y="6" width="38" height="12" rx="2" /></g>
      <g>
        <rect x="99" y="42" width="164" height="81" rx="3" fill="var(--biz-scene-wall-accent)" stroke="var(--biz-scene-structure-dark)" />
        <rect x="105" y="49" width="152" height="71" fill="var(--biz-scene-furniture-dark)" />
        <path d="M105 72h152" stroke="var(--biz-scene-structure)" strokeWidth="2" />
        <rect x="119" y="57" width="23" height="13" rx="2" fill="var(--biz-scene-cream)" />
        <rect x="149" y="58" width="23" height="12" rx="2" fill="var(--biz-scene-structure)" />
        <rect x="181" y="56" width="19" height="14" rx="2" fill="var(--biz-scene-gold)" />
        <path d="M122 45h16m34 0h16m34 0h16" stroke="var(--biz-scene-gold)" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g>
        <rect x="75" y="124" width="225" height="97" fill="var(--biz-scene-furniture-dark)" />
        <rect x="88" y="138" width="88" height="68" rx="3" fill="var(--biz-scene-structure-dark)" />
        <rect x="188" y="138" width="102" height="68" rx="3" fill="var(--biz-scene-structure-dark)" />
        <rect x="75" y="214" width="225" height="5" fill="var(--biz-scene-gold)" />
        <rect x="70" y="118" width="230" height="9" rx="2" fill="var(--biz-scene-structure)" />
      </g>
      <g>
        <path d="M91 119h31l-4-48H96z" fill="var(--biz-scene-wood-light)" />
        <path d="M101 71c0-11 13-11 13 0" stroke="var(--biz-scene-wood)" strokeWidth="2" />
        <circle cx="107" cy="92" r="5" fill="var(--biz-scene-gold)" />
        <path d="M123 119h24l-3-37h-18z" fill="var(--biz-scene-wood)" />
        <path d="M155 91h40v28h-40z" fill="var(--biz-scene-gold)" />
        <path d="M155 103h40" stroke="var(--biz-scene-cream)" strokeWidth="5" />
        <path d="M210 118h16l-2-28h-12zM231 118h14l-2-24h-10z" fill="var(--biz-scene-cream)" />
        <path d="m216 90 5-19m16 23 4-16" stroke="var(--biz-scene-red)" strokeWidth="2" />
        <ellipse cx="216" cy="90" rx="7" ry="3" fill="var(--biz-scene-structure)" />
      </g>
      <g>
        <ellipse cx="29" cy="226" rx="14" ry="4" fill="var(--biz-scene-shadow)" />
        <path d="M23 172l-3 54m17-54 3 54" stroke="var(--biz-scene-structure-dark)" strokeWidth="2" />
        <ellipse cx="29" cy="171" rx="14" ry="5" fill="var(--biz-scene-gold)" />
        <ellipse cx="58" cy="223" rx="13" ry="4" fill="var(--biz-scene-shadow)" />
        <path d="M53 174l-3 49m14-49 3 49" stroke="var(--biz-scene-structure-dark)" strokeWidth="2" />
        <ellipse cx="58" cy="174" rx="13" ry="4" fill="var(--biz-scene-gold)" />
      </g>
    </SceneSvg>
  );
}

function DhabaScene() {
  return (
    <SceneSvg>
      <rect width="300" height="240" fill="var(--biz-scene-bg)" />
      <rect width="300" height="130" fill="var(--biz-scene-wall)" />
      <path d="M0 118Q150 108 300 118v14H0z" fill="var(--biz-scene-wall-accent)" />
      <rect y="130" width="300" height="110" fill="var(--biz-scene-floor)" />
      <path d="M0 0h300v35L0 40z" fill="var(--biz-scene-furniture-dark)" />
      <path d="M0 40h300" stroke="var(--biz-scene-wood)" strokeWidth="3" />
      <path d="M12 39Q76 56 150 46t138-12" stroke="var(--biz-scene-structure-dark)" strokeWidth="1.5" />
      <g fill="var(--biz-scene-gold)"><circle cx="49" cy="49" r="4" /><circle cx="100" cy="51" r="4" /><circle cx="150" cy="46" r="4.5" /><circle cx="200" cy="51" r="4" /><circle cx="250" cy="47" r="4" /></g>
      <g fill="var(--biz-scene-glow)" opacity=".8"><circle cx="49" cy="49" r="10" /><circle cx="150" cy="46" r="11" /><circle cx="250" cy="47" r="10" /></g>
      <g>
        <ellipse cx="53" cy="184" rx="27" ry="7" fill="var(--biz-scene-shadow)" />
        <path d="M32 135q-5 26 2 39 19 8 38 0 7-13 1-39z" fill="var(--biz-scene-terracotta)" stroke="var(--biz-scene-wood-dark)" />
        <ellipse cx="53" cy="135" rx="20" ry="6" fill="var(--biz-scene-structure-dark)" />
        <ellipse cx="53" cy="136" rx="14" ry="4" fill="var(--biz-scene-red)" />
        <path d="M68 105 46 155m27-45-21 45" stroke="var(--biz-scene-structure)" strokeWidth="2" />
        <path d="M80 156q-3 12 10 13t10-13z" fill="var(--biz-scene-gold)" />
        <ellipse cx="90" cy="156" rx="8" ry="2" fill="var(--biz-scene-amber)" />
      </g>
      <g>
        <ellipse cx="218" cy="195" rx="63" ry="12" fill="var(--biz-scene-shadow)" />
        <path d="M165 147h104l-9 26H156z" fill="var(--biz-scene-wood)" stroke="var(--biz-scene-wood-dark)" strokeWidth="2" />
        <g stroke="var(--biz-scene-cream)" strokeWidth="1" opacity=".8"><path d="M174 147 164 172m23-25-10 25m23-25-10 25m23-25-10 25m23-25-10 25m23-25-10 25m23-25-10 25" /><path d="M165 153h101m-105 7h102m-106 7h102" /></g>
        <path d="M155 171v25m107-25v25" stroke="var(--biz-scene-wood-dark)" strokeWidth="6" />
        <ellipse cx="182" cy="156" rx="16" ry="6" fill="var(--biz-scene-red)" stroke="var(--biz-scene-gold)" />
      </g>
      <g>
        <ellipse cx="146" cy="229" rx="72" ry="10" fill="var(--biz-scene-shadow)" />
        <path d="m88 194 8 34m110-34 8 34M84 214h126" stroke="var(--biz-scene-wood-dark)" strokeWidth="6" />
        <path d="M76 193h140l-10 15H68z" fill="var(--biz-scene-wood)" stroke="var(--biz-scene-wood-dark)" />
        <rect x="71" y="203" width="135" height="6" fill="var(--biz-scene-wood-dark)" />
        <path d="M111 194h12l-2-17h-7z" fill="var(--biz-scene-structure)" stroke="var(--biz-scene-structure-dark)" />
        <path d="M128 195h8l-1-9h-6zm13 0h8l-1-9h-6z" fill="var(--biz-scene-structure)" />
        <ellipse cx="168" cy="195" rx="13" ry="4" fill="var(--biz-scene-structure)" stroke="var(--biz-scene-structure-dark)" />
      </g>
    </SceneSvg>
  );
}

export default function IndustryShopScene({ id }) {
  switch (id) {
    case 'restaurant':
      return <RestaurantScene />;
    case 'cafe':
      return <CafeScene />;
    case 'bakery':
      return <BakeryScene />;
    case 'sweet-shop':
      return <SweetShopScene />;
    case 'qsr':
      return <QsrScene />;
    case 'dhaba':
      return <DhabaScene />;
    default:
      return <RestaurantScene />;
  }
}
