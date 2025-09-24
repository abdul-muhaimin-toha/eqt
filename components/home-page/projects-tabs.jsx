'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Location from '../icons/location';

export default function ProjectsTabs({ data, projects }) {
   const { title = '', btn_title = '', btn_url = '#' } = data?.data || {};

   // Group projects by first category
   const projectData = (projects || []).reduce((acc, project) => {
      const firstCategory =
         project?.projectCategories?.edges?.[0]?.node?.name || 'Uncategorized';

      if (!acc[firstCategory]) acc[firstCategory] = [];

      acc[firstCategory].push(project);
      return acc;
   }, {});

   const tabs = Object.keys(projectData);
   const [activeTab, setActiveTab] = useState(tabs[0] || '');

   return (
      <section className="nh-projects">
         <div className="container">
            <div className="nh-project-top">
               <h2 className="nh-project-title heading-h2" data-aos="fade-up">
                  {title}
               </h2>
               <div
                  className="nh-project-tab-header"
                  data-aos="fade-up"
                  data-aos-delay="300"
               >
                  {tabs.map((tab) => (
                     <button
                        key={tab}
                        className={`nh-project-tab-btn text-uppercase body-one-regular color-primary ${
                           activeTab === tab ? 'active' : ''
                        }`}
                        onClick={() => setActiveTab(tab)}
                     >
                        {tab}
                     </button>
                  ))}
               </div>
            </div>

            <div className="nh-project-tab-content-wrapper">
               <div className="nh-project-tab-content">
                  {projectData[activeTab]?.map((project) => (
                     <ProjectCard key={project?.id} project={project} />
                  ))}
               </div>
            </div>

            {btn_title && btn_url && (
               <div
                  className="project-button-wrapper"
                  data-aos="fade-up"
                  data-aos-delay="600"
               >
                  <Link href={btn_url} className="btn-primary">
                     {btn_title}
                  </Link>
               </div>
            )}
         </div>
      </section>
   );
}

function ProjectCard({ project }) {
   const featuredImage = project?.featuredImage?.node?.mediaItemUrl || '';
   const projectLocation = project?.projectLocation || 'Unknown location';
   const projectTitle = project?.title || 'Untitled Project';
   const projectDescription = project?.projectShortDes || '';
   const featureProjects = project?.featureProjects || [];
   const projectSlug = project?.slug || '';

   return (
      <div className="project-card" data-aos="fade-up" data-aos-delay="300">
         <div className="project-thumbnail">
            {featuredImage && (
               <Image
                  width={1040}
                  height={650}
                  src={featuredImage}
                  alt={projectTitle}
                  className="wp-post-image"
               />
            )}
         </div>
         <div className="project-content">
            <div className="project-location">
               <Location />
               <span
                  className="body-two-caps text-uppercase"
                  aria-label={`Location: ${projectLocation}`}
               >
                  {projectLocation}
               </span>
            </div>
            <h3 className="project-title heading-h3 font-regular">
               {projectTitle}
            </h3>
            <p className="project-description body-one-regular">
               {projectDescription}
            </p>
            <div className="project-features">
               {featureProjects.map((feature, idx) => (
                  <div key={idx} className="project-feature">
                     <div className="project-feature-icon">
                        {feature?.image && (
                           <Image
                              width={24}
                              height={24}
                              src={feature.image}
                              alt={feature.title || ''}
                           />
                        )}
                     </div>
                     <div className="lead-text-one color-two">
                        {feature?.title || ''}
                     </div>
                  </div>
               ))}
            </div>
            <Link
               className="btn-transparent text-uppercase"
               href={`/projects/${projectSlug}`}
            >
               <span>View Details</span>
            </Link>
         </div>
      </div>
   );
}
