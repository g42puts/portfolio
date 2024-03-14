export default function Header() {
  return (
    <header className="">
      <div className="fixed bg-neutral-900 bg-opacity-90 w-full text-white">
        {/* <nav className="max-w-[1100px] m-auto flex flex-row">
          <div className="tracking-widest p-2 text-2xl">
            <span>Gilmar</span>
          </div>
        </nav> */}
        <nav>
          <div className="flex flex-row sm:text-lg text-sm p-1 w-full sm:justify-center justify-around sm:gap-4">
            <a aria-label="Sobre" aria-required="true" href="#sobre">Sobre</a>
            <a aria-label="Habilidades" aria-required="true" href="#habilidades">Habilidades</a>
            {/* <a aria-label="Projetos" aria-required="true" href="#projetos">Projetos</a> */}
            {/* <a aria-label="Certificados" aria-required="true" href="#certificados">Certificados</a> */}
            <a aria-label="Contato" aria-required="true" href="#contact">Contato</a>
          </div>
        </nav>
      </div>
    </header>
  )
}