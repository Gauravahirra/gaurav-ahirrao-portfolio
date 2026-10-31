/** Central portfolio data for Gaurav Ahirrao. Keep factual details aligned with the supplied resume. */
export type Palette = { from: string; via: string; to: string; accent: string };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const profile = {
  fullName: 'Gaurav Ahirrao', displayName: 'Gaurav Ahirrao', firstName: 'GAURAV', seriesTag: 'THE SERIES',
  originalLabel: 'A GAURAV AHIRRAO ORIGINAL', role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'Java', 'Web Applications'],
  intro: 'A full-stack developer focused on building practical web applications using Java, Spring Boot, React.js, Node.js and ASP.NET Core. I enjoy designing secure REST APIs, working with databases, and turning ideas into useful products.',
  location: 'Mumbai, Maharashtra, India', email: 'gauravahirrao076@gmail.com',
  links: { linkedin: 'https://www.linkedin.com/in/gaurav-ahirrao-5b6961231/', github: 'https://github.com/Gauravahirra', portfolio: 'https://gauravahirra.github.io/gaurav-portfolio/' },
  resumePdf: `${import.meta.env.BASE_URL}assets/Gaurav_Ahirrao_Resume.pdf`,
  portrait: { src: `${import.meta.env.BASE_URL}assets/gaurav-ahirrao.webp`, srcSet: `${import.meta.env.BASE_URL}assets/gaurav-ahirrao.webp`, alt: 'Gaurav Ahirrao professional portrait' },
  interests: ['Backend Development', 'REST API Design', 'Database Design', 'Full-Stack Applications'],
};

export const education = [
  { school: 'K.K. Wagh Institute of Engineering Education and Research', place: 'Nashik, Maharashtra', degree: 'B.E. — Electronics & Telecommunication Engineering', period: 'December 2020 – June 2024', score: 'CGPA 8.03' },
  { school: 'CDAC Mumbai', place: 'Mumbai, Maharashtra', degree: 'Post Graduate Diploma in Advanced Computing (PG-DAC)', period: 'February 2025 – August 2025', score: 'CDAC Certified' },
  { school: 'Shri Pramod Patil Jr College', place: 'Nashik', degree: 'HSC', period: 'June 2018 – June 2020', score: '66.15%' },
  { school: 'Shri Shivaji Maratha English School', place: 'Deola', degree: 'SSC', period: 'June 2017 – June 2018', score: '86.80%' },
];
export const experience = [{ company: 'Revature Consultancy Services Pvt. Ltd.', role: 'Intern — Java Full Stack Training', place: 'Chennai, India', period: 'December 2025 – March 2026', points: [
  'Completed 13-week intensive training in enterprise Java, Spring Boot, Hibernate/JPA, React.js and SQL.',
  'Practiced Agile/Scrum workflows and REST API development through hands-on project simulations.',
  'Worked with Spring Security, Maven, Git and Postman; performance was rated Good by Senior Vice President, India Operations.',
]}];
export type Metric = { value: string; label: string };
export type Project = { id: string; title: string; year: string; genre: string; logline: string; stack: string[]; build: string[]; features: string[]; metrics: Metric[]; github?: string; palette: Palette; motif: 'shield' | 'flow' | 'tenants' };
export const projects: Project[] = [
  { id: 'epathshala', title: 'ePathshala', year: '2025', genre: 'Education • ERP • Full-Stack', logline: 'A centralized academic and administrative platform for educational institutions.', stack: ['React.js', 'Material UI', 'Spring Boot', 'Spring Security', 'ASP.NET Core', 'MySQL', 'JWT', 'Swagger UI'], build: [
    'Built a full-stack ERP platform supporting Admin, Teacher, Student and Parent roles.',
    'Implemented JWT authentication and role-based access control using Spring Security, with 15+ REST API endpoints for user management, assignments, attendance and PDF export.',
    'Automated PDF reporting to reduce manual reporting effort by approximately 60%; tested APIs with Postman and documented them using Swagger UI.',
  ], features: ['Four role-based dashboards', 'JWT authentication and RBAC', 'Attendance and assignment workflows', 'PDF export and reporting', 'API testing and Swagger documentation'], metrics: [{ value: '4', label: 'user roles' }, { value: '15+', label: 'REST API endpoints' }, { value: '~60%', label: 'less manual reporting' }], palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' }, motif: 'shield' },
  { id: 'wedding-management', title: 'Indian Wedding Management System', year: '2025', genre: 'Full-Stack • Booking • Management', logline: 'A web portal to manage wedding planning workflows, vendors, venues and guests.', stack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'React Router', 'REST APIs'], build: [
    'Created a full-stack portal covering venue booking, vendor management and guest tracking workflows.',
    'Added JWT authentication and separate Admin and Client dashboards.',
    'Developed 20+ REST API endpoints backed by normalized MySQL data; average API response time was under 300 ms during testing.',
  ], features: ['Venue booking', 'Vendor management', 'Guest tracking', 'Admin and Client dashboards', 'JWT-secured REST APIs'], metrics: [{ value: '5+', label: 'wedding workflows' }, { value: '20+', label: 'REST API endpoints' }, { value: '<300ms', label: 'average response time' }], palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' }, motif: 'flow' },
  { id: 'mini-social-feed', title: 'Mini Social Feed', year: '2024', genre: 'Social • MVC • Full-Stack', logline: 'A responsive social networking application for posts, likes, comments and profile management.', stack: ['React.js', 'Tailwind CSS', 'ASP.NET Core', 'SQL Server', 'REST APIs', 'MVC'], build: [
    'Designed a responsive social application with registration, posts, likes, comments and profile management.',
    'Built User and Admin roles with dedicated dashboards, analytics and content moderation features.',
    'Connected reusable React components to an ASP.NET Core MVC backend and SQL Server; fixed 10+ critical bugs before launch.',
  ], features: ['User registration and profiles', 'Posts, likes and comments', 'Admin analytics and moderation', 'Responsive mobile-first layout', 'ASP.NET Core MVC and SQL Server'], metrics: [{ value: '30+', label: 'test users' }, { value: '10+', label: 'critical bugs resolved' }, { value: '5', label: 'screen sizes supported' }], palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' }, motif: 'tenants' },
];
export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
  { id: 'revature', title: 'Java Full Stack Training', org: 'Revature Consultancy Services Pvt. Ltd.', detail: 'Completed 13-week training covering enterprise Java, Spring Boot, Hibernate/JPA, React.js, SQL, Spring Security, Maven, Git and Postman.', laurel: 'Performance rated Good' },
  { id: 'cdac', title: 'Post Graduate Diploma in Advanced Computing', org: 'CDAC Mumbai', detail: 'Completed PG-DAC in Advanced Computing.', laurel: 'CDAC Certified' },
];
export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [{ issuer: 'CDAC Mumbai', name: 'Post Graduate Diploma in Advanced Computing (PG-DAC)', link: '' }];
export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  { id: 'languages', title: 'Languages', subtitle: 'Programming foundations', skills: [{ name: 'Java', mono: 'Jv', note: 'Core' }, { name: 'C++', mono: 'C+' }, { name: 'C', mono: 'C' }, { name: 'JavaScript', mono: 'Js' }, { name: 'SQL', mono: 'Sq' }] },
  { id: 'frontend', title: 'Frontend', subtitle: 'Responsive interfaces', skills: [{ name: 'React.js', mono: 'Re' }, { name: 'HTML5', mono: 'Ht' }, { name: 'CSS3', mono: 'Cs' }, { name: 'Material UI', mono: 'Mu' }, { name: 'Tailwind CSS', mono: 'Tw' }] },
  { id: 'backend', title: 'Backend', subtitle: 'APIs and server-side development', skills: [{ name: 'Spring Boot', mono: 'Sb' }, { name: 'Spring Security', mono: 'Ss' }, { name: 'Hibernate/JPA', mono: 'Jp' }, { name: 'Node.js', mono: 'No' }, { name: 'Express.js', mono: 'Ex' }, { name: 'ASP.NET Core', mono: 'Ne' }] },
  { id: 'data', title: 'Databases', subtitle: 'Relational data and persistence', skills: [{ name: 'MySQL', mono: 'My' }, { name: 'SQL Server', mono: 'Sq' }, { name: 'JDBC', mono: 'Jd' }] },
  { id: 'tools', title: 'APIs & Tools', subtitle: 'Build, test and document', skills: [{ name: 'REST APIs', mono: 'Ap' }, { name: 'JWT Authentication', mono: 'Jw' }, { name: 'RBAC', mono: 'Rb' }, { name: 'Postman', mono: 'Pm' }, { name: 'Swagger UI', mono: 'Sw' }, { name: 'Git / GitHub', mono: 'Gt' }, { name: 'Maven', mono: 'Mv' }, { name: 'Docker (basics)', mono: 'Dk' }] },
  { id: 'fundamentals', title: 'CS Fundamentals', subtitle: 'Core concepts', skills: [{ name: 'DSA', mono: 'Ds' }, { name: 'OOP', mono: 'Oo' }, { name: 'DBMS', mono: 'Db' }, { name: 'Operating Systems', mono: 'Os' }, { name: 'SDLC', mono: 'Sd' }, { name: 'Agile/Scrum', mono: 'Ag' }] },
];
export const skillEvidence: Record<string, string[]> = {
  Java: ['Revature training', 'Spring Boot projects'], 'C++': ['Technical skills'], C: ['Technical skills'], JavaScript: ['React.js projects'], SQL: ['MySQL and SQL Server projects'], 'React.js': ['ePathshala', 'Indian Wedding Management System', 'Mini Social Feed'], HTML5: ['Technical skills'], CSS3: ['Technical skills'], 'Material UI': ['ePathshala'], 'Tailwind CSS': ['Mini Social Feed'], 'Spring Boot': ['ePathshala'], 'Spring Security': ['ePathshala'], 'Hibernate/JPA': ['Revature training'], 'Node.js': ['Indian Wedding Management System'], 'Express.js': ['Indian Wedding Management System'], 'ASP.NET Core': ['ePathshala', 'Mini Social Feed'], MySQL: ['ePathshala', 'Indian Wedding Management System'], 'SQL Server': ['Mini Social Feed'], JDBC: ['Technical skills'], 'REST APIs': ['All three projects'], 'JWT Authentication': ['ePathshala', 'Indian Wedding Management System'], RBAC: ['ePathshala'], Postman: ['Revature training', 'API testing'], 'Swagger UI': ['ePathshala'], 'Git / GitHub': ['Revature training'], Maven: ['Revature training'], 'Docker (basics)': ['Technical skills'], DSA: ['Core concepts'], OOP: ['Core concepts'], DBMS: ['Core concepts'], 'Operating Systems': ['Core concepts'], SDLC: ['Revature training'], 'Agile/Scrum': ['Revature training'],
};
export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
export const seasons: Season[] = [
  { number: 1, title: 'The Foundation', period: '2017 – 2024', synopsis: 'Building an engineering foundation in Electronics & Telecommunication.', episodes: [{ code: 'S01 E01', title: 'The Engineer', description: 'B.E. in Electronics & Telecommunication Engineering from K.K. Wagh Institute of Engineering Education and Research, Nashik.', tags: ['B.E.', 'Electronics & Telecommunication', 'CGPA 8.03'], runtime: 'Dec 2020 – Jun 2024', palette: amber }] },
  { number: 2, title: 'Advanced Computing', period: '2025', synopsis: 'Advanced computing studies at CDAC Mumbai.', episodes: [{ code: 'S02 E01', title: 'The Next Step', description: 'Completed Post Graduate Diploma in Advanced Computing (PG-DAC).', tags: ['CDAC Mumbai', 'PG-DAC'], runtime: 'Feb 2025 – Aug 2025', palette: violet }] },
  { number: 3, title: 'Training in Practice', period: '2025 – 2026', synopsis: 'Intensive Java Full Stack training with Revature.', episodes: [{ code: 'S03 E01', title: 'Java Full Stack', description: '13-week training in enterprise Java, Spring Boot, Hibernate/JPA, React.js and SQL.', tags: ['Java', 'Spring Boot', 'SQL'], runtime: 'Dec 2025 – Mar 2026', palette: ocean }, { code: 'S03 E02', title: 'Developer Toolkit', description: 'Practiced Spring Security, Maven, Git, Postman, Agile/Scrum and REST API best practices.', tags: ['Spring Security', 'Maven', 'Postman'], runtime: '13 weeks', palette: jade }] },
  { number: 4, title: 'Building Applications', period: '2024 – 2025', synopsis: 'Three full-stack projects across education, event planning and social networking.', episodes: [{ code: 'S04 E01', title: 'ePathshala', description: 'Academic ERP with four roles, secure APIs and PDF reporting.', tags: ['Spring Boot', 'MySQL', 'JWT'], runtime: 'Feb 2025 – Jul 2025', palette: crimson }, { code: 'S04 E02', title: 'Wedding Management', description: 'A portal for venue booking, vendors and guest tracking.', tags: ['Node.js', 'Express.js', 'MySQL'], runtime: 'Nov 2024 – Jan 2025', palette: amber }, { code: 'S04 E03', title: 'Mini Social Feed', description: 'A responsive social platform with posts, comments and admin moderation.', tags: ['ASP.NET Core', 'React.js', 'SQL Server'], runtime: 'Sep 2024 – Oct 2024', palette: ocean }] },
  { number: 5, title: "What's Next", period: 'Now', synopsis: 'Looking for an opportunity to contribute as a software developer and keep learning.', episodes: [{ code: 'S05 E01', title: 'The Next Chapter', description: 'Building reliable web applications, secure APIs and maintainable backend services.', tags: ['Java', 'Spring Boot', 'Full Stack'], runtime: 'Open to opportunities', palette: violet }] },
];
export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Core language', title: 'Java', detail: 'Enterprise Java and Spring Boot training', palette: amber },
  { label: 'Major project', title: 'ePathshala', detail: 'Academic ERP with four user roles', palette: ocean },
  { label: 'Backend APIs', title: '15+ APIs', detail: 'User, assignment, attendance and PDF workflows', palette: crimson },
  { label: 'Web platform', title: 'Wedding System', detail: 'Venue, vendor and guest workflows', palette: violet },
  { label: 'Database', title: 'MySQL', detail: 'Relational data and normalized schemas', palette: jade },
  { label: 'Security', title: 'JWT + RBAC', detail: 'Authentication and role-based access', palette: amber },
  { label: 'REST APIs', title: '20+ endpoints', detail: 'Wedding Management System', palette: crimson },
  { label: 'Framework', title: 'ASP.NET Core', detail: 'MVC backend for Mini Social Feed', palette: ocean },
  { label: 'Developer tools', title: 'Postman', detail: 'API testing and validation', palette: jade },
  { label: 'Training', title: 'Revature', detail: '13-week Java Full Stack training', palette: violet },
];
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Profile', title: 'Full-Stack Developer', lines: ['Gaurav Ahirrao', 'Mumbai, Maharashtra'], chips: ['Java', 'Spring Boot'] },
  { kicker: 'Skills', title: 'Backend first.', lines: ['Java · Spring Boot · Spring Security · Hibernate/JPA', 'React.js · Node.js · ASP.NET Core · MySQL'], chips: ['REST APIs', 'JWT', 'RBAC'] },
  { kicker: 'Training', title: 'Java Full Stack', lines: ['13-week intensive training at Revature', 'Spring Boot · SQL · Maven · Git · Postman'] },
  { kicker: 'Projects', title: 'Three Projects', lines: ['ePathshala — academic and administrative ERP', 'Wedding Management — venue, vendor and guest workflows', 'Mini Social Feed — posts, comments and admin moderation'] },
  { kicker: 'Education', title: 'CDAC Certified', lines: ['Post Graduate Diploma in Advanced Computing', 'B.E. Electronics & Telecommunication Engineering · CGPA 8.03'] },
  { kicker: 'Approach', title: 'Build. Test. Improve.', lines: ['Secure APIs · Role-based access · Relational databases', 'Git · Postman · Swagger UI · Agile/Scrum'] },
  { kicker: 'Current mission', title: 'The Next Chapter', lines: ['Open to software development opportunities', 'Mumbai / Navi Mumbai · Immediate joiner'] },
];
export type ProfileId = 'gaurav' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'gaurav', name: 'Gaurav', blurb: 'The full series, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Resume, training & skills first', color: '#4cc9ff', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'developer', name: 'Developer', blurb: 'Projects, stack & GitHub first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Creative', blurb: 'The story arc & highlights first', color: '#ffb547', order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'] },
];
export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Projects`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Highlights', meta: 'Skills & project highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Experience', card: 'Training & Experience', meta: `${achievements.length} Highlights`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
