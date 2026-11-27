import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import './Header.css'

interface HeaderProps {
  avatarUrl?: string
}

export default function Header({ avatarUrl }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const routeQuery = params.get('q') || ''

    if (location.pathname === '/search' && routeQuery) {
      setQuery(routeQuery)
      setSearchOpen(true)
    } else {
      setSearchOpen(false)
      setQuery('')
    }
  }, [location.pathname, location.search])

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
      event.preventDefault()

      const trimmedQuery = query.trim()
      if (!trimmedQuery) return

      navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`)
  }

  const clearSearch = () => {
    setQuery('')
    setSearchOpen(false)

    if (location.pathname === '/search') {
      const params = new URLSearchParams(location.search)
      params.delete('q')
      navigate({ pathname: '/search', search: params.toString() ? `?${params.toString()}` : '' })
    }
  }

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <NavLink className="brand" to="/">
          <span>DIGITAL-<span>TVU</span></span>
        </NavLink>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            to="/"
            end
          >
            Trang chủ
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            to="/discover"
          >
            Khám phá
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            to="/course"
          >
            Khoá học
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            to="/skill"
          >
            Kỹ năng
          </NavLink>
        </nav>

        <div className="header-actions">
          <form
            className={`header-search${searchOpen ? ' open' : ''}`}
            onSubmit={handleSubmit}
          >
            {searchOpen && (
              <input
                autoFocus
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Tìm kiếm..."
                aria-label="Tìm kiếm"
              />
            )}
            {searchOpen && query && (
              <button
                type="button"
                className="search-clear"
                onClick={clearSearch}
                aria-label="Xóa tìm kiếm"
              >
                ×
              </button>
            )}
            <button
              type={searchOpen ? 'submit' : 'button'}
              className="search-submit"
              onClick={() => !searchOpen && setSearchOpen(true)}
              aria-label="Tìm kiếm"
            >
              <span aria-hidden="true">⌕</span>
            </button>
          </form>

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
