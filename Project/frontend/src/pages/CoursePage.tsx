import CourseCard from '../components/CourseCard'
import { courses } from '../data/mockDatabase'
import './CoursePage.css'

export default function CoursePage() {
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#f43f5e']
  return <>
    <section className="page-heading"><div><span className="eyebrow">Learning Library</span><h1>My Courses</h1><p>Continue active learning paths and course assessments.</p></div></section>
    <section className="panel course-library">
      <div className="course-toolbar"><div><h2>Active courses</h2><p>Sorted by recent activity</p></div><div className="filter-tabs"><button className="active">All</button><button>In progress</button><button>Completed</button></div></div>
      <div className="course-grid large">{courses.map((course, index) => <CourseCard key={course.id} code={course.slug} title={course.title} meta={course.description} progress={course.completion_percentage} color={colors[index]} imageUrl={course.image_url} onOpen={() => {}} />)}</div>
    </section>
  </>
}
