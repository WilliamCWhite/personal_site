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
    return (
      <a href={link.url}>
        <div>
          <img src={linkIconMap[link.iconName]} />
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
    <div className="project-container">
      <div className="section-1">
        <h2>{project.title}</h2>
        <img src={images[project.idx]} />
        <nav className="link-list">
          {...links}
        </nav>
      </div>
      <div className="divider"></div>
      <div className="section-2">
        <p>
          {project.description}
        </p>
        <p>Technologies:</p>
        <div className="skill-list">
          {...skills}
        </div>
        
      </div>

    </div>
  )
}

export default ProjectSlide;
