import ExperienceCard from "./ExperienceCard";
import SectionWrapper from "./SectionWrapper";

interface ExperienceT {
  companyName: string;
  img: string;
  role: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  summary: string[];
}

interface Props {
  experiences: ExperienceT[];
}

function WorkExperience({ experiences }: Props) {
  return (
    <SectionWrapper
      heading="Experience"
      className="relative flex overflow-hidden flex-col md:flex-row max-w-full px-2 sm:px-10 justify-evenly max-auto items-center"
    >
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        {experiences.map((experience, index) => (
          <ExperienceCard experience={experience} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default WorkExperience;
