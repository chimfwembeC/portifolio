export interface Skill {
    name: string;
    progress: number; // percentage value (0 to 100)
    description?: string;
  }
  
  export const skills = [
    { id: 1, name: 'HTML', progress: 90, icon: 'html-5-svgrepo-com.svg', description: 'HyperText Markup Language' },
    { id: 2 ,name: 'CSS', progress: 80, icon: 'css-3-svgrepo-com.svg', description: 'Cascading Style Sheets' },
    { id: 3 ,name: 'JavaScript', progress: 85, icon: 'javascript-svgrepo-com.svg', description: 'Programming Language' },
    { id: 4 ,name: 'React', progress: 75, icon: 'react-javascript-js-framework-facebook-svgrepo-com.svg', description: 'JavaScript Library' },
    { id: 5 ,name: 'Tailwind CSS', progress: 70, icon: 'tailwindcss-icon-svgrepo-com.svg', description: 'Utility-First CSS Framework' },
    { id: 6 ,name: 'TypeScript', progress: 60, icon: 'typescript-svgrepo-com.svg', description: 'Superset of JavaScript' },
    { id: 7 ,name: 'Bootstrap', progress: 65, icon: 'bootstrap-svgrepo-com.svg', description: 'Front-End Framework' },
    { id: 8 ,name: 'Django', progress: 55, icon: 'django-svgrepo-com(1).svg', description: 'Web Framework for Python' },
    { id: 9 ,name: 'Laravel', progress: 50, icon: 'laravel-svgrepo-com.svg', description: 'PHP Framework' },
    { id: 10 ,name: 'PHP', progress: 70, icon: 'php-svgrepo-com.svg', description: 'Server-Side Scripting Language' },
    { id: 11 ,name: 'Python', progress: 65, icon: 'python-svgrepo-com.svg', description: 'Programming Language' },
    { id: 12 ,name: 'Flutter', progress: 60, icon: 'flutter-svgrepo-com.svg', description: 'UI Toolkit for Building natively compiled applications' },
    { id: 13 ,name: 'Swift', progress: 50, icon: 'swift-svgrepo-com.svg', description: 'Programming Language for iOS' },
    { id: 14 ,name: 'Facebook', progress: 40, icon: 'facebook-svgrepo-com.svg', description: 'Social Media Platform' },
  ];
  