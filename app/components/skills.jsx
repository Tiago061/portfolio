import LogoLoop from './LogoLoop';
import { SiReact, SiTypescript, SiJavascript } from 'react-icons/si';
import { FaJava, FaNodeJs, FaAws } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <FaJava  />, title: "Java" },
  { node: <FaNodeJs  />, title: "NodeJs" },
  { node: <FaAws   />, title: "AWS" },
  { node: <BiLogoPostgresql   />, title: "PostgreSQL" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondarySolid text-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div style={{ height: '100px', position: 'relative', overflow: 'hidden'}}>
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={70}
              width
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="Technology partners"
            />
        </div>
      </div>
    </section>
  )
}
