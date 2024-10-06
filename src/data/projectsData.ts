export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
}


export const projects = [
  {
    id: 1,
    title: "Real Estate Management System",
    description: "A comprehensive real estate management system for property listings, transactions, and user management.",
    link: "https://example.com/real-estate",
    skills: ['Laravel', 'TypeScript', 'ReactJs','Inertia'],
    image: "https://via.placeholder.com/600x400?text=Real+Estate+Management" // Placeholder image URL
  },
  {
    id: 2,
    title: "To-Do List App",
    description: "A simple and intuitive to-do list application with features for task management and reminders.",
    link: "https://example.com/todo-app",
    skills: ['ReactJs', 'TypeScript', 'Firebase'],
    image: "https://via.placeholder.com/600x400?text=To-Do+List+App" // Placeholder image URL
  },
  {
    id: 3,
    title: "Loan Management System",
    description: "A robust loan management system for tracking loans, payments, and interest calculations.",
    link: "https://example.com/loan-management",
    skills: ['Laravel', 'TypeScript', 'ReactJs','Inertia'],
    image: "https://via.placeholder.com/600x400?text=Loan+Management+System" // Placeholder image URL
  },
  {
    id: 4,
    title: "Clearing Forms",
    description: "An application for clearing forms with user-friendly interfaces for data entry and form processing.",
    link: "https://example.com/clearing-forms",
    skills: ['Laravel', 'TypeScript', 'ReactJs','Inertia'],
    image: "https://via.placeholder.com/600x400?text=Clearing+Forms" // Placeholder image URL
  },
  {
    id: 5,
    title: "Event Booking System",
    description: "A dynamic system for booking and managing events with calendar integration and notification features.",
    link: "https://example.com/event-booking",
    skills: ['Laravel', 'Vue','Inertia'],

    image: "https://via.placeholder.com/600x400?text=Event+Booking+System" // Placeholder image URL
  },
  {
    id: 6,
    title: "Personal Blog",
    description: "A personal blogging platform with features for posting, commenting, and user interaction.",
    link: "https://example.com/personal-blog",
    skills: ['ReactJs', 'TypeScript'],
    image: "https://via.placeholder.com/600x400?text=Personal+Blog" // Placeholder image URL
  },
  // Add more projects as needed
];
