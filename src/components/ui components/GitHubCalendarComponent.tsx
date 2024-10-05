import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubCalendarComponent = () => {
  return (
    <div>
      <h2 className="text-center text-lg font-semibold mb-4">GitHub Contributions</h2>
      <GitHubCalendar username="chimfwembeC" />
    </div>
  );
};

export default GitHubCalendarComponent;
