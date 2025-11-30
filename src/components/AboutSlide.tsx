import Skill from "./Skill";

import linkedinIcon from "../assets/icons/linkedin.png"
import githubIcon from "../assets/icons/icons8-github-144.png"

function AboutSlide() {
  return (
    <div className="slide-shadow rounded-xl p-3 flex flex-col justify-center md:flex-row md:items-stretch md:px-6 md:py-12">
      <div className="md:w-1 md:grow">
        <p className="">
          Hi, I'm <span className="yellow font-bold">William</span>, a <span className="cyan">Software Engineer</span> studying <span className="blue">Computer Science</span> and <span className="purple">Philosophy</span> at <span className="red">Colgate University</span>.
          I love <span className="green">problem solving</span> and <span className="cyan">getting lost</span> in the <span className="yellow">experience</span> of <span className="blue">making things</span>.
          This website and some of my <span className="purple">projects</span> are hosted on an <span className="red">EC2 instance</span> running an <span className="green">NGINX web server</span>, a <span className="blue">PostgreSQL database</span>, and <span className="blue">Docker containers</span> for the <span className="cyan">backend servers</span>.
          It shows off <span className="yellow">the projects</span> I've <span className="purple">(finished)</span> working on, but there's <span className="red">always</span> <span className="green">more to come</span><span className="yellow">!</span>
        </p>
        <div className="py-2 gap-2 flex flex-row flex-wrap justify-center items-center">
          <a href={"https://github.com/WilliamCWhite"}>
            <div className="yellow-box px-2 py-1 gap-2 rounded-md flex w-fit items-center">
              <img className="w-4 h-4" src={githubIcon} />
              <p className="">GitHub</p>
            </div>
          </a>
          <a href={"https://www.linkedin.com/in/williamcwhite323"}>
            <div className="blue-box px-2 py-1 gap-2 rounded-md flex w-fit items-center">
              <img className="w-4 h-4" src={linkedinIcon} />
              <p className="">LinkedIn</p>
            </div>
          </a>


        </div>
      </div>
      <div className="my-2 w-full h-px bg-ncomment md:w-px md:h-auto md:my-0 md:mx-4"></div>
      <div className="md:w-1 md:grow">
        <p>
          Here's all the <span className="purple">skills</span> I've <span className="green">developed</span> throughout my <span className="blue">programming experience</span> so far:
        </p>
        <div className="py-2 gap-1 flex flex-row flex-wrap justify-center items-center">
          <Skill skillKey="react"/>
          <Skill skillKey="golang"/>
          <Skill skillKey="postgres"/>
          <Skill skillKey="typescript"/>
          <Skill skillKey="python"/>
          <Skill skillKey="docker"/>
          <Skill skillKey="tailwind"/>
          <Skill skillKey="reactNative"/>
          <Skill skillKey="nodejs"/>
          <Skill skillKey="java"/>
          <Skill skillKey="nginx"/>
          <Skill skillKey="aws"/>
          <Skill skillKey="cSharp"/>
          <Skill skillKey="c"/>
          <Skill skillKey="git"/>
        </div>
        <p>
          And here's what I'm <span className="yellow">learning right now:</span>
        </p>
        <div className="py-2 gap-1 flex flex-row flex-wrap justify-center items-center">
          <Skill skillKey="flutter"/>
          <Skill skillKey="django"/>
        </div>
      </div>
    </div>
  )
}

export default AboutSlide;
