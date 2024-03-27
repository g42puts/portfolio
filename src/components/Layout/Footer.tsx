import { FaGithub } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md"; // Telefone
import { MdOutlineMailOutline } from "react-icons/md"; // E-mail

import InstagramSvg from "/instagram_svg.svg";
import LinkedinSvg from "/linkedin_svg.svg";
import GmailSvg from "/gmail_svg.svg";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full sm:py-20 py-20 pt-10 text-lg bg-slate-950"
    >
      <div
        className="flex sm:flex-row flex-col sm:gap-20 gap-10 sm:items-start items-center sm-auto justify-center"
      >
        <div className="flex sm:flex-col flex-col flex-wrap items-start gap-4 sm:w-60">
          <h3 className="text-xl font-bold tracking-widest border-b-[1px] border-b-white text-center mb-5">
            Minhas Redes Sociais
          </h3>
          <a
            aria-label="Link para o perfil do linkedin de Gilmar José"
            aria-required
            href="https://www.linkedin.com/in/gilmar-jose/"
            className="flex flex-row gap-2 transform transition duration-500 hover:scale-[120%]"
          >
            <img src={LinkedinSvg} alt="Ícone do Linkedin" className="size-8 -m-1" />
            <span>LinkedIn</span>
          </a>
          <a
            aria-label="Link para o perfil do Instagram de Gilmar José"
            aria-required
            href="https://www.instagram.com/gilmarneo/"
            className="flex flex-row gap-2 transform transition duration-500 hover:scale-[120%]"
          >
            <img src={InstagramSvg} alt="Ícone do Instagram" className="size-8 -m-1" />
            <span>Instagram</span>
          </a>
          <a
            aria-label="Link para o perfil do Github de Gilmar José"
            aria-required
            href="https://www.github.com/g42puts/"
            className="flex flex-row gap-2 transform transition duration-500 hover:scale-[120%]"
          >
            <FaGithub className="size-6" />
            <span>Github</span>
          </a>
          <a
            aria-label="Link para o Gmail ou E-mail de Gilmar José"
            aria-required
            href="mailto:gilmar.neo@gmail.com?subject=Assunto do email&body=Conteúdo do email que será preenchido automaticamente"
            className="flex flex-row gap-2 transform transition duration-500 hover:scale-[120%]"
          >
            <img
              src={GmailSvg}
              alt="Ícone do Gmail"
              className="size-6" />
            <span>Gmail</span>
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold tracking-widest border-b-[1px] border-b-white text-center  mb-5">Meus contatos</h3>
          <div className="flex flex-row items-center align-baseline gap-1">
            <MdLocalPhone size={20} />
            <span
              aria-label="+5581995280048"
              aria-required
            >
              +55 81 99528 0048
            </span>
          </div>
          <div className="flex flex-row items-center align-baseline gap-1">
            <MdOutlineMailOutline size={20} />
            <span
              aria-label="gilmar.neo@gmail.com"
              aria-required>
              gilmar.neo@gmail.com
            </span>
          </div>
        </div>
        <div>
          <span></span>
        </div>
      </div>
    </footer>
  )
}