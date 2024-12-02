import { CertificatesSection } from "@/components/Homepage/CertificatesSection";
import { Introduction } from "@/components/Homepage/Intruduction";
import { SkillsSection } from "@/components/Homepage/SkillsSection";
import { Layout } from "@/components/Layout";

function DiscordPresenceIframe() {
  return (
    <iframe className="fixed right-0 zoom-in-150 bg-black/10 rounded-xl" src="https://lanyard.cnrad.dev/api/272554914419310592?bg=transparent" width="300" height="200" />
  )
}

export default function Homepage() {
  return (
    <Layout>
      <main>
        {/* <DiscordPresenceIframe /> */}
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