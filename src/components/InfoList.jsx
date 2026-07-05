import React from 'react'
export default function InfoList({ rows }) {
  return (
    <div className="info-list">
      {rows.map(([label, value]) => (
        <div className="info-row" key={label}>
          <span>{label}</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  )
}
