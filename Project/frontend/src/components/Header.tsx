
import { NavLink } from 'react-router-dom'
import './Header.css'

interface HeaderProps {
  avatarUrl?: string
}

export default function Header({ avatarUrl }: HeaderProps) {
  return (
    <header className="topbar">
      <div className="topbar-inner">

        <NavLink className="brand" to="/">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <polygon points="12,2 22,9.2 18.2,21 5.8,21 2,9.2" />
            </svg>
          </span>
          <span>DIGITAL-<span>TVU</span></span>
        </NavLink>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink
            className={({ isActive }) =>
              `nav-link${isActive ? ' active' : ''}`
            }
            to="/"
            end
          >
            Trang chủ
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-link${isActive ? ' active' : ''}`
            }
            to="/course"
          >
            Khoá học
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-link${isActive ? ' active' : ''}`
            }
            to="/skill"
          >
            Kỹ năng
          </NavLink>
        </nav>

        <div className="profile-area">
          <NavLink className="profile" to="/user">
            <div className="profile-copy">
              <strong>Alex Rivera</strong>
            </div>

            <div className="avatar">
              {avatarUrl ? (
                <img src={avatarUrl} alt="Alex Rivera" />
              ) : (
                'AR'
              )}
            </div>
          </NavLink>
        </div>

      </div>
    </header>
  )
}
