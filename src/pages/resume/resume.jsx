import React from 'react';

import './resume.css';
import IconBox from '../../components/icon-box/icon-box';
import { IoBookOutline } from 'react-icons/io5';

function Resume() {
  return (
    <>
      <h1 className="title">Resume</h1>
      
      <section className='timeline-content'>
        <div className="subtitle-wrapper">
          <IconBox icon={ <IoBookOutline /> } />
          <h3 className='subtitle'>Education</h3>
        </div>

        <ol className="timeline-list">
          <li className='timeline-item'>
            <h3 className='timeline-title'> 
              Software Engineer - University Cruzeiro do Sul
            </h3>
            <span>2023 - Present</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quasi neque illo nihil nobis quis voluptate aspernatur cupiditate 
              incidunt laboriosam rem beatae corrupti vero id facere omnis, 
              saepe reiciendis vel et!
            </p>
          </li>

          <li className='timeline-item'>
            <h3 className='timeline-title'>
              Computer Networks Technical Course - SENAI of São Paulo
            </h3>
            <span>2019 - 2020</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quasi neque illo nihil nobis quis voluptate aspernatur cupiditate 
              incidunt laboriosam rem beatae corrupti vero id facere omnis, 
              saepe reiciendis vel et!
            </p>
          </li>

          <li className='timeline-item'>
            <h3 className='timeline-title'>English course - CNA</h3>
            <span>2023 - Present</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quasi neque illo nihil nobis quis voluptate aspernatur cupiditate 
              incidunt laboriosam rem beatae corrupti vero id facere omnis, 
              saepe reiciendis vel et!
            </p>
          </li>
        </ol>
      </section>

      <section className='timeline-content'>
        <div className="subtitle-wrapper">
          <IconBox icon={ <IoBookOutline /> } />
          <h3 className='subtitle'>Experience</h3>
        </div>

        <ol className="timeline-list">

          <li className='timeline-item'>
            <h3 className='timeline-title'> 
              Technical support - Foundever
            </h3>
            <span>2022 - Present</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quasi neque illo nihil nobis quis voluptate aspernatur cupiditate 
              incidunt laboriosam rem beatae corrupti vero id facere omnis, 
              saepe reiciendis vel et!
            </p>
          </li>

          <li className='timeline-item'>
            <h3 className='timeline-title'>
              Telemarketing Attendant - Fidelity
            </h3>
            <span>2018 - 2019</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quasi neque illo nihil nobis quis voluptate aspernatur cupiditate 
              incidunt laboriosam rem beatae corrupti vero id facere omnis, 
              saepe reiciendis vel et!
            </p>
          </li>
          
        </ol>
      </section>
    </>
  );
}

export default Resume;