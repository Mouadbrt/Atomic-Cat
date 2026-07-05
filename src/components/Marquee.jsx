import React from 'react'
export default function Marquee() {
  const words = ['Specialty Coffee', 'Community Events', 'Vinyl Records', 'COFFEE', 'LATTE', 'Study Corners', 'CAFE', 'Natural Light', 'COFFEE', 'Warm vintage soul']

  return (
    <div className="marquee">
      <div className="marquee__track">
        {words.map((word, index) => (
          <span key={`${word}-${index}`}>{word}</span>
        ))}
      </div>
    </div>
  )
}
