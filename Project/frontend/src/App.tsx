import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CoursePage from './pages/CoursePage'
import SkillPage from './pages/SkillPage'
import UserPage from './pages/UserPage'

export default function App() {
	return (
		<BrowserRouter>
			<div className="app-shell">
				<Header avatarUrl="https://placehold.co/96x96/0f172a/ffffff?text=AR" />
				<main className="main-content">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/course" element={<CoursePage />} />
						<Route path="/skill" element={<SkillPage />} />
						<Route path="/user" element={<UserPage />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	)
}
