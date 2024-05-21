import { Tools } from "@/libs/tools";
import { SkillsContainer } from "./SkillsContainer";

const SkillsSection = () => {
  return (
    <section
      id="habilidades"
      className="py-20"
    >
      <SkillsContainer h4Text="Linguagens e Frameworks" Items={Tools.techs} />
      <SkillsContainer h4Text="Database and Cloud" Items={Tools.databaseAndClouding} />
    </section>
  )
}

export { SkillsSection };