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
            <a
              aria-label="Sobre"
              href="#sobre"
              className="hover:underline"
            >
              Sobre
            </a>
            <a
              aria-label="Habilidades"
              href="#habilidades"
              className="hover:underline"
            >
              Habilidades
            </a>
            {/* <a
              aria-label="Projetos"
              href="#projetos"
              className="hover:underline"
            >
              Projetos
            </a> */}
            {/* <a
              aria-label="Certificados"
              href="#certificados"
              className="hover:underline"
            >
            Certificados
            </a> */}
            <a
              aria-label="Contato"
              href="#contact"
              className="hover:underline"
            >
              Contato
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}