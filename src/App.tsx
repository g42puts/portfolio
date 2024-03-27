import { Helmet } from "react-helmet";

// Libs
import { Tools } from "libs/tools";
import fotoPerfil from "/foto_perfil.jpg"

// Components
import Introduction from "components/Homepage/Intruduction";
import SkillsContainer from "components/Homepage/SkillsContainer";
import Layout from "components/Layout/Layout";


function App() {
  const currentUrl = window.location.toString();
  const title = "Gilmar's Portfólio";
  return (
    <>
      <Helmet
        defaultTitle={title}
      >
        {/* Html Metadata */}
        <title>{title}</title>
        <body className="root" />
        <html lang="pt-br" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfólio de Gilmar" />
        <meta name="keywords" content="portfólio, dev junior, desenvolvedor junior, junior developer, jr. developer, dev fullstack, dev full-stack, desenvolvedor fullstack, desenvolvedor full-stack, desenvolvedor full stack" />
        <meta name="robots" content="all" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={currentUrl} />
        {/* End Html Metadata */}

        {/* Facebook Metadata */}        
        <meta property="og:url" content={currentUrl}/>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" />
        {/* <meta property="og:image" /> */}
        {/* End Facebook Metadata */}
      </Helmet>
      <Layout>
        <Introduction profileImg={fotoPerfil} />
        <main>
          <section
            id="habilidades"
            className="py-20"
          >
            <SkillsContainer h4Text="Linguagens e Frameworks" Items={Tools.techs} />
            <SkillsContainer h4Text="Database and Cloud" Items={Tools.databaseAndClouding} />
          </section>
          {/* <MainSection id="projetos">
          <div>
            <h3>Projetos</h3>
          </div>
        </MainSection> */}
          {/* <MainSection id="certificados">
          <div>
            <h3>Certificados</h3>
          </div>
        </MainSection> */}
        </main>
      </Layout>
    </>
  )
}

export default App;