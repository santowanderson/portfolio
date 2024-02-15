import React from 'react';
import propTypes from 'prop-types';


import './about.css';
import frontendIcon from '../../assets/logos/frontend-icon.svg';
import backendIcon from '../../assets/logos/backend-icon.svg';
import supportIcon from '../../assets/logos/support-icon.svg';
import htmlLogo from '../../assets/logos/html-logo.svg';
import cssLogo from '../../assets/logos/css-logo.svg';
import javaScriptLogo from '../../assets/logos/javascript-logo.svg';
import nodeLogo from '../../assets/logos/node-logo.svg';
import reactLogo from '../../assets/logos/react-logo.svg';
import mysqlLogo from '../../assets/logos/mysql-logo.svg';
import gitLogo from '../../assets/logos/git-logo.svg';
import githubLogo from '../../assets/logos/github-logo.svg';
import dockerLogo from '../../assets/logos/docker-logo.svg';

export default function About() {
  return (
    <>
      <h1 className='title'>About me</h1>

      <section className="about-me-content">
        <p>
          I am Creative Director and UI/UX Designer from Sydney, Australia, 
          working in web development and print media. I enjoy turning complex 
          problems into simple, beautiful and intuitive designs.
        </p>
        <p>
          My job is to build your website so that it is functional and 
          user-friendly but at the same time attractive. Moreover, 
          I add personal touch to your product and make sure that is 
          eye-catching and easy to use. My aim is to bring across your 
          message and identity in the most creative way. I created web 
          design for many famous brand companies
        </p>
      </section>

      <section className="knwl-section">
        <h2 className='subtitle'>Knowledge areas</h2>

        <KnowledgeItems 
          icon={ frontendIcon }
          alt="HTML logo"
          width="40"
          title="Frontend"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Earum iure cum, ducimus omnis a nobis natus vitae. 
          Dolore ullam reiciendis necessitatibus error, consequatur amet 
          veritatis incidunt voluptatum consectetur est. Dignissimos."
        />

        <KnowledgeItems 
          icon={ backendIcon }
          alt="Backend icon"
          width="40"
          title="Backend"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Earum iure cum, ducimus omnis a nobis natus vitae. 
          Dolore ullam reiciendis necessitatibus error, consequatur amet 
          veritatis incidunt voluptatum consectetur est. Dignissimos."
        />

        <KnowledgeItems 
          icon={ supportIcon }
          alt="Technical support icon"
          width="40"
          title="Technical support"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Earum iure cum, ducimus omnis a nobis natus vitae. 
          Dolore ullam reiciendis necessitatibus error, consequatur amet 
          veritatis incidunt voluptatum consectetur est. Dignissimos."
        />

        <KnowledgeItems 
          icon={ htmlLogo }
          alt="HTML icon"
          width="40"
          title="Front end"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Earum iure cum, ducimus omnis a nobis natus vitae. 
          Dolore ullam reiciendis necessitatibus error, consequatur amet 
          veritatis incidunt voluptatum consectetur est. Dignissimos."
        />
      </section>

      <section className='tech-list-container has-scrollbar'>
        <TechListItem 
          icon={ htmlLogo }
          alt='HTML logo'
          width='40'
          title='HTML'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique, ad voluptatum vitae neque doloremque qui eveniet 
          deserunt cum debitis, quidem explicabo natus aliquid dolorem.'
        />
        <TechListItem 
          icon={ cssLogo }
          alt='CSS logo'
          width='40'
          title='CSS'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique, ad voluptatum vitae neque doloremque qui eveniet 
          deserunt cum debitis, quidem explicabo natus aliquid dolorem.'
        />
        <TechListItem 
          icon={ javaScriptLogo }
          alt='JavScript logo'
          width='40'
          title='JavScript'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique, ad voluptatum vitae neque doloremque qui eveniet 
          deserunt cum debitis, quidem explicabo natus aliquid dolorem.'
        />

        <TechListItem 
          icon={ nodeLogo }
          alt='Node logo'
          width='40'
          title='Node.js'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique, ad voluptatum vitae neque doloremque qui eveniet 
          deserunt cum debitis, quidem explicabo natus aliquid dolorem.'
        />

        <TechListItem 
          icon={ reactLogo }
          alt='React logo'
          width='40'
          title='React JS'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique, ad voluptatum vitae neque doloremque qui eveniet 
          deserunt cum debitis, quidem explicabo natus aliquid dolorem.'
        />

        <TechListItem 
          icon={ mysqlLogo }
          alt='MySql logo'
          width='40'
          title='MySql'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique, ad voluptatum vitae neque doloremque qui eveniet 
          deserunt cum debitis, quidem explicabo natus aliquid dolorem.'
        />

        <TechListItem 
          icon={ gitLogo }
          alt='Git logo'
          width='40'
          title='Git'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique, ad voluptatum vitae neque doloremque qui eveniet 
          deserunt cum debitis, quidem explicabo natus aliquid dolorem.'
        />

        <TechListItem 
          icon={ githubLogo }
          alt='GitHub logo'
          width='40'
          title='GitHub'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique, ad voluptatum vitae neque doloremque qui eveniet 
          deserunt cum debitis, quidem explicabo natus aliquid dolorem.'
        />

        <TechListItem 
          icon={ dockerLogo }
          alt='Docker logo'
          width='40'
          title='Docker'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique, ad voluptatum vitae neque doloremque qui eveniet 
          deserunt cum debitis, quidem explicabo natus aliquid dolorem.'
        />
      </section>

    </>
  );
}

function KnowledgeItems({ icon, alt, width, title, description }) {
  return (
    <div className="knwl-item">
      <figure className='icon-container'>
        <img src={ icon } alt={ alt } width={ width } />
      </figure>
      <div className='description-area'>
        <h1>{ title }</h1>
        <p>{ description }</p>
      </div>
    </div>
  );
}

function TechListItem({ icon, alt, width, title, description }) {
  return (
    <li className="list-tech-item">
      <div className="content-tech-item">
        <figure className="logo-container">
          <img src={ icon } alt={ alt } width={ width } />
        </figure>
        <h1>{ title }</h1>
        <p>{ description }</p>
      </div>
    </li>
  );
}

TechListItem.propTypes = {
  icon: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  width: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

KnowledgeItems.propTypes = {
  icon: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  width: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};