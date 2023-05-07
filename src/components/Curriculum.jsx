import PersonalInfo from "./PersonalInfo";
import ProfessionalInfo from "./ProfessionalInfo";
import Contact from "./Contact";
export default function Curriculum() {
    return (
        <div className="bg-white border-solid border-4 border-slate-800 rounded-3xl h-full flow-root relative widthCurriculum">
            <PersonalInfo />
            <div className="absolute right-0 bottom-auto mr-16">
                <h1 className="text-3xl font-serif mt-4">
                    Deiver Jair Bernal Garzon
                </h1>
            </div>
            <ProfessionalInfo />
            <Contact />
        </div>
    );
}
