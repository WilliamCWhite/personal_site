import type { SkillKey } from "./Skill";
import Skill from "./Skill";

// LINK ICON COMPOSABILITY
const LinkIconKeys = {
  PLAY: "play",
  GITHUB: "github"
} as const;
export type LinkIconKey = typeof LinkIconKeys[keyof typeof LinkIconKeys];

import githubIcon from "../assets/icons/icons8-github-144.png"
import playIcon from "../assets/icons/play.png"
const linkIconMap = {
  [LinkIconKeys.PLAY]: playIcon,
  [LinkIconKeys.GITHUB]: githubIcon
}

// IMAGE COMPOSABILITY (SOMEWHAT)
import project0img from "../assets/images/project0.png"
const images = [project0img]

// PROJECT COMPOSABILITY TYPES
export interface ProjectLink {
  type: 'primary' | 'secondary' | string;
  url: string;
  iconName: LinkIconKey;
  label: string;
}

export interface ProjectObj {
  idx: number;
  title: string;
  description: string;
  links: ProjectLink[];
  technologies: SkillKey[];
}

export interface ProjectProps {
  project: ProjectObj;
}

function ProjectSlide({
  project,
}: ProjectProps) {

  const links = project.links.map((link: ProjectLink) => {
    let divClasses = "cyan-box";
    let iconClasses = "w-6 h-6"
    if (link.type == "primary") {
      divClasses = "yellow-box"
      iconClasses = "w-4 h-4"
    }

    return (
      <a href={link.url}>
        <div className={`${divClasses} px-2 py-1 gap-1 rounded-md flex w-fit items-center`}>
          <img className={iconClasses} src={linkIconMap[link.iconName]} />
          <p>{link.label}</p>
        </div>
      </a>
    )
  })
  
  const skills = project.technologies.map((skillKey: SkillKey) => {
    return (
      <Skill skillKey={skillKey} />
    )
  })

  return (
    <div className="slide-shadow rounded-xl p-3 flex flex-col justify-center items-center">
      <div className="section-1">
        <h2 className="text-xl text-nyellow">{project.title}</h2>
        <img className="my-2 rounded-md" src={images[project.idx]} />
        <nav className="py-2 gap-1 flex flex-row flex-wrap justify-center items-center">
          {...links}
        </nav>
      </div>
      <div className="my-2 w-full h-px bg-ncomment"></div>
      <div className="section-2">
        <p>
          {project.description}
        </p>
        <p className="pt-1 text-npurple text-lg">Technologies:</p>
        <div className="py-2 gap-1 flex flex-row flex-wrap justify-center items-center">
          {...skills}
        </div>
        
      </div>

    </div>
  )
}

export default ProjectSlide;
