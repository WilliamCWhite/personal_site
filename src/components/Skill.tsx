import awsIcon from '../assets/icons/icons8-amazon-web-services-144.png'
import cIcon from '../assets/icons/icons8-c-programming-144.png'
import cSharpIcon from '../assets/icons/icons8-c-sharp-logo-144.png'
import djangoIcon from '../assets/icons/icons8-django-144.png'
import dockerIcon from '../assets/icons/icons8-docker-144.png'
import flutterIcon from '../assets/icons/icons8-flutter-144.png'
import gitIcon from '../assets/icons/icons8-git-144.png'
import golangIcon from '../assets/icons/icons8-golang-144.png'
import javaIcon from '../assets/icons/icons8-java-144.png'
import jsIcon from '../assets/icons/icons8-javascript-144.png'
import nginxIcon from '../assets/icons/icons8-nginx-144.png'
import nodejsIcon from '../assets/icons/icons8-nodejs-144.png'
import postgresIcon from '../assets/icons/icons8-postgresql-144.png'
import pythonIcon from '../assets/icons/icons8-python-144.png'
import reactIcon from '../assets/icons/icons8-react-native-144.png'
import tailwindIcon from '../assets/icons/icons8-tailwindcss-144.png'
import tsIcon from '../assets/icons/icons8-typescript-144.png'

const SkillKeys = {
  AWS: "aws",
  C: "c",
  C_SHARP: "cSharp",
  DJANGO: "django",
  DOCKER: "docker",
  FLUTTER: "flutter",
  GIT: "git",
  GOLANG: "golang",
  JAVA: "java",
  JAVASCRIPT: "javascript",
  NGINX: "nginx",
  NODEJS: "nodejs",
  POSTGRES: "postgres",
  PYTHON: "python",
  REACT: "react",
  TAILWIND: "tailwind",
  TYPESCRIPT: "typescript",
} as const;

type SkillKey = typeof SkillKeys[keyof typeof SkillKeys];

export const SkillMap = {
  [SkillKeys.AWS]: { icon: awsIcon, label: "AWS", class: "yellow-box" },
  [SkillKeys.C]: { icon: cIcon, label: "C", class: "blue-box" },
  [SkillKeys.C_SHARP]: { icon: cSharpIcon, label: "C#", class: "purple-box" },
  [SkillKeys.DJANGO]: { icon: djangoIcon, label: "Django", class: "green-box" },
  [SkillKeys.DOCKER]: { icon: dockerIcon, label: "Docker", class: "blue-box" },
  [SkillKeys.FLUTTER]: { icon: flutterIcon, label: "Flutter", class: "blue-box" },
  [SkillKeys.GIT]: { icon: gitIcon, label: "Git", class: "red-box" },
  [SkillKeys.GOLANG]: { icon: golangIcon, label: "Golang", class: "cyan-box" },
  [SkillKeys.JAVA]: { icon: javaIcon, label: "Java", class: "red-box" },
  [SkillKeys.JAVASCRIPT]: { icon: jsIcon, label: "JavaScript", class: "yellow-box" },
  [SkillKeys.NGINX]: { icon: nginxIcon, label: "Nginx", class: "green-box" },
  [SkillKeys.NODEJS]: { icon: nodejsIcon, label: "Node.js", class: "green-box" },
  [SkillKeys.POSTGRES]: { icon: postgresIcon, label: "PostgreSQL", class: "blue-box" },
  [SkillKeys.PYTHON]: { icon: pythonIcon, label: "Python", class: "yellow-box" },
  [SkillKeys.REACT]: { icon: reactIcon, label: "React", class: "cyan-box" },
  [SkillKeys.TAILWIND]: { icon: tailwindIcon, label: "Tailwind", class: "cyan-box" },
  [SkillKeys.TYPESCRIPT]: { icon: tsIcon, label: "TypeScript", class: "blue-box" },
};

interface SkillProps {
  skillKey: SkillKey,
}

function Skill(props: SkillProps) {

  return (
    <div className={`${SkillMap[props.skillKey].class} flex w-fit items-center gap-1 px-2 py-1 rounded-md`}>
      <img className="w-6 h-6" src={SkillMap[props.skillKey].icon}/>
      <p className="text-lg">{SkillMap[props.skillKey].label}</p>
    </div>
  )
}

export default Skill
