export const profile = {
  name: 'Sanjay Santhanam',
  role: 'Backend & Systems Engineer',
  email: 'sanjays2402@gmail.com',
  location: 'New Brunswick, NJ',
  githubUrl: 'https://github.com/Sanjays2402/',
  linkedinUrl: 'https://www.linkedin.com/in/sanjay24/',
  scholarUrl: 'https://scholar.google.com/citations?user=qjNjjMYAAAAJ&hl=en',
} as const

export const impactStats = [
  { number: '4+', label: 'Years building systems' },
  { number: '1M+', label: 'Transactions per hour' },
  { number: '40+', label: 'Research citations' },
] as const

export const experiences = [
  {
    title: 'Software Developer',
    company: 'Johnson & Johnson',
    period: 'Jun 2024 - Present',
    location: 'New Brunswick, New Jersey, United States · Hybrid',
    description:
      'Architected a FHIR-compliant microservice using Java 17 and Spring Boot to streamline patient appointment scheduling across 15 hospitals, reducing average booking time by 35% and supporting 24/7 availability.',
    technologies: ['Java 17', 'Spring Boot', 'FHIR', 'Microservices', 'React.js', 'API Gateway'],
  },
  {
    title: 'Software Developer',
    company: 'Citi',
    period: 'May 2023 - Apr 2024',
    location: 'New York, United States · Remote',
    description:
      'Built Spring Boot microservices for real-time credit card fraud checks using Kafka Streams and Oracle, supporting over 1M transactions per hour while improving detection accuracy by 15%.',
    technologies: ['Spring Boot', 'Kafka Streams', 'Oracle', 'Docker', 'REST APIs', 'Java 17'],
  },
  {
    title: 'Software Development Engineer',
    company: 'Zentek Infosoft',
    period: 'Jun 2020 - Jul 2022',
    location: 'Jaipur, Rajasthan, India · Remote',
    description:
      'Delivered a role-based enterprise HR portal using Java, Spring Boot, Angular, and MySQL, streamlining onboarding workflows and reducing manual HR processing time by 40%.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'AWS', 'REST APIs'],
  },
] as const

export type FeaturedProject = {
  title: string
  eyebrow: string
  description: string
  technologies: readonly string[]
  impact: readonly {
    value: string
    label: string
  }[]
  sourceUrl?: string
  liveUrl?: string
}

export const featuredProjects: readonly FeaturedProject[] = [
  {
    title: 'FHIR Patient Scheduling',
    eyebrow: 'Healthcare platform · Production',
    description:
      'Designed a FHIR-compliant scheduling microservice in Java 17 and Spring Boot, connecting appointment workflows across a multi-hospital network while keeping booking available around the clock.',
    technologies: ['Java 17', 'Spring Boot', 'FHIR', 'Microservices'],
    impact: [
      { value: '15', label: 'hospitals connected' },
      { value: '35%', label: 'faster booking' },
      { value: '24/7', label: 'availability' },
    ],
  },
  {
    title: 'Real-Time Fraud Detection',
    eyebrow: 'Financial systems · Streaming',
    description:
      'Built Spring Boot services around Kafka Streams and Oracle to score credit-card activity in real time, balancing sustained throughput with higher detection accuracy.',
    technologies: ['Spring Boot', 'Kafka Streams', 'Oracle', 'Docker'],
    impact: [
      { value: '1M+', label: 'transactions per hour' },
      { value: '15%', label: 'accuracy improvement' },
    ],
  },
  {
    title: 'Enterprise HR Portal',
    eyebrow: 'Workflow platform · Full stack',
    description:
      'Delivered a role-based HR platform spanning Spring Boot, Angular, and MySQL to consolidate onboarding workflows and remove repetitive manual processing.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
    impact: [{ value: '40%', label: 'less manual processing' }],
  },
  {
    title: 'Flight Delay Prediction',
    eyebrow: 'Applied ML · Forecasting',
    description:
      'Trained an XGBoost arrival-delay model on the OpenFlights dataset and mapped cascading delays with operational visualizations for schedule planning.',
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Matplotlib'],
    impact: [{ value: '94%', label: 'prediction accuracy' }],
  },
  {
    title: 'CloudKey Authentication Service',
    eyebrow: 'Identity platform · Security',
    description:
      'Built a cloud authentication service with Firebase Auth, Google OAuth, API-key controls, and coordinated React and Node.js flows for safer, faster access.',
    technologies: ['Firebase Auth', 'Google OAuth', 'React', 'Node.js'],
    impact: [
      { value: '30%', label: 'faster login flow' },
      { value: '20%', label: 'fewer access errors' },
    ],
  },
]

export const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'TypeScript', 'JavaScript', 'Python', 'C/C++'],
  },
  {
    title: 'Backend & Data',
    skills: ['Spring Boot', 'Node.js', 'PostgreSQL', 'Kafka', 'Redis'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'Next.js', 'Tailwind CSS', 'WebGL'],
  },
  {
    title: 'Cloud & Delivery',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
  },
] as const

export const additionalSkills = [
  'Microservices',
  'FHIR',
  'REST APIs',
  'GraphQL',
  'OAuth',
  'Firebase',
  'JUnit',
  'Selenium',
  'GitHub Actions',
  'Postman',
] as const

export const education = [
  {
    school: 'Syracuse University',
    degree: 'Master of Science in Computer Science',
    location: 'Syracuse, NY',
  },
  {
    school: 'Anna University',
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    location: 'Chennai, India',
  },
] as const

export const publications = [
  {
    title: 'Animal detection for road safety using deep learning',
    authors: 'S Santhanam, SS Panigrahi, SK Kashyap, BK Duriseti',
    venue: '2021 International Conference on Computational Intelligence and Computing',
    year: '2021',
    citations: 31,
    scholarUrl:
      'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=qjNjjMYAAAAJ&citation_for_view=qjNjjMYAAAAJ:2osOgNQ5qMEC',
  },
  {
    title: 'Model proposal for a yolo objection detection algorithm based social distancing detection system',
    authors: 'SS Balamurugan, S Santhanam, A Billa, R Aggarwal, NV Alluri',
    venue: '2021 International Conference on Computational Intelligence and Computing',
    year: '2021',
    citations: 6,
    scholarUrl:
      'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=qjNjjMYAAAAJ&citation_for_view=qjNjjMYAAAAJ:9yKSN-GCB0IC',
  },
  {
    title: 'Drowsiness detection with OpenCV',
    authors: 'S Sanjay, N Banupriya, M Sathish',
    venue: '2021 Second International Conference on Electronics and Sustainable Communication',
    year: '2021',
    citations: 3,
    scholarUrl:
      'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=qjNjjMYAAAAJ&citation_for_view=qjNjjMYAAAAJ:u5HHmVD_uO8C',
  },
  {
    title: 'Computer Vision based Road Lane Detection',
    authors: 'S S. Sidhaarthan, S Sanjay',
    venue: 'Artificial & Computational Intelligence',
    year: '2021',
    citations: 0,
    scholarUrl:
      'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=qjNjjMYAAAAJ&citation_for_view=qjNjjMYAAAAJ:d1gkVwhDpl0C',
  },
] as const

export const totalCitations = publications.reduce(
  (sum, publication) => sum + publication.citations,
  0,
)
