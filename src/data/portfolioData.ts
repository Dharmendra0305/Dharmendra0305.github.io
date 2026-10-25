export const personal = {
  name: 'Dharmendra Kumar Prasad',
  firstName: 'Dharmendra',
  lastName: 'Prasad',
  initials: 'DK',
  role: 'Java Full Stack Developer | Generative AI & Machine Learning Enthusiast',
  tagline: 'Java Full Stack Developer | Generative AI & ML Enthusiast',
  headline: 'I build scalable backends\nand intelligent applications.',
  subheadline: 'Java Full Stack Developer specializing in Java, backend engineering and AI/ML integration.',
  roles: [
    'Java Full Stack Developer',
    'Generative AI Enthusiast',
    'Machine Learning Practitioner',
    'Backend Engineer',
    'Full-Stack Developer',
  ],
  email: 'dharmendra.kp03@gmail.com',
  phone: '+91-7979905443',
  github: 'https://github.com/Dharmendra0305',
  linkedin: 'https://www.linkedin.com/in/dharmendrakumar03/',
  resumeUrl: '/assets/Resume_Dharmendra.pdf',
  location: 'Bhubaneswar, Odisha, India',
  university: 'Siksha O Anusandhan University',
  year: 'B.Tech CSE · Graduating 2027',
  cgpa: '8.71',
  bio: `I am a Computer Science and Engineering undergraduate at Siksha O Anusandhan University with hands-on internship experience in software development and machine learning. I specialize in Java development, backend engineering and AI-powered applications. Passionate about solving real-world problems through software, I continuously explore full-stack development, generative AI and emerging technologies.`,
  aboutLong: `My approach is simple — build from the backend forward. Clean architecture, well-designed APIs and reliable data models form the foundation. Then I layer on intuitive, responsive interfaces that make the whole experience seamless. Whether it's a Java backend handling complex business logic or a Gradio interface serving AI models in real time, I care about the details that make software feel effortless.`,
};

export const stats = [
  { label: 'CGPA', value: 8.71, suffix: '', icon: 'GraduationCap' },
  { label: 'Projects Built', value: 4, suffix: '', icon: 'FolderGit2' },
  { label: 'Certifications', value: 4, suffix: '', icon: 'BadgeCheck' },
  { label: 'Internships', value: 3, suffix: '', icon: 'Briefcase' },
];

export const skillCategories = [
  {
    category: 'Backend',
    icon: 'Server',
    color: 'emerald',
    skills: [
      { name: 'Java', level: 70 },
      { name: 'Spring Boot', level: 70 },
      { name: 'REST APIs', level: 70 },
    ],
  },
  {
    category: 'Frontend',
    icon: 'Monitor',
    color: 'blue',
    skills: [
      { name: 'React', level: 70 },
      { name: 'JavaScript', level: 70 },
      { name: 'HTML / CSS', level: 70 },
    ],
  },
  {
    category: 'Database',
    icon: 'Database',
    color: 'cyan',
    skills: [
      { name: 'SQL / MySQL', level: 70 },
    ],
  },
  {
    category: 'AI / ML',
    icon: 'BrainCircuit',
    color: 'amber',
    skills: [
      { name: 'Python', level: 70 },
      { name: 'Machine Learning', level: 45 },
      { name: 'Generative AI', level: 45 },
    ],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    color: 'rose',
    skills: [
      { name: 'Git / GitHub', level: 70 },
    ],
  },
];

export const projects = [
  {
    title: 'Text-to-Image Generator',
    description:
      'A generative AI web application using Stable Diffusion v1.5 running on Google Colab T4 GPU. Implemented advanced controls including negative prompts, CFG tuning and inference customization through a Gradio interface.',
    tags: ['Stable Diffusion', 'PyTorch', 'Gradio', 'Python', 'Generative AI'],
    github: 'https://github.com/Dharmendra0305/PRODIGY_GA_02',
    demo: '#',
    featured: true,
    gradient: 'from-violet-500/20 to-fuchsia-500/20',
    category: 'Generative AI',
    image: 'https://images.pexels.com/photos/17485738/pexels-photo-17485738.png?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: [
      'Stable Diffusion v1.5 on Colab T4 GPU',
      'Negative prompts & CFG scale tuning',
      'Customizable inference steps & guidance',
      'Interactive Gradio web interface',
    ],
  },
  {
    title: 'Image-to-Image Translation with Pix2Pix',
    description:
      'A Conditional GAN using U-Net Generator and PatchGAN Discriminator to translate satellite imagery into map layouts. Deployed browser-based inference using Gradio for real-time image translation.',
    tags: ['TensorFlow', 'Pix2Pix', 'GANs', 'Computer Vision', 'Python', 'Gradio'],
    github: 'https://github.com/Dharmendra0305/PRODIGY_GA_04',
    demo: '#',
    featured: true,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    category: 'Computer Vision',
    image: 'https://images.pexels.com/photos/30596226/pexels-photo-30596226.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: [
      'U-Net Generator + PatchGAN Discriminator',
      'Satellite-to-map image translation',
      'Conditional GAN architecture',
      'Browser-based Gradio inference',
    ],
  },
  {
    title: 'Flight Booking System',
    description:
      'A desktop-based flight reservation system built with Java Swing and MySQL. Features seat selection, booking workflows, an admin panel and full CRUD operations for flight management.',
    tags: ['Java', 'MySQL', 'Swing'],
    github: 'https://github.com/Dharmendra0305/Flight-Booking-System',
    demo: '#',
    featured: false,
    gradient: 'from-blue-500/20 to-emerald-500/20',
    category: 'Desktop Application',
    image: 'https://images.pexels.com/photos/69866/pexels-photo-69866.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: [
      'Interactive seat selection UI',
      'Complete booking workflow',
      'Admin panel with CRUD operations',
      'MySQL database integration',
    ],
  },
  {
    title: 'E-Commerce Web Scraper',
    description:
      'A GUI-based scraper built with Java Swing and Jsoup that extracts live product information from e-commerce sites. Handles network failures gracefully and exports structured CSV files.',
    tags: ['Java', 'Java Swing', 'Jsoup', 'Maven', 'CSV'],
    github: 'https://github.com/Dharmendra0305/SCT_SD_4',
    demo: '#',
    featured: false,
    gradient: 'from-amber-500/20 to-orange-500/20',
    category: 'Data Extraction',
    image: 'https://images.pexels.com/photos/5380618/pexels-photo-5380618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: [
      'Live product data extraction',
      'Robust network failure handling',
      'Structured CSV export',
      'Maven-managed dependencies',
    ],
  },
];

export const experience = [
  {
    role: 'Generative AI Intern',
    company: 'Prodigy InfoTech',
    period: 'March 2026',
    status: 'Completed',
    description:
      'Worked on Generative AI applications and explored real-world use cases involving deep learning, AI-powered content generation and model deployment. Built practical skills in AI workflows, experimentation and model integration.',
    tags: ['Python', 'Generative AI', 'Deep Learning'],
  },
  {
    role: 'Software Development Intern',
    company: 'SkillCraft Technology',
    period: 'March 2026',
    status: 'Completed',
    description:
      'Worked on software development projects, problem solving and application development. Gained practical experience in software engineering principles, coding best practices and project execution.',
    tags: ['Java', 'Software Development', 'Git'],
  },
  {
    role: 'Java Development Intern',
    company: 'Pinnacle Labs',
    period: 'July 2025 – August 2025',
    status: 'Completed',
    description:
      'Developed Java-based applications and strengthened knowledge of OOP, application design and backend development concepts. Implemented practical software solutions and improved debugging and problem-solving abilities.',
    tags: ['Java', 'OOP', 'Backend Development'],
  },
];

export const certifications = [
  {
    title: 'Front-End Web Development',
    issuer: 'Infosys Springboard',
    year: '2025',
    icon: 'Code2',
  },
  {
    title: 'Software Engineering Simulation',
    issuer: 'JPMorgan Chase & Co.',
    year: '2025',
    icon: 'Server',
  },
  {
    title: 'Java Development',
    issuer: 'Pinnacle Labs',
    year: '2025',
    icon: 'Binary',
  },
  {
    title: 'Java (Basic)',
    issuer: 'HackerRank',
    year: '2025',
    icon: 'GitBranch',
  },
];

export const whyHireMe = [
  {
    icon: 'Zap',
    title: 'Strong Backend Foundation',
    description:
      'Deep understanding of Java, OOP principles and backend architecture. I build systems that are scalable, secure and maintainable from day one.',
  },
  {
    icon: 'Brain',
    title: 'AI/ML Capabilities',
    description:
      'Practical experience building generative AI applications and integrating intelligent features. I bridge the gap between traditional software and AI.',
  },
  {
    icon: 'Layers',
    title: 'Full-Stack Versatility',
    description:
      'Comfortable across the entire stack — from database schema design and Java backend logic to Gradio interfaces and desktop GUIs with Java Swing.',
  },
  {
    icon: 'TrendingUp',
    title: 'Proven Academic Record',
    description:
      'CGPA of 8.71 at Siksha O Anusandhan University. Consistent academic performance reflects discipline, focus and a strong grasp of fundamentals.',
  },
  {
    icon: 'Users',
    title: 'Collaborative Mindset',
    description:
      'Multiple internship experiences working across teams and technologies. I communicate clearly, collaborate effectively and adapt quickly to new development environments.',
  },
  {
    icon: 'Rocket',
    title: 'Eager to Learn',
    description:
      'Constantly exploring new technologies and building projects. I bring curiosity, adaptability and a growth mindset to every opportunity.',
  },
];

export const floatingTechIcons = [
  { name: 'Github', delay: 0, position: 'top-[15%] left-[8%]' },
  { name: 'Code2', delay: 1, position: 'top-[25%] right-[10%]' },
  { name: 'Server', delay: 2, position: 'bottom-[30%] left-[12%]' },
  { name: 'BrainCircuit', delay: 1.5, position: 'bottom-[20%] right-[8%]' },
  { name: 'Database', delay: 0.5, position: 'top-[50%] left-[5%]' },
  { name: 'Atom', delay: 2.5, position: 'top-[60%] right-[6%]' },
];
