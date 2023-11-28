import React from 'react';
import ProjectCard, { Project } from '../ProjectCard';
import { useProjectsApi } from './hooks';

const ProjectSection = () => {
  const { isLoading, data } = useProjectsApi();
  return (
    <main className="pt-12" id="projects">
      {/* section title */}
      <h3 className="w-full text-center text-6xl font-bold">Projects</h3>
      {/* projects list */}
      <div className="flex flex-wrap gap-10 justify-between mt-10">
        {!isLoading &&
          data.map((p: Project) => <ProjectCard project={p} key={p._id} />)}
      </div>
    </main>
  );
};

export default ProjectSection;
