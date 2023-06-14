
import Navbar from '../components/Navbar/Navbar';
import AboutMeImage from '../assets/images/Aboutme.jpg';
import JavaLogo from '../assets/images/java-logo.png';
import HtmlLogo from '../assets/images/html-logo.png';
import CssLogo from '../assets/images/css-logo.png';
import ReactLogo from "../assets/images/react-logo.png";
import JavaScriptLogo from "../assets/images/javascript-logo.png";
import SassLogo from "../assets/images/sass-logo.png";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import GameWay from "../assets/images/gameway.png";
import Todo from "../assets/images/Todo.png";
import Queens from "../assets/images/8Queens.png";
import "./Homepage.scss"



function Homepage() {

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      
      <Navbar />
      <div className="container">
      
      
        <div className="home_card" id="Home">
        <div id="particles-js" className='particles-js'>
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#03a9f4",
              opacity: .5
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: .5,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 1,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "triangle"
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
          detectRetina: true
        }}
      /> </div>
        <div className="name">
                <h2>Evnul Hossain</h2>
                <h2>Evnul Hossain</h2>
            </div>

            <div className="name-1">
                <h2>Currently a Bachelor of Arts Computer Science Student at Queens College</h2>
                <h2>Currently a Bachelor of Arts Computer Science Student at Queens College</h2>
            </div>
        
        </div>
       
        <div className="About_Me_card" id="About_Me">
         <div className='About_Me_Top'> 
          <h2>About Me</h2>
          </div>
          <div className='About_Me_Bottom'>
          <img className="Portfolio_img" src={AboutMeImage} alt="About Me" />
          <span>Hi, my name is Evnul Hossain. I currently am at Queens College, City University of New York. I am aiming to achieve a Bachelor of Arts Degree in Computer Science. I have had experience using Java and C++ to create Object Oriented Projects. I also have prior knowledge of Front-end development using HTML, CSS, React, Sass, and JavaScript. In the future, it would be my dream to become a Full-Stack developer as it seems to be the most entertaining and interesting type of projects to make.

          </span>
        </div>
        </div>
        <div className="skills_card" id="Skills">
          <h2 className="text_shadows">Skills</h2>
          <ul className="skills_grid">
            <li>
              <img className="skills-logo-java" id="skills-logo-java" src={JavaLogo} alt="Java Logo" />
              <p>I have started learning Java in 2018 and still to this day am constantly learning new functions. My past projects with Java mostly dealt with Object Oriented Programming. One of my projects which I find that helped me further understand Java more was the Hare versus Tortoise project.</p>
            </li>
            <li>
              <img className="skills-logo-html" id="skills-logo" src={HtmlLogo}  alt="HTML Logo" />
              <p>HTML is another language I've found fascinating in my journey to become a Full-Stack developer. Most of my learning of HTML was self-taught using resources like FreeCodeCamp and Codeacademy. It helps put the supporting structure of the website overall.</p>
            </li>
            <li>
              <img className="skills-logo-css" id="skills-logo-css" src={CssLogo} alt="CSS Logo" />
              <p>Without CSS, an HTML website is very dull and looks like a page of just information. I find CSS to be a very self-explanatory language that is not too difficult to learn. I also self-taught myself CSS using FreeCodeCamp and Codeacademy. Some of my projects I made using HTML and CSS only are creating a Technical Documentation Page and a Tribute Page to Dr. Norman Borlaug.</p>
            </li>
            <li>
              <img className="skills-logo-react" id="skills-logo-react" src={ReactLogo} alt="React Logo"/>
              <p>React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application. I have used React for creating dynamic and interactive web applications.</p>
            </li>
            <li>
              <img className="skills-logo-js" id="skills-logo-js" src={JavaScriptLogo} alt="JavaScript Logo" />
              <p>JavaScript is a powerful programming language that enables you to add interactivity and dynamic behavior to web pages. I have used JavaScript extensively for front-end development, including manipulating the DOM, making API requests, and implementing client-side validation.</p>
            </li>
            <li>
              <img className="skills-logo-sass" id="skills-logo-sass" src={SassLogo} alt="Sass Logo" />
              <p>Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that extends the capabilities of CSS. It provides features like variables, nesting, mixins, and more, which can help write cleaner and more maintainable CSS code.</p>
            </li>
          </ul>
        </div>
        
        <div className="project-card" id="Projects">
        
          <h2 className="title">Projects</h2>
          <ul className="project-grid">
            <li className='todo'>
             <h2>To-Do App</h2> 
             <img src={Todo}></img>
             <span>
               A web-based application that asks the user to enter what to do to your list. It will list out the item you entered.
               This app features adding a todo, editing a todo, and removing a todo from the list. This program was made using HTML, CSS, JavaScript, and Reac
               </span>
            </li>
            <li className='gameway'>
              <h2>GameWay</h2>
              <img src={GameWay}></img>
              <span>A web-based application that helps connect gamers together based on what game they usually play. This app has the function to load the most trending multiplayer games, create a post to meet people, and view posts for people who are in need of help. You can also add and chat with new friends that you meet on GameWay. This app was made as a team using React, Javascript, Sass, PostgreSQL, Prisma, and Planet Scale.</span>
            </li>
            <li className='EightQueens'>
              <h2>8 Queens</h2>
              <img src={Queens}></img>
              <span>A C++-based application that will print out a chess board in the terminal using 1 representing the queen piece and 0
representing the empty tiles. It will show all different scenarios where 8 queen pieces can be placed on a chessboard and each piece cannot interfere with
one another. This program uses the goto method and backtracking method.</span>
            </li>
          </ul>
        </div>
        <div className="Contact" id="Contact">
          <h2>Contact Me</h2>
          <span>You can contact me by</span>
          <span>
            Email: <a href="mailto:evnulhossain000@live.com" id="email_link"><b>evnulhossain000@live.com</b></a> || <a href="mailto:evnul.hossain70@qmail.cuny.edu" id="email_link"><b>evnul.hossain70@qmail.cuny.edu</b></a>
          </span>
          <span> Phone Number: <a href="Tel:1(929)-309-4120" id="email_link"><b>1(929)-309-4120</b></a></span>
        </div>
        
      </div>
    </div>
  );
}

export default Homepage;