interface CourseCardProps {
  code: string
  title: string
  meta: string
  progress: number
  color: string
  imageUrl?: string
  onOpen: () => void
}

export default function CourseCard({ code, title, meta, progress, color, imageUrl, onOpen }: CourseCardProps) {
  return (
    <button type="button" className="course-card" onClick={onOpen}>
      {imageUrl && <img className="course-cover" src={imageUrl} alt="" />}
      <div className="course-card-top"><span style={{ background: `${color}18`, color }}>{code}</span><span>4 Credits</span></div>
      <h3>{title}</h3>
      <p>{meta}</p>
      <div className="progress-label"><span>Completion</span><strong style={{ color }}>{progress}%</strong></div>
      <div className="progress-track"><span style={{ width: `${progress}%`, background: color }} /></div>
    </button>
  )
}
