import { useNavigate } from 'react-router-dom'
import { courses, skills } from '../data/mockDatabase'
import './DiscoverPage.css'

const posts = [
  { id: 'post-1', tag: 'Xu hướng', title: 'AI đang thay đổi cách học và làm việc như thế nào?', excerpt: 'Khám phá những thay đổi thiết thực của trí tuệ nhân tạo trong giáo dục kỹ thuật số.', readTime: '6 phút đọc', image: 'https://placehold.co/960x540/0f172a/e2e8f0?text=AI+in+Education' },
  { id: 'post-2', tag: 'Mẹo học tập', title: '5 cách xây dựng thói quen học tập bền vững', excerpt: 'Những phương pháp đơn giản giúp duy trì động lực và tiến bộ mỗi ngày.', readTime: '4 phút đọc', image: 'https://placehold.co/960x540/dbeafe/1d4ed8?text=Learning+Habits' },
  { id: 'post-3', tag: 'Kỹ năng số', title: 'Tư duy phản biện trong thời đại thông tin', excerpt: 'Cách kiểm tra nguồn, nhận diện thiên kiến và đánh giá dữ liệu đáng tin cậy.', readTime: '5 phút đọc', image: 'https://placehold.co/960x540/d1fae5/047857?text=Critical+Thinking' },
]

export default function DiscoverPage() {
  const navigate = useNavigate()

  return (
    <div className="discover-page">
      <section className="discover-hero">
        <div>
          <span className="eyebrow">Khám phá</span>
          <h1>Tìm điều bạn muốn học tiếp theo</h1>
          <p>Khám phá khóa học, kỹ năng số và bài viết mới được đề xuất dành cho bạn.</p>
        </div>
        <button className="discover-search" type="button" onClick={() => navigate('/search')}>
          <span aria-hidden="true">⌕</span>
          <span>Tìm khóa học, kỹ năng, bài viết...</span>
          <kbd>⌘ K</kbd>
        </button>
      </section>

      <section className="discover-section">
        <div className="discover-section-heading">
          <div><span className="section-kicker">GỢI Ý CHO BẠN</span><h2>Khóa học nổi bật</h2></div>
          <button type="button">Xem tất cả →</button>
        </div>
        <div className="discover-course-grid">
          {courses.slice(0, 3).map((course, index) => (
            <button className="discover-course-card" type="button" key={course.id} onClick={() => navigate('/course')}>
              <img src={course.image_url} alt="" />
              <div className="discover-course-body">
                <span className={`course-level level-${index}`}>{index === 0 ? 'Nâng cao' : index === 1 ? 'Cơ bản' : 'Trung cấp'}</span>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="discover-progress"><span style={{ width: `${course.completion_percentage}%` }} /></div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="discover-section">
        <div className="discover-section-heading">
          <div><span className="section-kicker">KỸ NĂNG SỐ</span><h2>Có khóa học phù hợp</h2></div>
          <button type="button" onClick={() => navigate('/skill')}>Khám phá kỹ năng →</button>
        </div>
        <div className="discover-skills-grid">
          {skills.map((skill, index) => (
            <button className="discover-skill-card" type="button" key={skill.id} onClick={() => navigate('/skill')}>
              <span className="discover-skill-icon" style={{ background: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#f43f5e'][index] }}>{index + 1}</span>
              <div><h3>{skill.name}</h3><p>{skill.description}</p></div>
              <strong>{2 + index} khóa học</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="discover-section">
        <div className="discover-section-heading">
          <div><span className="section-kicker">ĐỌC THÊM</span><h2>Bài viết dành cho bạn</h2></div>
          <button type="button">Xem tất cả bài viết →</button>
        </div>
        <div className="discover-post-grid">
          {posts.map(post => (
            <article className="discover-post-card" key={post.id}>
              <img src={post.image} alt="" />
              <div className="discover-post-body">
                <span>{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div><strong>{post.readTime}</strong><button type="button">Đọc bài →</button></div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
