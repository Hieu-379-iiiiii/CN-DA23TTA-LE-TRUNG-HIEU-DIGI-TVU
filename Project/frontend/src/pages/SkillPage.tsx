import { skills, currentUser } from '../data/mockDatabase'
import './SkillPage.css'

export default function SkillPage() {
  const scores = [currentUser.score_info_data, currentUser.score_com_collab, currentUser.score_content_creation, currentUser.score_safety, currentUser.score_problem_solving]
  const colors = ['#3b82f6','#f59e0b','#10b981','#eab308','#f43f5e']
  return <>
    <section className="page-heading"><div><span className="eyebrow">Personal Competence</span><h1>My Skills</h1><p>Track the competencies earned from lessons and assessments.</p></div></section>
    <section className="panel personal-skills-panel"><div className="panel-heading"><div><h2>Your Digital Competence</h2><p>Five areas from the DIGCOMP schema</p></div></div>
      <div className="personal-skills-grid">{skills.map((skill, index) => <article className="personal-skill-card" key={skill.id}>
        <div className="skill-card-heading"><span style={{ background: colors[index] }}>0{index + 1}</span><strong>Level {scores[index] >= 80 ? 4 : 3}</strong></div>
        <h3>{skill.name}</h3><p>{skill.description}</p><div className="skill-score-row"><span>Competence</span><strong style={{ color: colors[index] }}>{scores[index]}%</strong></div>
        <div className="progress-track"><span style={{ width: `${scores[index]}%`, background: colors[index] }} /></div>
      </article>)}</div>
    </section>
  </>
}
