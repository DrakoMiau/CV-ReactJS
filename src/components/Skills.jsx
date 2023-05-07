import SkillCount from './SkillCount'
function Skills() {

    return (
        <div className="mt-10">
            <h3 className="font-bold font-serif mb-4 text-xl">Skills</h3>
            <ul className="list-none ml-7 grid grid-cols-3 font-extralight text-sm">
                <li>
                    JavaScript
                    <SkillCount maxValue={80} className={"circleJavaScript"}/>
                </li>
                <li>
                    HTML
                    <SkillCount maxValue={95} className={"circleHTML"}/>
                </li>
                <li>
                    CSS
                    <SkillCount maxValue={75} className={"circleCSS"}/>
                </li>
                <li>
                    TailWindCSS
                    <SkillCount maxValue={40} className={"circleTailWind"}/>
                </li>
                <li>
                    ReactJS
                    <SkillCount maxValue={70} className={"circleReact"}/>
                </li>
                <li>
                    Java
                    <SkillCount maxValue={85} className={"circleJava"}/>
                </li>
                <li>
                    Python
                    <SkillCount maxValue={45} className={"circlePython"}/>
                </li>
            </ul>
        </div>
    );
}

export default Skills;
