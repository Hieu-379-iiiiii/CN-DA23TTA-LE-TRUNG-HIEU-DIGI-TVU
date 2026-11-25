import { useState } from 'react'
import './Pentagon.css'

const sectors = [
  { id: 1, code: 'INFO', title: 'Information & Data Literacy', short: 'Info & Data', score: 92, level: 4, course: 'DATA-101', color: '#3b82f6', light: '#dbeafe', polygon: '250,193 250,60 410,176 346,206 298,228', label: [308,152] },
  { id: 2, code: 'COMM', title: 'Communication & Collaboration', short: 'Communication', score: 86, level: 4, course: 'COMM-112', color: '#f59e0b', light: '#fef3c7', polygon: '298,228 346,206 410,176 348,364 309,318 279,284', label: [342,266] },
  { id: 3, code: 'CREATE', title: 'Digital Content Creation', short: 'Digital Content', score: 88, level: 4, course: 'WEB-204', color: '#10b981', light: '#d1fae5', polygon: '279,284 309,318 348,364 152,364 191,318 221,284', label: [250,330] },
  { id: 4, code: 'SAFETY', title: 'Safety & Digital Wellbeing', short: 'Safety', score: 79, level: 3, course: 'SAFE-105', color: '#eab308', light: '#fef9c3', polygon: '221,284 191,318 152,364 90,176 154,206 202,228', label: [158,266] },
  { id: 5, code: 'SOLVE', title: 'Technical Problem Solving', short: 'Problem Solving', score: 75, level: 3, course: 'ALGO-301', color: '#f43f5e', light: '#ffe4e6', polygon: '202,228 154,206 90,176 250,60 250,193', label: [192,152] },
]

export default function Pentagon() {
  const [active, setActive] = useState(1)
  const selected = sectors.find((sector) => sector.id === active) ?? sectors[0]

  return (
    <section className="panel competence-panel">
      <div className="panel-heading">
        <div><span className="eyebrow">Bảng đánh giá</span><h2>DIGCOM 3.0</h2></div>
        <span className="prototype-tag">Interactive Prototype</span>
      </div>
      <div className="competence-grid">
        <div className="pentagon-canvas">
          <svg viewBox="0 0 500 500" role="img" aria-label="Five digital competence areas">
            <polygon points="250,193 298,228 279,284 221,284 202,228" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
            <text x="250" y="246" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="800">DIGITAL</text>
            <text x="250" y="261" textAnchor="middle" fill="#94a3b8" fontSize="9.5" fontWeight="700">CORE</text>
            {sectors.map((sector) => (
              <g
                key={sector.id}
                className={`skill-sector sector-${sector.id}${active === sector.id ? ' active-sector' : ''}`}
                onMouseEnter={() => setActive(sector.id)}
                onClick={() => setActive(sector.id)}
                role="button"
                tabIndex={0}
              >
                <polygon className="sector-polygon" points={sector.polygon} fill={sector.color} />
                <g className="sector-label" transform={`translate(${sector.label[0]}, ${sector.label[1]})`}>
                  <text x="0" y="-6" textAnchor="middle" fill="#fff" fontSize="11.5" fontWeight="800">0{sector.id} • {sector.code}</text>
                  <text x="0" y="9" textAnchor="middle" fill={sector.light} fontSize="9.5" fontWeight="700">{sector.short}</text>
                </g>
              </g>
            ))}
          </svg>
        </div>

        <div className="competence-inspector">
          <div className="inspector-card" style={{ borderTopColor: selected.color }}>
            <div className="inspector-meta"><span style={{ background: selected.color }}>0{selected.id} • {selected.code}</span><strong>Level {selected.level} • {selected.score} pts</strong></div>
            <h3>{selected.title}</h3>
            <p>Explore lessons and assessments linked to this competence area.</p>
            <div className="inspector-footer"><span>Linked course</span><strong>{selected.course}</strong></div>
          </div>
          <div className="domain-list">
            {sectors.map((sector) => (
              <button key={sector.id} type="button" className={active === sector.id ? 'domain-row selected' : 'domain-row'} onMouseEnter={() => setActive(sector.id)} onClick={() => setActive(sector.id)}>
                <span className="domain-dot" style={{ background: sector.color }} />
                <span>0{sector.id} • {sector.short}</span><strong style={{ color: sector.color }}>{sector.score}%</strong>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
