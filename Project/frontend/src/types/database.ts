export type ProgressStatus = 'not_started' | 'in_progress' | 'completed'

export interface User {
  id: string
  email: string
  role: 'admin' | 'user'
  major: string
  year_of_study: number
  avatar_url: string
  score_info_data: number
  score_com_collab: number
  score_content_creation: number
  score_safety: number
  score_problem_solving: number
}

export interface Skill {
  id: string
  name: string
  description: string
  icon_url?: string
  parent_id?: string
}

export interface Course {
  id: string
  title: string
  slug: string
  description: string
  image_url: string
  completion_percentage: number
  status: ProgressStatus
}
