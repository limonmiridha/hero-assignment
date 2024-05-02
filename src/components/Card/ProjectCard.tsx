import Image from 'next/image';
import React, { useState } from 'react';
import { BiPhoneCall, BiSolidDetail } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { RxCopy } from 'react-icons/rx';
import ThreeDots from '../ThreeDots';
import ProjectModal from '../Modal/ProjectModal';

const ProjectCard = ({ project }: any) => {
  const [updatedProject, setUpdatedProject] = useState(project);

  const onUpdateProject = (updatedProject: any) => {
    setUpdatedProject(updatedProject);
    console.log('Updated Project:', updatedProject);
  };

  return (
    <div className="border shadow p-4 rounded-lg">
      <div className="justify-betweens">
        <div className=" g-3">
          <Image src={'/images/jars.jpg'} width={48} height={48} alt="" />
          <div>
            <h2 className=" text-sm font-medium">{updatedProject.name}</h2>
            <p className=" text-base font-bold  whitespace-nowrap">
              <span className=" text-[#888EA8]">Service : </span>
              {updatedProject?.service}
            </p>
          </div>
        </div>
        <ThreeDots
          data={[
            {
              id: 1,
              icon: BiSolidDetail,
              title: 'View',
              path: `/projects/${project.id}`,
            },
            {
              id: 2,
              icon: BiSolidDetail,
              title: (
                <ProjectModal
                  project={project}
                  onUpdateProject={onUpdateProject}
                />
              ),
            },
            {
              id: 3,
              icon: BiSolidDetail,
              title: 'Delete',
            },
          ]}
        />
      </div>

      <div className=" flex items-center gap-3 my-5 ">
        <div className=" flex items-center gap-1">
          <BiPhoneCall color="#888EA8" size={16} />
          <p className=" font-semibold text-xs">6-(666)-111-7777</p>
        </div>
        <div className=" flex items-center gap-1">
          <HiOutlineMail color="#888EA8" size={16} />

          <p className=" font-semibold text-xs">hello@neutrix.co</p>
          <RxCopy className=" cursor-pointer" color="#374856" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
