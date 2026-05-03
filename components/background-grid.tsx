"use client";

import { useEffect, useState } from "react";

export default function BackgroundGrid() {
  const [tileCount, setTileCount] = useState(100);

  useEffect(() => {
    const itemSize = 40; // matches w-10 h-10
    const width = window.screen.availWidth;
    const height = window.screen.availHeight;

    const cols = Math.floor(width / itemSize);
    const rows = Math.floor(height / itemSize);
    const total = cols * rows;

    setTileCount(total);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-wrap justify-start items-start bg-transparent z-0">
      {Array.from({ length: tileCount }, (_, i) => (
        <div
          key={i}
          className="w-10 h-10 border-[0.5px] border-zinc-900 opacity-70"
        />
      ))}
    </div>
  );
}