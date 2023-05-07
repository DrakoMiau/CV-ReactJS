import Career from './Career';
import Projects from './Projects';
import Skills from './Skills'
function ProfessionalInfo() {
  return (
    <div className='ml-5 mt-20 float-right widthProffesionalInfo mr-10 h-4/5'>
      <Career />
      <hr className="mt-3 ml-1 mr-1 mb-5 border-2 border-cyan-900"/>
      <Projects/>
      <hr className="mt-3 ml-1 mr-1 border-2 border-cyan-900"/>
      <Skills />
    </div>
  )
}

export default ProfessionalInfo