import { currentUser } from '../data/mockDatabase'
import './UserPage.css'

export default function UserPage() {
  return <section className="panel user-profile"><div className="user-profile-head"><img src={currentUser.avatar_url} alt="Alex Rivera" /><div><span className="eyebrow">User profile</span><h1>Alex Rivera</h1><p>{currentUser.email}</p></div></div>
    <dl className="user-details"><div><dt>Role</dt><dd>{currentUser.role}</dd></div><div><dt>Major</dt><dd>{currentUser.major}</dd></div><div><dt>Year of study</dt><dd>{currentUser.year_of_study}</dd></div></dl>
  </section>
}
