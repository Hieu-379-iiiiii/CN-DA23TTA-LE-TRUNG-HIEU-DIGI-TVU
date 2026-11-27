import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CoursePage from './pages/CoursePage'
import SkillPage from './pages/SkillPage'
import UserPage from './pages/UserPage'
import DiscoverPage from './pages/DiscoverPage'
import SearchPage from './pages/SearchPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function AppRoutes() {
	const location = useLocation()
	const isAuthPage = location.pathname === '/login' || location.pathname === '/register'

	return (
		<div className="app-shell">
			{!isAuthPage && <Header avatarUrl="https://placehold.co/96x96/0f172a/ffffff?text=AR" />}
			{isAuthPage ? (
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
				</Routes>
			) : (
				<main className="main-content">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/course" element={<CoursePage />} />
						<Route path="/skill" element={<SkillPage />} />
						<Route path="/user" element={<UserPage />} />
						<Route path="/discover" element={<DiscoverPage />} />
						<Route path="/search" element={<SearchPage />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</main>
			)}
		</div>
	)
}

export default function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	)
}
