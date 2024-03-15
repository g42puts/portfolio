// Components
import Introduction from "components/Homepage/Intruduction";
import SkillsContainer from "components/Homepage/SkillsContainer";

import { Tools } from "libs/tools";
import fotoPerfil from "/foto_perfil.jpg"
import Layout from "components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Introduction profileImg={fotoPerfil} />
        <main>
          <section
            id="habilidades"
            className="py-20"
          >
            <SkillsContainer h4Text="Linguagens e Frameworks" Items={Tools.languages} />
            <SkillsContainer h4Text="Database and Cloud" Items={Tools.databaseAndClouding} />
          </section>
          {/* <MainSection id="projetos">
          <div>
            <h3>Projects</h3>
          </div>
        </MainSection> */}
          {/* <MainSection id="certificados">
          <div>
            <h3>Certifications</h3>
          </div>
        </MainSection> */}
        </main>
      </Layout>
    </>
  )
}

export default App;