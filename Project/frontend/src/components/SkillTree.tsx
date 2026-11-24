interface SkillTreeProps {
  compact?: boolean
}

const nodes = [
  { id: 'core', title: 'Digital Core', x: 400, y: 70, status: 'completed', size: 'core' },
  { id: 'data', title: 'Data Literacy', x: 210, y: 190, status: 'completed' },
  { id: 'web', title: 'Web Creation', x: 590, y: 190, status: 'active' },
  { id: 'collab', title: 'Collaboration', x: 110, y: 330, status: 'completed' },
  { id: 'privacy', title: 'Digital Safety', x: 310, y: 330, status: 'locked' },
  { id: 'code', title: 'Problem Solving', x: 510, y: 330, status: 'active' },
  { id: 'portfolio', title: 'Capstone', x: 710, y: 330, status: 'locked' },
]

export default function SkillTree({ compact = false }: SkillTreeProps) {
  const links = [[400,128,210,158],[400,128,590,158],[210,228,110,298],[210,228,310,298],[590,228,510,298],[590,228,710,298]]

  return (
    <div className={compact ? 'skill-tree compact' : 'skill-tree'}>
      <svg viewBox="0 0 820 430" role="img" aria-label="Interactive skill tree">
        {links.map((link, index) => <line key={index} x1={link[0]} y1={link[1]} x2={link[2]} y2={link[3]} className="tree-link" />)}
        {nodes.map((node) => (
          <g key={node.id} className={`tree-node ${node.status}`} transform={`translate(${node.x}, ${node.y})`}>
            <circle r={node.size === 'core' ? 52 : 42} />
            <text y="5" textAnchor="middle">{node.status === 'locked' ? '▣' : node.status === 'completed' ? '✓' : '◆'}</text>
            <text className="tree-node-title" y="70" textAnchor="middle">{node.title}</text>
          </g>
        ))}
      </svg>
    </div>
  )
}
