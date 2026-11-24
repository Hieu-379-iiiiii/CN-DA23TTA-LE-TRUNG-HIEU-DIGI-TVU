import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Pentagon from './components/Pentagon'
import CourseCard from './components/CourseCard'
import SkillTree from './components/SkillTree'

type Page = 'dashboard' | 'courses' | 'skill-tree'

const courses = [
	{
		code: 'DATA-101',
		title: 'Data Literacy & Analytics',
		meta: 'Prof. Elena Vance • 8 lessons',
		progress: 92,
		color: '#3b82f6',
		imageUrl: 'https://placehold.co/640x360/dbeafe/1d4ed8?text=Data+Literacy',
	},
	{
		code: 'WEB-204',
		title: 'Interactive Media Creation',
		meta: 'Dr. Marcus Chen • 12 lessons',
		progress: 88,
		color: '#10b981',
		imageUrl: 'https://placehold.co/640x360/d1fae5/047857?text=Web+Creation',
	},
	{
		code: 'COMM-112',
		title: 'Digital Team Collaboration',
		meta: 'Prof. Sarah Jenkins • 6 lessons',
		progress: 86,
		color: '#f59e0b',
		imageUrl: 'https://placehold.co/640x360/fef3c7/b45309?text=Collaboration',
	},
	{
		code: 'ALGO-301',
		title: 'Applied Problem Solving',
		meta: 'Dr. Aris Thorne • 10 lessons',
		progress: 75,
		color: '#f43f5e',
		imageUrl: 'https://placehold.co/640x360/ffe4e6/be123c?text=Problem+Solving',
	},
]

function Dashboard({ onNavigate }: { onNavigate: (page: Page) => void }) {
	return (
		<>
			<section className="page-heading">
				<div>
					<h1>Student Competence Overview</h1>
					<p>
						Explore your core digital skill domains, coursework, and academic
						standing.
					</p>
				</div>
				<span className="mastery">
					<i /> Overall Mastery: 84%
				</span>
			</section>
			<Pentagon />
			<div className="dashboard-grid">
				<section className="panel courses-panel">
					<div className="panel-heading">
						<div>
							<h2>Enrolled Courses</h2>
							<p>Active modules mapped to your competence matrix</p>
						</div>
						<span className="count-badge">4 Active</span>
					</div>
					<div className="course-grid">
						{courses.map((course) => (
							<CourseCard
								key={course.code}
								{...course}
								onOpen={() => onNavigate('courses')}
							/>
						))}
					</div>
				</section>
				<section className="panel grades-panel">
					<div className="panel-heading">
						<div>
							<h2>My Grades</h2>
							<p>Cumulative standing</p>
						</div>
						<span className="list-badge">Dean's List</span>
					</div>
					<div className="stat-grid">
						<div className="dark-stat">
							<span>Term GPA</span>
							<strong>3.88</strong>
						</div>
						<div>
							<span>Credits</span>
							<strong>48 / 120</strong>
						</div>
						<div>
							<span>Standing</span>
							<strong className="blue">Top 8%</strong>
						</div>
					</div>
					<div className="assessment-list">
						<span className="section-label">Recent Assessments</span>
						<div className="assessment">
							<div>
								<strong>SQL Query Optimization Lab</strong>
								<span>DATA-101 • Nov 18</span>
							</div>
							<b className="blue-result">A · 96%</b>
						</div>
						<div className="assessment">
							<div>
								<strong>SVG Vector UI Architecture</strong>
								<span>WEB-204 • Nov 14</span>
							</div>
							<b className="green-result">A · 94%</b>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

function CoursesPage({ onNavigate }: { onNavigate: (page: Page) => void }) {
	return (
		<>
			<section className="page-heading">
				<div>
					<span className="eyebrow">Learning Library</span>
					<h1>My Courses</h1>
					<p>
						Continue your active learning paths and view course assessments.
					</p>
				</div>
				<button className="primary-button" type="button">
					Browse catalog
				</button>
			</section>
			<section className="panel course-library">
				<div className="course-toolbar">
					<div>
						<h2>Active courses</h2>
						<p>Sorted by recent activity</p>
					</div>
					<div className="filter-tabs">
						<button className="active">All</button>
						<button>In progress</button>
						<button>Completed</button>
					</div>
				</div>
				<div className="course-grid large">
					{courses.map((course) => (
						<CourseCard
							key={course.code}
							{...course}
							onOpen={() => onNavigate('skill-tree')}
						/>
					))}
				</div>
			</section>
		</>
	)
}

function SkillTreePage() {
	return (
		<>
			<section className="page-heading">
				<div>
					<span className="eyebrow">Learning Path</span>
					<h1>Digital Skills Tree</h1>
					<p>
						Follow dependencies, unlock advanced skills, and choose your next
						course.
					</p>
				</div>
				<span className="mastery">
					<i /> 6 of 10 unlocked
				</span>
			</section>
			<section className="panel tree-panel">
				<div className="panel-heading">
					<div>
						<h2>Computer Science Pathway</h2>
						<p>Node positions are prepared from database coordinates</p>
					</div>
					<div className="tree-legend">
						<span>
							<i className="done" />
							Completed
						</span>
						<span>
							<i className="active" />
							In progress
						</span>
						<span>
							<i className="locked" />
							Locked
						</span>
					</div>
				</div>
				<SkillTree />
			</section>
		</>
	)
}

export default function App() {
	const [activePage, setActivePage] = useState<Page>('dashboard')
	return (
		<div className="app-shell">
			<Header
				activePage={activePage}
				avatarUrl="https://placehold.co/96x96/0f172a/ffffff?text=AR"
				onNavigate={setActivePage}
			/>
			<main className="main-content">
				{activePage === 'dashboard' && <Dashboard onNavigate={setActivePage} />}
				{activePage === 'courses' && <CoursesPage onNavigate={setActivePage} />}
				{activePage === 'skill-tree' && <SkillTreePage />}
			</main>
		</div>
	)
}
