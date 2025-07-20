
import { Target, Users, Zap, Briefcase, User, Calendar } from 'lucide-react';

export const allProjects = [
    {
      title: 'Project Alpha',
      slug: 'project-alpha',
      description: 'A mobile app designed to streamline team collaboration and project management, boosting productivity by 20%.',
      longDescription: "<p>Our process began with extensive user research, including interviews and surveys with project managers and team members across various industries. We discovered key pain points were communication overhead and lack of clarity on task ownership. We developed a mobile-first application with a highly intuitive interface, drag-and-drop task boards, and integrated real-time chat. The result was a tool that felt both powerful and effortless, leading to a significant boost in user-reported productivity.</p>",
      problemStatement: "Traditional project management tools were often too complex for small, agile teams, leading to confusion, wasted time, and decreased productivity. Teams needed a simple, mobile-first solution to find a sweet spot between functionality and ease of use.",
      solutionMethodology: "We adopted a user-centered design process, starting with in-depth user interviews and competitive analysis. This led to the creation of detailed personas and user journey maps. We then moved to rapid prototyping, iterating on wireframes and high-fidelity mockups based on user feedback. The solution was built around a core set of features identified as most critical, ensuring a lean yet powerful product.",
      image: 'https://placehold.co/600x400.png',
      tags: ['UX Design', 'Mobile App', 'Case Study'],
      hint: 'tech product',
      mockupImages: [
        { src: 'https://placehold.co/1200x800.png', hint: 'mobile app screen' },
        { src: 'https://placehold.co/1200x800.png', hint: 'app analytics dashboard' },
        { src: 'https://placehold.co/1200x800.png', hint: 'user profile ui' },
      ],
      metrics: [
        { title: 'Productivity Boost', value: '+20%', icon: Zap },
        { title: 'User Adoption', value: '10k+ Teams', icon: Users },
        { title: 'Core Challenge', value: 'Streamline Collaboration', icon: Target },
      ],
      client: "Tech Startup Inc.",
      role: "Lead Product Designer",
      duration: "6 Months"
    },
    {
      title: 'Project Beta',
      slug: 'project-beta',
      description: "A complete redesign of a SaaS platform's user onboarding flow, resulting in a 35% increase in user retention.",
      longDescription: "<p>We took a data-driven approach, analyzing user behavior funnels and heatmaps to pinpoint exact drop-off points. Our redesign focused on a guided, step-by-step tour, interactive tutorials, and personalized setup checklists. By breaking down the process into manageable chunks and providing immediate value, we successfully increased user retention by 35% within the first month post-launch.</p>",
      problemStatement: "The SaaS platform was experiencing a high user drop-off rate during the onboarding process. New users found the initial setup confusing and overwhelming, leading to low engagement and retention.",
      solutionMethodology: "Our methodology was data-driven. We analyzed user funnels and heatmaps to identify key drop-off points. The redesign focused on a guided, interactive tour and personalized checklists. A/B testing was used to validate our new design, ensuring the changes were effective.",
      image: 'https://placehold.co/600x400.png',
      tags: ['UX Research', 'Web App', 'SaaS'],
      hint: 'dashboard ui',
      mockupImages: [
        { src: 'https://placehold.co/1200x800.png', hint: 'saas dashboard' },
        { src: 'https://placehold.co/1200x800.png', hint: 'onboarding flow' },
        { src: 'https://placehold.co/1200x800.png', hint: 'user analytics chart' },
      ],
      metrics: [
        { title: 'Retention Increase', value: '+35%', icon: Zap },
        { title: 'Active Users', value: '50k+', icon: Users },
        { title: 'Core Challenge', value: 'Improve Onboarding', icon: Target },
      ],
      client: "SaaS Co.",
      role: "UX Researcher & Designer",
      duration: "3 Months"
    },
    {
      title: 'Project Gamma',
      slug: 'project-gamma',
      description: 'Creating an accessible design system for a large-scale e-commerce website to ensure inclusivity for all users.',
      longDescription: "<p>Our team developed a comprehensive design system from the ground up, with a strong focus on WCAG 2.1 AA compliance. This involved creating a library of reusable components, defining clear style guidelines, and documenting best practices for accessibility. The new system not only made the site accessible to a wider audience but also accelerated the development process for new features by over 40%.</p>",
      problemStatement: "A large e-commerce platform lacked a unified design system, causing inconsistencies and significant accessibility gaps (WCAG violations), which excluded users with disabilities and slowed down development.",
      solutionMethodology: "We conducted a full audit of the existing interface to identify inconsistencies. We then developed a comprehensive, accessible design system from scratch, focusing on WCAG 2.1 AA compliance. This included creating reusable components, style guides, and documentation.",
      image: 'https://placehold.co/600x400.png',
      tags: ['Design System', 'Accessibility', 'E-commerce'],
      hint: 'design system',
      mockupImages: [
        { src: 'https://placehold.co/1200x800.png', hint: 'design system components' },
        { src: 'https://placehold.co/1200x800.png', hint: 'color palette styleguide' },
        { src: 'https://placehold.co/1200x800.png', hint: 'typography examples' },
      ],
      metrics: [
        { title: 'Development Speed', value: '+40%', icon: Zap },
        { title: 'Audience Reach', value: 'WCAG 2.1 AA', icon: Users },
        { title: 'Core Challenge', value: 'Ensure Inclusivity', icon: Target },
      ],
      client: "E-commerce Giant",
      role: "Design System Lead",
      duration: "12 Months"
    },
    {
      title: 'Project Delta',
      slug: 'project-delta',
      description: 'Conceptualizing and prototyping a new feature for a social media app to enhance user engagement.',
      longDescription: "<p>Through brainstorming sessions, user journey mapping, and rapid prototyping, we developed a concept for 'Collaborative Stories.' This feature allowed multiple users to contribute to a single story, creating a shared narrative. High-fidelity prototypes were tested with user groups, showing a potential 25% increase in session duration and positive qualitative feedback on the feature's novelty and fun factor.</p>",
      problemStatement: "A leading social media app needed to find new ways to increase user engagement and interaction beyond simple likes and comments. The goal was to foster more meaningful connections.",
      solutionMethodology: "We used a design thinking approach, starting with empathy maps and brainstorming. This led to the 'Collaborative Stories' concept. We created high-fidelity prototypes and conducted usability testing with focus groups to validate the feature's appeal and potential impact.",
      image: 'https://placehold.co/600x400.png',
      tags: ['Prototyping', 'UI Design', 'Social Media'],
      hint: 'mobile ui',
      mockupImages: [
        { src: 'https://placehold.co/1200x800.png', hint: 'social media app' },
        { src: 'https://placehold.co/1200x800.png', hint: 'user feed' },
        { src: 'https://placehold.co/1200x800.png', hint: 'collaboration feature' },
      ],
      metrics: [
        { title: 'Engagement Lift', value: '+25%', icon: Zap },
        { title: 'User Feedback', value: 'Positive', icon: Users },
        { title: 'Core Challenge', value: 'Enhance Interaction', icon: Target },
      ],
      client: "Social Sphere",
      role: "UI/UX Designer",
      duration: "2 Months"
    },
    {
      title: 'Project Epsilon',
      slug: 'project-epsilon',
      description: 'Designing a gamified learning platform for a non-profit organization, increasing user engagement by 50%.',
      longDescription: "<p>We introduced elements like points, badges, leaderboards, and learning streaks to motivate users. The UI was designed to be vibrant and encouraging. The platform was built as a progressive web app to ensure accessibility on all devices. Post-launch, the platform saw a 50% increase in daily active users and a 70% increase in course completion rates, demonstrating the power of gamification in education.</p>",
      problemStatement: "A non-profit's educational content wasn't engaging its target audience, primarily young learners. The challenge was to make learning fun and motivating to increase course completion rates.",
      solutionMethodology: "We applied gamification principles to the learning experience. This involved designing a system of points, badges, and leaderboards. We created a vibrant, encouraging UI and built a progressive web app for broad accessibility. The results were measured by tracking user activity and completion rates.",
      image: 'https://placehold.co/600x400.png',
      tags: ['Gamification', 'UI Design', 'Non-profit'],
      hint: 'gamification ui',
      mockupImages: [
        { src: 'https://placehold.co/1200x800.png', hint: 'learning app interface' },
        { src: 'https://placehold.co/1200x800.png', hint: 'gamified badges' },
        { src: 'https://placehold.co/1200x800.png', hint: 'leaderboard screen' },
      ],
      metrics: [
        { title: 'Engagement Up', value: '+50%', icon: Zap },
        { title: 'Completion Rate', value: '+70%', icon: Users },
        { title: 'Core Challenge', value: 'Motivate Learners', icon: Target },
      ],
      client: "LearnForward Org",
      role: "Product Designer",
      duration: "4 Months"
    },
    {
      title: 'Project Zeta',
      slug: 'project-zeta',
      description: 'A data visualization dashboard for a fintech startup, simplifying complex financial data for investors.',
      longDescription: "<p>We designed a highly interactive dashboard featuring customizable charts, real-time data streams, and clear visual indicators for market movements. A key innovation was the 'Insight' panel, which used natural language generation to summarize key data points. The final product was praised for its clarity and power, helping the fintech startup secure its next round of funding.</p>",
      problemStatement: "A fintech startup needed to present complex financial data to both expert investors and novices. The challenge was to create a dashboard that was powerful enough for experts but simple enough for beginners.",
      solutionMethodology: "Our solution was a highly interactive dashboard with customizable charts and real-time data. We used clear visual language and a unique 'Insight' panel that summarized key data points using natural language. The design was refined through multiple iterations with stakeholder feedback.",
      image: 'https://placehold.co/600x400.png',
      tags: ['Data Viz', 'Fintech', 'Dashboard'],
      hint: 'financial dashboard',
      mockupImages: [
        { src: 'https://placehold.co/1200x800.png', hint: 'financial data chart' },
        { src: 'https://placehold.co/1200x800.png', hint: 'investment dashboard' },
        { src: 'https://placehold.co/1200x800.png', hint: 'stock market graph' },
      ],
      metrics: [
        { title: 'Data Clarity', value: 'High', icon: Zap },
        { title: 'User Base', value: 'Investors', icon: Users },
        { title: 'Core Challenge', value: 'Simplify Complexity', icon: Target },
      ],
      client: "Fintech Innovations",
      role: "Data Visualization Designer",
      duration: "5 Months"
    }
  ];
