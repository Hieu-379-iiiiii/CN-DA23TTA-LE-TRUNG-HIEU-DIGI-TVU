type Page = 'dashboard' | 'courses' | 'skill-tree'

interface HeaderProps {
  activePage: Page
  avatarUrl?: string
  onNavigate: (page: Page) => void
}

export default function Header({ activePage, avatarUrl, onNavigate }: HeaderProps) {
  const items: { id: Page; label: string }[] = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'courses', label: 'Courses' },
    { id: 'skill-tree', label: 'Skill Tree' },
  ]

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <button className="brand" type="button" onClick={() => onNavigate('dashboard')}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24"><polygon points="12,2 22,9.2 18.2,21 5.8,21 2,9.2" /></svg>
          </span>
          <span>Edu<span>Core</span></span>
        </button>

        <nav className="nav-links" aria-label="Main navigation">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activePage === item.id ? 'nav-link active' : 'nav-link'}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="profile-area">
          <span className="term-pill">Fall Term 2026</span>
          <button className="icon-button" type="button" aria-label="Notifications">♢</button>
          <div className="profile">
            <div className="profile-copy"><strong>Alex Rivera</strong><span>CS Year 2</span></div>
            <div className="avatar">
              {avatarUrl ? <img src={avatarUrl} alt="Alex Rivera" /> : 'AR'}
              <span />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
