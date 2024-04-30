import type { NextPage } from "next";

const ExperienceEducationInterest: NextPage = () => {
  return (
    <div className="w-[14.5rem] flex flex-col items-start justify-start gap-[0.875rem] shrink-0 text-left text-[1.25rem] text-black font-inter">
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.062rem]">
        <h1 className="m-0 relative text-inherit uppercase font-medium font-inherit mq450:text-[1rem]">
          EXPÉRIENCES
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem] text-[0.5rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.312rem]">
            <h3 className="m-0 self-stretch relative text-[0.688rem] capitalize font-medium font-inherit">{`DevOps & Quality Assurance Test automation`}</h3>
            <i className="w-[7.813rem] relative [text-decoration:underline] flex font-extralight text-dimgray items-center whitespace-nowrap">
              <a
                className="text-[inherit]"
                href="https://www.data-tricks.com"
                target="_blank"
              >{`Lien: `}</a>
            </i>
            <div className="flex flex-row items-start justify-start gap-[1.062rem]">
              <div className="relative inline-block min-w-[3.25rem]">
                DATA-TRICKS
              </div>
              <i className="relative inline-block text-dimgray min-w-[5.5rem]">
                sept. 2023 - août 2024
              </i>
            </div>
            <div className="self-stretch relative text-dimgray">
              <ul className="m-0 font-inherit text-inherit pl-[1.375rem]">
                <li>
                  Intégration et déploiement continu (CI/CD) pour une livraison
                  rapide et fiable.
                </li>
                <li>
                  Mise en place et gestion de l'automatisation des tests dans
                  les pipelines CI/CD avec Selenium, Jenkins
                </li>
                <li>
                  Surveillance et amélioration de la performance et de la
                  sécurité des applications en production.
                </li>
              </ul>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.312rem]">
            <h3 className="m-0 self-stretch relative text-[0.688rem] capitalize font-medium font-inherit">
              Concepteur Développeur d’applications
            </h3>
            <a
              className="relative [text-decoration:underline] italic font-extralight text-dimgray"
              href="https://www.nvgallery.com/fr-fr/"
              target="_blank"
            >
              Lien: https://www.nvgallery.com/fr-fr
            </a>
            <div className="flex flex-row items-start justify-start gap-[1.062rem]">
              <div className="relative inline-block min-w-[3.063rem]">
                NV GALLERY
              </div>
              <i className="relative inline-block text-dimgray min-w-[4.875rem]">
                mai 2022 - juil. 2023
              </i>
            </div>
            <div className="self-stretch relative text-dimgray">
              <ul className="m-0 font-inherit text-inherit pl-[1.375rem]">
                <li>
                  Conception et développement de nouvelles fonctionnalités pour
                  améliorer l'expérience utilisateur et augmenter l'efficacité
                  opérationnelle.
                </li>
                <li>
                  Maintenance applicative pour assurer la continuité du service
                  et répondre aux exigences de performance et de sécurité.
                </li>
                <li>
                  Diagnostic et résolution des bugs pour garantir la fiabilité
                  et la stabilité de l'application.
                </li>
              </ul>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.312rem]">
            <h3 className="m-0 self-stretch relative text-[0.688rem] capitalize font-medium font-inherit">
              Développeur web
            </h3>
            <a
              className="relative [text-decoration:underline] italic font-extralight text-dimgray"
              href="https://www.savane-mousson.fr"
              target="_blank"
            >
              Lien: https://www.savane-mousson.fr
            </a>
            <div className="flex flex-row items-start justify-start gap-[1.062rem]">
              <div className="relative inline-block min-w-[4.5rem]">{`Savane & Mousson`}</div>
              <i className="relative inline-block text-dimgray min-w-[5rem]">
                Oct. 2021 - mai 2022
              </i>
            </div>
            <div className="self-stretch relative text-dimgray">
              <ul className="m-0 font-inherit text-inherit pl-[1.375rem]">
                <li>
                  Conception et développement du site web utilisant HTML5, CSS3
                  et JavaScript, et Wordpress.
                </li>
                <li>
                  Création des formulaires en ligne, des galeries d'images et
                  des flux de médias sociaux, et fourniture d'une formation au
                  personnel de l'organisation pour la mise à jour du contenu du
                  site web.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.375rem]">
        <div className="relative uppercase font-medium inline-block min-w-[7.313rem] mq450:text-[1rem]">
          ÉDUCATION
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[0.688rem] text-gray">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.187rem]">
            <div className="self-stretch relative capitalize font-medium whitespace-pre-wrap">
              Master DevOps - Architecte des systèmes d'informations, Bac +4
            </div>
            <div className="flex flex-row items-start justify-start gap-[1.062rem] text-[0.5rem] text-black">
              <div className="relative inline-block min-w-[2.625rem]">
                CFA-INSTA
              </div>
              <i className="relative inline-block text-dimgray min-w-[5.688rem]">
                sept. 2023 - juillet 2024
              </i>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.187rem]">
            <div className="self-stretch relative capitalize font-medium">
              Concepteur Développeur d’application, Bac +3
            </div>
            <div className="flex flex-row items-start justify-start gap-[1.062rem] text-[0.5rem] text-black">
              <div className="relative inline-block min-w-[2.625rem]">
                CFA-INSTA
              </div>
              <i className="relative inline-block text-dimgray min-w-[5.688rem]">
                sept. 2022 - juillet 2023
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
        <h1 className="m-0 relative text-inherit uppercase font-medium font-inherit inline-block min-w-[6.063rem] mq450:text-[1rem]">
          INTÉRÊTS
        </h1>
        <h3 className="m-0 self-stretch relative text-[0.688rem] capitalize font-normal font-inherit">
          <ul className="m-0 font-inherit text-inherit pl-[1.363rem]">
            <li>Tech's News</li>
            <li>Cuisine</li>
            <li>Course à pied</li>
            <li>Danse</li>
            <li>Football</li>
          </ul>
        </h3>
      </div>
    </div>
  );
};

export default ExperienceEducationInterest;
