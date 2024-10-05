export interface Skill {
    name: string;
    progress: number; // percentage value (0 to 100)
    description?: string;
  }
  
  export const skills = [
    { name: 'HTML', progress: 90, icon: 'html-5-svgrepo-com.svg', description: 'HyperText Markup Language' },
    { name: 'CSS', progress: 80, icon: 'css-3-svgrepo-com.svg', description: 'Cascading Style Sheets' },
    { name: 'JavaScript', progress: 85, icon: 'javascript-svgrepo-com.svg', description: 'Programming Language' },
    { name: 'React', progress: 75, icon: 'react-javascript-js-framework-facebook-svgrepo-com.svg', description: 'JavaScript Library' },
    { name: 'Tailwind CSS', progress: 70, icon: 'tailwindcss-icon-svgrepo-com.svg', description: 'Utility-First CSS Framework' },
    { name: 'TypeScript', progress: 60, icon: 'typescript-svgrepo-com.svg', description: 'Superset of JavaScript' },
    { name: 'Bootstrap', progress: 65, icon: 'bootstrap-svgrepo-com.svg', description: 'Front-End Framework' },
    { name: 'Django', progress: 55, icon: 'django-svgrepo-com(1).svg', description: 'Web Framework for Python' },
    { name: 'Laravel', progress: 50, icon: 'laravel-svgrepo-com.svg', description: 'PHP Framework' },
    { name: 'PHP', progress: 70, icon: 'php-svgrepo-com.svg', description: 'Server-Side Scripting Language' },
    { name: 'Python', progress: 65, icon: 'python-svgrepo-com.svg', description: 'Programming Language' },
    { name: 'Flutter', progress: 60, icon: 'flutter-svgrepo-com.svg', description: 'UI Toolkit for Building natively compiled applications' },
    { name: 'Swift', progress: 50, icon: 'swift-svgrepo-com.svg', description: 'Programming Language for iOS' },
    { name: 'Facebook', progress: 40, icon: 'facebook-svgrepo-com.svg', description: 'Social Media Platform' },
  ];
  