import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center gap-[0.75rem] text-left text-[1.25rem] text-black font-inter">
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
        <div className="w-[17.625rem] flex flex-row items-center justify-start gap-[1.875rem]">
          <img
            className="h-[5.375rem] w-[5.375rem] relative rounded-lg object-cover min-h-[5.375rem]"
            loading="lazy"
            alt=""
            src="/assets/img/ottodpc.jpeg"
          />
          <div className="flex-1 flex flex-col items-start justify-center gap-[0.625rem]">
            <div className="flex flex-row items-center justify-start gap-[0.5rem]">
              <h1 className="m-0 relative text-inherit font-light font-inherit inline-block min-w-[3.438rem] mq450:text-[1rem]">
                OTTO
              </h1>
              <h1 className="m-0 relative text-inherit font-light font-inherit inline-block min-w-[4.563rem] mq450:text-[1rem]">
                Cyprien
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[0.375rem]">
              <h1 className="m-0 relative text-inherit font-medium font-inherit mq450:text-[1rem]">
                DevOps Engineer
              </h1>
              <i className="self-stretch relative text-[0.563rem] text-dimgray">
                En alternance : 1 semaine en cours / 3 semaines en entreprise
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-[0.5rem] text-[0.5rem]">
          <a
            className="relative [text-decoration:underline] inline-block italic text-[inherit] min-w-[5.625rem] whitespace-nowrap"
            href="mailto:cyprienotto@outlook.fr"
            target="_blank"
          >
            cyprienotto@outlook.fr 
          </a>
          <i className="relative inline-block min-w-[3.625rem]">
            06.20.32.03.88
          </i>
          <a
            className="relative [text-decoration:underline] inline-block italic text-[inherit] min-w-[5.625rem]"
            href="https://www.linkedin.com/in/ottodpc"
            target="_blank"
          >
            linkedin.com/in/ottodpc
          </a>
          <a
            className="relative [text-decoration:underline] inline-block italic text-[inherit] min-w-[4.688rem]"
            href="https://github.com/ottodpc"
            target="_blank"
          >
            github.com/ottodpc
          </a>
          <a
            className="relative [text-decoration:underline] inline-block italic text-[inherit] min-w-[4.75rem]"
            href="https://twitter.com/ottodpc"
            target="_blank"
          >
            twitter.com/ottodpc
          </a>
        </div>
      </div>
      <div className="self-stretch relative text-[0.5rem]">
        <p>
          Avec 5 ans d'expérience en tant que Développeur Full-Stack et
          Concepteur d'Applications, j'utilise les technologies et outils de la
          philosophie DevOps depuis 3 ans et je suis déterminé à poursuivre mon
          évolution dans ce domaine. Autonome et empathique, j’apprécie le
          travail d’équipe, je communique toujours avec clarté et je m’adapte au
          changement.
        </p>
      </div>
    </div>
  );
};

export default Header;
