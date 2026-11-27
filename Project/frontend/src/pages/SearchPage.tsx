import { useSearchParams } from 'react-router-dom'
import { courses, skills } from '../data/mockDatabase'
import './SearchPage.css'

const posts = [
  { id: 'post-1', category: 'AI', title: 'AI đang thay đổi cách học và làm việc', excerpt: 'Xu hướng và ứng dụng thực tế trong môi trường giáo dục kỹ thuật số.', readTime: '6 phút', image: 'https://placehold.co/320x180/0f172a/e2e8f0?text=AI' },
  { id: 'post-2', category: 'Học tập', title: 'Xây dựng thói quen học tập hiệu quả', excerpt: 'Cách duy trì động lực và quản lý thời gian để học đều đặn.', readTime: '4 phút', image: 'https://placehold.co/320x180/dbeafe/1d4ed8?text=Study' },
]

export default function SearchPage() {
  const [params, setParams] = useSearchParams()
  const query = params.get('q') || ''
  const selected = params.get('type') || 'all'

  const setType = (type: string) => {
    const next = new URLSearchParams(params)
    next.set('type', type)
    setParams(next)
  }

  return (
    <div className="search-page">
      <aside className="search-sidebar">
        <h2>Bộ lọc</h2>
        <div className="filter-group">
          <h3>Loại kết quả</h3>
          {[
            ['all', 'Tất cả'], ['course', 'Khóa học'], ['skill', 'Kỹ năng'], ['post', 'Bài viết'],
          ].map(([value, label]) => (
            <button type="button" key={value} className={selected === value ? 'selected' : ''} onClick={() => setType(value)}>
              <span className="filter-radio" /><span>{label}</span>{value === 'all' && <b>{courses.length + skills.length + posts.length}</b>}
            </button>
          ))}
        </div>
        <div className="filter-group">
          <h3>Trình độ</h3>
          <label><input type="checkbox" /> Cơ bản</label>
          <label><input type="checkbox" /> Trung cấp</label>
          <label><input type="checkbox" /> Nâng cao</label>
        </div>
        <div className="filter-group">
          <h3>Kỹ năng cụ thể</h3>
          {skills.slice(0, 4).map(skill => <label key={skill.id}><input type="checkbox" /> {skill.name}</label>)}
        </div>
      </aside>

      <main className="search-results">
        <div className="search-summary">
          <div><span>KẾT QUẢ TÌM KIẾM</span><h1>{query ? `“${query}”` : 'Khám phá tất cả'}</h1></div>
          <strong>{courses.length + skills.length + posts.length} kết quả</strong>
        </div>

        {(selected === 'all' || selected === 'course') && (
          <section className="result-section">
            <div className="result-heading"><h2>Khóa học</h2><span>{courses.length}</span></div>
            <div className="course-results">
              {courses.slice(0, 3).map((course, index) => (
                <button type="button" className="course-result" key={course.id}>
                  <img src={course.image_url} alt="" />
                  <div><span className="result-kind">KHÓA HỌC</span><h3>{course.title}</h3><p>{course.description}</p><b>{index === 0 ? 'Nâng cao' : 'Trung cấp'} · {8 + index * 4} bài học</b></div>
                </button>
              ))}
            </div>
          </section>
        )}

        {(selected === 'all' || selected === 'skill') && (
          <section className="result-section">
            <div className="result-heading"><h2>Kỹ năng</h2><span>{skills.length}</span></div>
            <div className="skill-results">
              {skills.slice(0, 4).map((skill, index) => (
                <button type="button" className="skill-result" key={skill.id}><span style={{ background: ['#3b82f6','#8b5cf6','#10b981','#f59e0b'][index] }}>{index + 1}</span><div><h3>{skill.name}</h3><p>{skill.description}</p></div><b>3 khóa học →</b></button>
              ))}
            </div>
          </section>
        )}

        {(selected === 'all' || selected === 'post') && (
          <section className="result-section">
            <div className="result-heading"><h2>Bài viết</h2><span>{posts.length}</span></div>
            <div className="post-results">
              {posts.map(post => (
                <article className="post-result" key={post.id}><img src={post.image} alt="" /><div><span className="result-kind">BÀI VIẾT · {post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p><b>{post.readTime} đọc</b></div></article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
