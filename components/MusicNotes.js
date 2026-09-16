'use client';
import { useEffect } from 'react';

export default function MusicNotes() {
  useEffect(() => {
    const glyphs = ['♩','♪','♫','♬','𝄞','𝄢','♭','♮','♯'];
    const layer = document.getElementById('music-notes-layer');
    if (!layer) return;
    const timers = [];
    function spawn() {
      const el = document.createElement('i');
      el.className = 'mn';
      el.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      const size = 14 + Math.random() * 22;
      el.style.cssText = [
        'left:' + Math.random() * 100 + '%',
        'font-size:' + size + 'px',
        'animation-duration:' + (12 + Math.random() * 18) + 's',
        'animation-delay:' + Math.random() * 8 + 's',
        'color:rgba(201,168,76,' + (0.04 + Math.random() * 0.07) + ')',
      ].join(';');
      layer.appendChild(el);
      timers.push(setTimeout(() => el.remove(), 32000));
    }
    for (let i = 0; i < 18; i++) timers.push(setTimeout(spawn, i * 800));
    const interval = setInterval(spawn, 1800);
    return () => { clearInterval(interval); timers.forEach(clearTimeout); layer.innerHTML = ''; };
  }, []);

  return <div id="music-notes-layer" aria-hidden="true" />;
}
