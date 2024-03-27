import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { USER } from "libs/user";
import { calcularIdade } from "./_utils";


export default function Introduction({ profileImg }: { profileImg: string }) {
  return (
    <section 
      id="sobre"
      className="sm:pt-40 pt-40 py-10 p-4 jusify-center align-baseline flex background-teste shadow-[0_20px_50px_#05083B]"
    >
      <div className="flex sm:flex-row flex-col justify-center w-full gap-10 items-center">
        <div className="flex sm:flex-row flex-col justify-center align-middle items-center max-w-[800px] text-lg sm:my-10 sm:p-4 gap-20">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="tracking-wider">Olá, meu nome é <strong className="text-blue-500 tracking-wider">Gilmar</strong>.</h3>
              <span className="inline-block overflow-hidden whitespace-nowrap animate-typing sm:text-2xl text-xl font-medium tracking-wider">Desenvolvedor <strong className="text-blue-500">Full-Stack Jr.</strong></span>
            </div>
            <div className="bg-emerald-100 bg-opacity-5 p-4 rounded-md sm:w-[400px] m-auto text-base">
              <p className="indent-5">
                Sou um
                <a
                  href="https://www.google.com/search?q=pernambuco"
                  className="hover:underline text-slate-400"
                >
                  &nbsp;Pernambucano
                </a>
                &nbsp;de {calcularIdade(USER.BIRTH_DATE)} anos, estudante do curso {USER.GRADUATION_COURSE} na faculdade {USER.GRADUATION_SCHOOL}, atualmente no 2° período.
              </p>
              <p className="indent-5">
                Atualmente venho me dedicado a aprender mais sobre o Frontend, mas também adoro o Backend.
              </p>
            </div>
          </div>

          <div className="flex sm:flex-row sm:mt-4 sm:gap-24 gap-10">
            <div className="flex flex-col sm:gap-6 gap-4">
              <div className="flex flex-row justify-evenly sm:[&_svg]:size-8 [&_svg]:size-8 [&_a]:cursor-pointer text-blue-300">

                <a
                  href="https://www.linkedin.com/in/gilmar-jose/"
                  className="transform transition duration-500 hover:scale-[120%]"
                >
                  <AiOutlineLinkedin />
                </a>
                <a
                  href="https://github.com/g42puts"
                  className="transform transition duration-500 hover:scale-[120%]"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://www.instagram.com/gilmarneo/"
                  className="transform transition duration-500 hover:scale-[120%]"
                >
                  <FaInstagram />
                </a>
              </div>
              <figure>
                <img className="min-w-[144px] size-36 rounded-3xl" src={profileImg} alt="Foto de Perfil de Gilmar" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}