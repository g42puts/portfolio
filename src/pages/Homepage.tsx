import { CertificatesSection } from "@/components/Homepage/CertificatesSection";
import { Introduction } from "@/components/Homepage/Intruduction";
import { SkillsSection } from "@/components/Homepage/SkillsSection";

import { Layout } from "@/components/Layout";

export default function Homepage() {
  return (
    <Layout>
      <main>
        <Introduction />
        <SkillsSection />
        <CertificatesSection />
        {/* <MainSection id="projetos">
          <div>
            <h3>Projetos</h3>
          </div>
        </MainSection> */}
      </main>
    </Layout>
  )
}