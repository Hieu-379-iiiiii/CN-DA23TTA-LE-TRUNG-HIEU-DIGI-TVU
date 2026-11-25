import Pentagon from '../components/Pentagon'
import CourseCard from '../components/CourseCard'
import { courses, currentUser, skills } from '../data/mockDatabase'
import './HomePage.css'

export default function HomePage() {
  const average = skills.length ? Math.round(skills.reduce((sum, _skill, index) => sum + [92,86,88,79,75][index], 0) / skills.length) : 0
  return (
    <>
      <section className="page-heading">
        <div><span className="eyebrow">Học tập</span><h1>Student Competence Overview</h1><p>Explore your digital skill domains, coursework and academic standing.</p></div>
        <span className="mastery"><i />Overall Mastery: {average}%</span>
      </section>
      <Pentagon />
      <div className="dashboard-grid">
        <section className="panel courses-panel">
          <div className="panel-heading"><div><h2>Enrolled Courses</h2><p>Active modules mapped to your competence matrix</p></div><span className="count-badge">{courses.length} Active</span></div>
          <div className="course-grid">{courses.map((course, index) => (
            <CourseCard key={course.id} code={`COURSE-${index + 1}`} title={course.title} meta={course.description} progress={course.completion_percentage} color={['#3b82f6','#10b981','#f59e0b','#f43f5e'][index]} imageUrl={course.image_url} onOpen={() => { window.location.href = '/course' }} />
          ))}</div>
        </section>
        <section className="panel grades-panel">
          <div className="panel-heading"><div><h2>My Profile</h2><p>{currentUser.major}</p></div><span className="count-badge">Year {currentUser.year_of_study}</span></div>
          <div className="stat-grid"><div className="dark-stat"><span>Info & data</span><strong>{currentUser.score_info_data}%</strong></div><div><span>Creation</span><strong>{currentUser.score_content_creation}%</strong></div><div><span>Solving</span><strong>{currentUser.score_problem_solving}%</strong></div></div>
        </section>
      </div>
    </>
  )
}
