import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { BiBriefcaseAlt, BiSolidBriefcaseAlt } from 'react-icons/bi';

interface Experience {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Corp',
    date: 'Jan 2020 - Present',
    description: 'Developing and maintaining the user interface of web applications using React and Tailwind CSS.',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'Design Studio',
    date: 'Aug 2018 - Dec 2019',
    description: 'Creating wireframes, prototypes, and designing UI components for mobile and web platforms.',
  },
  {
    id: 3,
    title: 'Intern Developer',
    company: 'Startup Inc.',
    date: 'Jun 2017 - Jul 2018',
    description: 'Worked on various projects as part of the development team, focusing on frontend technologies.',
  },
];

const TimelineComponent: React.FC = () => {
  const customMarker = (experience: Experience) => {
    return (
      <span
        className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white"
      >
        <BiSolidBriefcaseAlt />
      </span>
    );
  };

  const customContent = (experience: Experience) => {
    return (
      <Card className="bg-gray-800 text-white">
        <h3 className="text-xl">{experience.title}</h3>
        <p className="text-sm text-gray-400">{experience.company}</p>
        <p className="text-sm text-gray-400">{experience.date}</p>
        <p className="mt-2 text-gray-300">{experience.description}</p>
      </Card>
    );
  };

  return (
    <div className="bg-gradient-to-b from-orange-800 to-orange-800 text-white p-6 sm:p-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">My Experiences</h2>
      <Timeline
        value={experiences}
        align="alternate"
        className="custom-timeline"
        marker={customMarker}
        content={customContent}
      />
    </div>
  );
};

export default TimelineComponent;
