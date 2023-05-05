import Career from './Career';
import Projects from './Projects';
import Skills from './Skills'
function ProfessionalInfo() {
  return (
    <div className='border-2 border-slate-700 rounded-2xl shadow-gray-900 shadow-sm ml-5 mt-20 float-right w-1/2 mr-10 h-4/5'>
      <Career />
      <Projects/>
      <Skills />
    </div>
  )
}

export default ProfessionalInfo