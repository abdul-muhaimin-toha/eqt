'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Location from '../icons/location';

const projectData = {
   'Real Estate': [
      {
         title: 'Commercial Tech Park',
         location: 'Mohakhali , Dhaka',
         description:
            '1 and 2 katha land share in a 100 katha community project',
         features: [
            { icon: '/Layer_1.svg', label: '1600 sqft' },
            { icon: '/Layer_1-1.svg', label: '4 Bed' },
            { icon: '/Layer_1-2.svg', label: '2 Bath' },
         ],
         image: '/Rectangle-2.webp',
         link: '/projects/commercial-tech-park/',
      },
      {
         title: 'Edu-Tech Campus Bashundhara',
         location: 'Bashundhara, Dhaka',
         description:
            '1 and 2 katha land share in a 100 katha community project',
         features: [
            { icon: '/Layer_1.svg', label: '1600 sqft' },
            { icon: '/Layer_1-1.svg', label: '4 Bed' },
            { icon: '/Layer_1-2.svg', label: '2 Bath' },
         ],
         image: '/Rectangle-1.webp',
         link: '/projects/edu-tech-campus-bashundhara/',
      },
      {
         title: 'Keraniganj Green Towers',
         location: 'Keraniganj, Dhaka',
         description:
            '1 and 2 katha land share in a 100 katha community project',
         features: [
            { icon: '/Layer_1.svg', label: '1600 sqft' },
            { icon: '/Layer_1-1.svg', label: '4 Bed' },
            { icon: '/Layer_1-2.svg', label: '2 Bath' },
         ],
         image: '/Rectangle.webp',
         link: '/projects/keraniganj-green-towers/',
      },
   ],
   Consultation: [
      {
         title: 'Business Strategy Consultation',
         location: 'Gulshan, Dhaka',
         description:
            'Expert guidance to optimize your business operations and growth strategies.',
         features: [
            { icon: '/Layer_1.svg', label: '1600 sqft' },
            { icon: '/Layer_1-1.svg', label: '4 Bed' },
            { icon: '/Layer_1-2.svg', label: '2 Bath' },
         ],
         image: '/Rectangle-2.webp',
         link: '/projects/commercial-tech-park/',
      },
      {
         title: 'Digital Marketing Consultation',
         location: 'Banani, Dhaka',
         description:
            'Personalized strategies to boost your online presence and engagement.',
         features: [
            { icon: '/Layer_1.svg', label: '1600 sqft' },
            { icon: '/Layer_1-1.svg', label: '4 Bed' },
            { icon: '/Layer_1-2.svg', label: '2 Bath' },
         ],
         image: '/Rectangle-1.webp',
         link: '/projects/edu-tech-campus-bashundhara/',
      },
      {
         title: 'Financial Planning Session',
         location: 'Motijheel, Dhaka',
         description:
            'Get professional advice on investments, budgeting, and long-term financial planning.',
         features: [
            { icon: '/Layer_1.svg', label: '1600 sqft' },
            { icon: '/Layer_1-1.svg', label: '4 Bed' },
            { icon: '/Layer_1-2.svg', label: '2 Bath' },
         ],
         image: '/Rectangle.webp',
         link: '/projects/keraniganj-green-towers/',
      },
   ],
};

function Project({ data }) {
   const tabs = Object.keys(projectData);
   const [activeTab, setActiveTab] = useState(tabs[0]);

   return (
      <section className="nh-projects">
         <div className="container">
            <div className="nh-project-top">
               <h2 className="nh-project-title heading-h2">
                  Browse Featured Projects
               </h2>
               <div className="nh-project-tab-header">
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
                  {projectData[activeTab].map((project, index) => (
                     <ProjectCard key={index} project={project} />
                  ))}
               </div>
            </div>

            <div className="project-button-wrapper">
               <Link href="/projects" className="btn-primary">
                  View All Projects
               </Link>
            </div>
         </div>
      </section>
   );
}

export default Project;

function ProjectCard({ project }) {
   return (
      <div className="project-card">
         <div className="project-thumbnail">
            <Image
               width={1040}
               height={650}
               src={`https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07${project.image}`}
               alt={project.title}
               className="wp-post-image"
               loading="lazy"
            />
         </div>
         <div className="project-content">
            <div className="project-location">
               <Location />
               <span
                  className="body-two-caps text-uppercase"
                  aria-label={`Location: ${project.location}`}
               >
                  {project.location}
               </span>
            </div>
            <h3 className="project-title heading-h3 font-regular">
               {project.title}
            </h3>
            <p className="project-description body-one-regular">
               {project.description}
            </p>
            <div className="project-features">
               {project.features.map((feature, idx) => (
                  <div key={idx} className="project-feature">
                     <div className="project-feature-icon">
                        <Image
                           width={24}
                           height={24}
                           src={`https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07${feature.icon}`}
                           alt={feature.label}
                        />
                     </div>
                     <div className="lead-text-one color-two">
                        {feature.label}
                     </div>
                  </div>
               ))}
            </div>
            <Link
               className="btn-transparent text-uppercase"
               href={project.link}
            >
               <span>View Details</span>
            </Link>
         </div>
      </div>
   );
}
