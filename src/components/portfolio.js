import React, { Component } from 'react';
import { Jumbotron  } from 'reactstrap';
import PortfolioItem from './portfolioItems';
import Footer from './footer';
import '../styles/components/portfolio.css';

let projects = [
  {
    name: 'Outdoor Film Festival',
    techUsed : [
      'HTML5 ',
      'CSS3 ',
      'Bootstrap '
    ],
    link : 'https://github.com/bhobbs20/Film_Festival_MockUp',
    img : './festival-home.png',
    description: 'For this project, I was asked to build a site for an Outdoor Film Festival. The site has a pre-registration form, news and announcements section, and a display of all the movies being shown.'
  },
  {
    name: 'Realty Site',
    techUsed : [
      'HTML5 ',
      'CSS3 ',
      'Wordpress ',
      'JavaSript '
    ],
    link : 'https://github.com/',
    img : './project-one.png',
    description: 'For this project, I was asked to build a Wordpress site for a Luxury Chalets realty company. The site lists and displays sale and rental properties and has a functional contact form.'
  },
  {
    name: 'React Portfolio',
    techUsed : [
      'HTML5 ',
      'CSS3 ',
      'React.js ',
      'React-Router ',
      'Google Maps '
    ],
    link : 'https://github.com/',
    img : './port-screen.png',
    description: 'For this project, I built my portfolio using React.js and React-Router. The site has a about, portfolio, and contact page.'
  },
  {
    name: 'Coming Soon',
    techUsed : [
    'COMING SOON'
    ],
    link : 'https://github.com/',
    img : './coming-soon.jpg',
    description: 'This is a quick little description of this project.'
  },
  {
    name: 'Coming Soon',
    techUsed : [
    'COMING SOON'
    ],
    link : 'https://github.com/',
    img : './coming-soon.jpg',
    description: 'This is a quick little description of this project.'
  },
  {
    name: 'Coming Soon',
    techUsed : [
    'COMING SOON'
    ],
    link : 'https://github.com/',
    img : './coming-soon.jpg',
    description: 'This is a quick little description of this project.'
  }
];

class Portfolio extends Component {
  constructor(){
    super();
    this.state = {
      project: projects
    }
  }

  render(){    
    return(
      <div className="portfolio">
        <Jumbotron  className="portfolio-jumbo img-fluid">
          <div className="container about-intro-con wow slideInLeft">
            <h1 className="display-3 about-title wow slideInLeft">My Portfolio</h1>
            <p className="about-intro-line wow slideInLeft">Some of my latest work</p>
          </div> 
        </Jumbotron>
        <h3 className="display-4 get-knoiw-me text-center wow bounceInUp">Check out my work</h3>       
        <div className="container-fluid project-container">
      
            {
              this.state.project.map((project, index) =>{
                return <PortfolioItem project={project} key={index} />
              })
            }

        </div>
        <Footer/>
      </div>
    );
  }
}

export default Portfolio;