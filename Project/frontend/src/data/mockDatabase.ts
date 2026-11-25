import type { Course, Skill, User } from '../types/database'

export const currentUser: User = {
  id: 'user-1',
  email: 'alex.rivera@tvu.edu.vn',
  role: 'user',
  major: 'Digital Communication',
  year_of_study: 3,
  avatar_url: 'https://placehold.co/96x96/0f172a/ffffff?text=AR',
  score_info_data: 92,
  score_com_collab: 86,
  score_content_creation: 88,
  score_safety: 79,
  score_problem_solving: 75,
}

export const skills: Skill[] = [
  { id: 'skill-info', name: 'Information & Data Literacy', description: 'Find, evaluate and manage digital information.' },
  { id: 'skill-collab', name: 'Communication & Collaboration', description: 'Communicate and collaborate through digital technologies.' },
  { id: 'skill-create', name: 'Digital Content Creation', description: 'Create and edit digital content.' },
  { id: 'skill-safety', name: 'Safety & Digital Wellbeing', description: 'Protect devices, data and personal wellbeing.' },
  { id: 'skill-solve', name: 'Technical Problem Solving', description: 'Solve technical problems and use digital tools.' },
]

export const courses: Course[] = [
  { id: 'course-data', title: 'Data Literacy & Analytics', slug: 'data-literacy', description: 'Prof. Elena Vance • 8 lessons', image_url: 'https://placehold.co/640x360/dbeafe/1d4ed8?text=Data+Literacy', completion_percentage: 92, status: 'in_progress' },
  { id: 'course-web', title: 'Interactive Media Creation', slug: 'interactive-media', description: 'Dr. Marcus Chen • 12 lessons', image_url: 'https://placehold.co/640x360/d1fae5/047857?text=Web+Creation', completion_percentage: 88, status: 'in_progress' },
  { id: 'course-collab', title: 'Digital Team Collaboration', slug: 'team-collaboration', description: 'Prof. Sarah Jenkins • 6 lessons', image_url: 'https://placehold.co/640x360/fef3c7/b45304?text=Collaboration', completion_percentage: 86, status: 'in_progress' },
  { id: 'course-algo', title: 'Applied Problem Solving', slug: 'problem-solving', description: 'Dr. Aris Thorne • 10 lessons', image_url: 'https://placehold.co/640x360/ffe4e6/be123c?text=Problem+Solving', completion_percentage: 75, status: 'in_progress' },
]
