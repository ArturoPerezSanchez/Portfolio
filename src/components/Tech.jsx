import { BallCanvas } from "./canvas"
import { SectionWrapper} from "../hoc"
import { technologies } from "../constants"
import { useMediaQuery } from 'react-responsive';


const Tech = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 }); // Define the minimum width to consider the device as desktop

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {isDesktop ? 
          
          <BallCanvas color={technology.color} icon={technology.icon}/> : 
          
          <img className="w-[100%] h-[100%] object-contain rounded-full" src={technology.icon}></img>
          
          }<div style={{background: technology.color, textShadow:"2px 0 #0005, -2px 0 #0005, 0 2px #0005, 0 -2px #0005,1px 1px #0005, -1px -1px #0005, 1px -1px #0005, -1px 1px #0005"}} className="w-full text-center rounded-full opacity-80">{technology.name}</div>
        </div>
      ))} 
      </div>
  )
}

export default SectionWrapper(Tech, "tech");