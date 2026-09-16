// Event artwork — one original SVG per event, plus the Vision 2020 banner.
export default function EventArt({ kind }) {
  if (kind === 'banner') {
    return <img src="/images/vision-2020-banner.webp" alt="Vision 2020: Back to School event banner" className="ev-thumb-img" />;
  }
  return ART[kind] || null;
}

const ART = {
  wave: (
    <svg className="ev-art" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><defs><linearGradient id="e1bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#162038" /><stop offset="1" stopColor="#0a1628" /></linearGradient><radialGradient id="e1glow" cx="50%" cy="45%" r="65%"><stop offset="0" stopColor="#c9a84c" stopOpacity=".30" /><stop offset="1" stopColor="#c9a84c" stopOpacity="0" /></radialGradient></defs><rect width="400" height="300" fill="url(#e1bg)" /><rect width="400" height="300" fill="url(#e1glow)" />
          <g opacity=".18" stroke="#f4efe6" strokeWidth="1">
            <line x1="0" y1="70" x2="400" y2="70" /><line x1="0" y1="94" x2="400" y2="94" />
            <line x1="0" y1="206" x2="400" y2="206" /><line x1="0" y1="230" x2="400" y2="230" />
          </g>
          <g fill="none" stroke="#c9a84c" opacity=".22">
            <circle cx="300" cy="150" r="46" strokeWidth="1" />
            <circle cx="300" cy="150" r="72" strokeWidth="1" />
            <circle cx="300" cy="150" r="100" strokeWidth="1" />
          </g>
          <path d="M-10,150 L0,150 L6,155 L12,159 L18,162 L24,162 L30,160 L36,155 L42,149 L48,142 L54,136 L60,133 L66,134 L72,138 L78,145 L84,153 L90,162 L96,168 L102,171 L108,170 L114,164 L120,154 L126,144 L132,134 L138,127 L144,124 L150,127 L156,135 L162,147 L168,160 L174,171 L180,179 L186,180 L192,175 L198,165 L204,151 L216,150 L228,96 L240,204 L252,132 L264,150 L410,150" fill="none" stroke="#e0c070" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="300" cy="150" r="15" fill="#c9a84c" opacity=".9" />
          <text x="300" y="157" fontFamily="Georgia,serif" fontSize="20" fill="#0a1628" textAnchor="middle">&#9834;</text>
          </svg>
  ),
  screen: (
    <svg className="ev-art" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><defs><linearGradient id="e2bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#162038" /><stop offset="1" stopColor="#0a1628" /></linearGradient><radialGradient id="e2glow" cx="50%" cy="45%" r="65%"><stop offset="0" stopColor="#c9a84c" stopOpacity=".30" /><stop offset="1" stopColor="#c9a84c" stopOpacity="0" /></radialGradient></defs><rect width="400" height="300" fill="url(#e2bg)" /><rect width="400" height="300" fill="url(#e2glow)" />
          <g opacity=".5"><path d="M120,120 L40,300 L360,300 L280,120 Z" fill="#c9a84c" opacity=".07" /></g>
          <rect x="112" y="52" width="176" height="112" rx="4" fill="#0d1e38" stroke="#c9a84c" strokeWidth="2" />
          <g stroke="#f4efe6" strokeWidth="1" opacity=".28">
            <line x1="132" y1="82" x2="268" y2="82" /><line x1="132" y1="96" x2="268" y2="96" />
            <line x1="132" y1="110" x2="268" y2="110" /><line x1="132" y1="124" x2="268" y2="124" />
          </g>
          <g fill="#e0c070">
            <ellipse cx="172" cy="122" rx="11" ry="8" /><rect x="180" y="82" width="3" height="42" />
            <ellipse cx="222" cy="110" rx="11" ry="8" /><rect x="230" y="70" width="3" height="42" />
            <path d="M180,82 L233,70 L233,80 L180,92 Z" />
          </g>
          <rect x="192" y="164" width="16" height="34" fill="#c9a84c" opacity=".55" />
          <rect x="168" y="198" width="64" height="7" rx="3" fill="#c9a84c" opacity=".55" />
          <g fill="#f4efe6" opacity=".38">
            <circle cx="72" cy="248" r="13" /><circle cx="128" cy="262" r="13" /><circle cx="200" cy="268" r="13" />
            <circle cx="272" cy="262" r="13" /><circle cx="328" cy="248" r="13" />
          </g>
          </svg>
  ),
  mountains: (
    <svg className="ev-art" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><defs><linearGradient id="e3bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#162038" /><stop offset="1" stopColor="#0a1628" /></linearGradient><radialGradient id="e3glow" cx="50%" cy="45%" r="65%"><stop offset="0" stopColor="#c9a84c" stopOpacity=".30" /><stop offset="1" stopColor="#c9a84c" stopOpacity="0" /></radialGradient></defs><rect width="400" height="300" fill="url(#e3bg)" /><rect width="400" height="300" fill="url(#e3glow)" />
          <circle cx="308" cy="82" r="34" fill="#e0c070" opacity=".85" />
          <circle cx="308" cy="82" r="52" fill="#c9a84c" opacity=".15" />
          <g opacity=".16" stroke="#f4efe6" strokeWidth="1">
            <line x1="0" y1="46" x2="400" y2="46" /><line x1="0" y1="62" x2="400" y2="62" />
            <line x1="0" y1="110" x2="400" y2="110" />
          </g>
          <path d="M-10,196 L74,120 L128,168 L188,104 L262,186 L318,146 L410,206 L410,310 L-10,310 Z" fill="#0d1e38" />
          <path d="M-10,232 L60,178 L136,222 L214,164 L288,224 L352,190 L410,238 L410,310 L-10,310 Z" fill="#111d35" />
          <path d="M188,104 L206,124 L188,132 L172,124 Z" fill="#f4efe6" opacity=".8" />
          <path d="M74,120 L88,136 L74,142 L62,136 Z" fill="#f4efe6" opacity=".6" />
          <path d="M10,286 C90,258 118,232 186,244 C252,256 288,232 392,250" fill="none" stroke="#e0c070" strokeWidth="3" strokeLinecap="round" strokeDasharray="11 9" />
          <circle cx="186" cy="244" r="8" fill="#e0c070" />
          </svg>
  ),
  bongo: (
    <svg className="ev-art" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><defs><linearGradient id="e5bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#162038" /><stop offset="1" stopColor="#0a1628" /></linearGradient><radialGradient id="e5glow" cx="50%" cy="45%" r="65%"><stop offset="0" stopColor="#c9a84c" stopOpacity=".30" /><stop offset="1" stopColor="#c9a84c" stopOpacity="0" /></radialGradient></defs><rect width="400" height="300" fill="url(#e5bg)" /><rect width="400" height="300" fill="url(#e5glow)" />
          <g fill="none" stroke="#c9a84c" opacity=".2" strokeWidth="1">
            <circle cx="200" cy="160" r="82" /><circle cx="200" cy="160" r="112" />
            <circle cx="200" cy="160" r="142" /><circle cx="200" cy="160" r="172" />
          </g>
          <g opacity=".55" fill="#f4efe6">
            <circle cx="200" cy="34" r="9" /><circle cx="290" cy="70" r="9" /><circle cx="326" cy="160" r="9" />
            <circle cx="290" cy="250" r="9" /><circle cx="200" cy="286" r="9" /><circle cx="110" cy="250" r="9" />
            <circle cx="74" cy="160" r="9" /><circle cx="110" cy="70" r="9" />
          </g>
          <g>
            <ellipse cx="164" cy="176" rx="52" ry="34" fill="#111d35" stroke="#c9a84c" strokeWidth="3" />
            <ellipse cx="164" cy="176" rx="38" ry="23" fill="#0a1628" stroke="#e0c070" strokeWidth="1.5" />
            <path d="M112,176 L120,222 C132,236 196,236 208,222 L216,176 Z" fill="#0d1e38" stroke="#c9a84c" strokeWidth="2" />
          </g>
          <g>
            <ellipse cx="246" cy="152" rx="44" ry="29" fill="#111d35" stroke="#c9a84c" strokeWidth="3" />
            <ellipse cx="246" cy="152" rx="32" ry="19" fill="#0a1628" stroke="#e0c070" strokeWidth="1.5" />
            <path d="M202,152 L210,192 C220,204 272,204 282,192 L290,152 Z" fill="#0d1e38" stroke="#c9a84c" strokeWidth="2" />
          </g>
          <g fill="#e0c070" fontFamily="Georgia,serif" fontSize="26" opacity=".8">
            <text x="86" y="92">&#9834;</text><text x="300" y="252">&#9835;</text><text x="316" y="104">&#9833;</text>
          </g>
          </svg>
  ),
};
