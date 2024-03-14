// Components
import Header from "components/Header";
import Introduction from "components/Intruduction";
import Footer from "components/Footer";
import SkillsContainer from "components/SkillsContainer";

import fotoPerfil from "/foto_perfil.jpg"

import PythonSvg from "/techs/python_svg.svg";
import JavascriptSvg from "/techs/javascript_svg.svg";
import TypescriptSvg from "/techs/typescript_svg.svg";
import CPlusPlusSvg from "/techs/cplusplus_svg.svg";

import DjangoSvg from "/techs/django_svg.svg";
import ReactSvg from "/techs/react_svg.svg";
import NodejsSvg from "/techs/nodejs_svg.svg";
import NextSvg from "/techs/nextjs_svg.svg";
import ViteSvg from "/techs/vitejs_svg.svg";
import SeleniumSvg from "/techs/selenium_svg.svg";

import MysqlSvg from "/techs/mysql_svg.svg";
import Sqlite3Svg from "/techs/sqlite3_svg.svg";
import SqllachemySvg from "/techs/sqlalchemy_svg.svg";

import Css3Svg from "/techs/css3_svg.svg";
import Html5Svg from "/techs/html5_svg.svg";
import TailwindSvg from "/techs/tailwind_svg.svg";


const Tools = {
  languages: [
    { name: "Python", stars: 3.5, svg: PythonSvg },
    { name: "Javascript", stars: 2.5, svg: JavascriptSvg },
    { name: "Typescript", stars: 2.0, svg: TypescriptSvg },
    { name: "C++", stars: 1.0, svg: CPlusPlusSvg },
    { name: "React", stars: 2.5, svg: ReactSvg },
    { name: "HTML5", stars: 3.0, svg: Html5Svg },
    { name: "CSS3", stars: 2.5, svg: Css3Svg },
    { name: "Tailwind", stars: 2.5, svg: TailwindSvg },
    { name: "Node.js", stars: 1.5, svg: NodejsSvg },
    { name: "Django", stars: 3.0, svg: DjangoSvg },
    { name: "Selenium", stars: 2.0, svg: SeleniumSvg },
    { name: "Next", stars: 2.0, svg: NextSvg },
    { name: "Next", stars: 2.0, svg: ViteSvg },
  ],
  databaseAndClouding: [
    { name: "MySQL", stars: 2.5, svg: MysqlSvg },
    { name: "SQLite3", stars: 2.5, svg: Sqlite3Svg },
    { name: "Sqllachemy", stars: 1.5, svg: SqllachemySvg },
  ]
};


function App() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}

export default App;