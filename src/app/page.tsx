// "use client";

// import type { NextPage } from "next";
// import { Body, CvHeader } from "../components";
// import { QRCode, Space, Typography } from "antd";
// import { CONSTANTES } from "../utils";

// const Index: NextPage = () => {
//   return (
//     <div className="bg-white grid items-center max-w-[95vw] min-w-[90vw] h-full">
//       <Space
//         direction={"vertical"}
//         align="center"
//         size={40}
//         className="w-full h-full bg-white "
//       >
//         <CvHeader />
//         <Space direction="vertical" align="center" size={0}>
//           <Typography.Text
//             italic
//             className="text-left text-dimgray-400 md:text-right"
//           >
//             CV web site:
//           </Typography.Text>
//           <QRCode
//             style={{
//               margin: 0,
//             }}
//             value={CONSTANTES.githubPage}
//             size={85}
//           />
//         </Space>
//         <Body />
//       </Space>
//     </div>
//   );
// };

// export default Index;
import type { NextPage } from "next";
import Header from "../components/v2/header";
import ExperienceEducationInterest from "../components/v2/experience-education-interest";

const CVDevOpsOTTODieuPUissantC: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start py-[1.875rem] px-[1.437rem] box-border leading-[normal] tracking-[normal]">
      <section className="w-[32.375rem] flex flex-col items-center justify-center gap-[0.75rem] max-w-full text-left text-[1.25rem] text-black font-inter">
        <Header />
        <div className="w-[30.875rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border gap-[4.375rem] max-w-full mq450:gap-[1.063rem] mq525:flex-wrap mq525:gap-[2.188rem]">
          <ExperienceEducationInterest />
          <div className="w-[14.5rem] flex flex-col items-start justify-start gap-[0.75rem] shrink-0">
            <div className="flex flex-col items-start justify-start gap-[0.25rem]">
              <h1 className="m-0 relative text-inherit uppercase font-medium font-inherit mq450:text-[1rem]">
                Compétences
              </h1>
              <div className="flex flex-col items-start justify-start gap-[0.25rem] text-[0.688rem]">
                <div className="flex flex-col items-start justify-start gap-[0.187rem]">
                  <h3 className="m-0 relative text-inherit [text-decoration:underline] capitalize font-normal font-inherit">{`Méthodologies & pratiques`}</h3>
                  <div className="relative text-[0.5rem] text-dimgray">
                    <ul className="m-0 font-inherit text-inherit pl-[1.375rem]">
                      <li>SCRUM / Kanban</li>
                      <li>SOLID</li>
                      <li>Design Patterns</li>
                      <li>Programmation fonctionnelle</li>
                      <li>Programmation réactive</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.187rem]">
                  <h3 className="m-0 relative text-inherit [text-decoration:underline] capitalize font-normal font-inherit">{`Conteneurisation & orchestration`}</h3>
                  <div className="relative text-[0.5rem] text-dimgray">
                    <ul className="m-0 font-inherit text-inherit pl-[1.375rem]">
                      <li>Docker</li>
                      <li>Kubernetes</li>
                      <li>Helm</li>
                      <li>Docker Swarm</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.187rem]">
                  <h3 className="m-0 relative text-inherit [text-decoration:underline] capitalize font-normal font-inherit">{`Automatisation & Provisioning & CI/CD`}</h3>
                  <div className="relative text-[0.5rem] text-dimgray">
                    <ul className="m-0 font-inherit text-inherit pl-[1.375rem]">
                      <li>Ansible</li>
                      <li>Terraform</li>
                      <li>Git</li>
                      <li>Jenkins</li>
                      <li>GitLab CI/CD</li>
                      <li>Github Action</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.187rem]">
                  <h3 className="m-0 relative text-inherit [text-decoration:underline] capitalize font-normal font-inherit inline-block min-w-[2.813rem]">
                    Réseaux
                  </h3>
                  <div className="relative text-[0.5rem] text-dimgray">
                    <ul className="m-0 font-inherit text-inherit pl-[1.375rem]">
                      <li>TCP/IP</li>
                      <li>Load Balancing</li>
                      <li>Proxies inverses (Nginx, Traefik)</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.187rem]">
                  <h3 className="m-0 relative text-inherit [text-decoration:underline] capitalize font-normal font-inherit inline-block min-w-[3.5rem]">
                    Monitoring
                  </h3>
                  <div className="relative text-[0.5rem] text-dimgray">
                    <ul className="m-0 font-inherit text-inherit pl-[1.375rem]">
                      <li>Prometheus</li>
                      <li>Grafana</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.187rem]">
                  <h3 className="m-0 relative text-inherit [text-decoration:underline] capitalize font-normal font-inherit inline-block min-w-[5.75rem]">
                    Base de données
                  </h3>
                  <div className="relative text-[0.5rem] text-dimgray">
                    <ul className="m-0 font-inherit text-inherit pl-[1.375rem]">
                      <li>PostgreSQL</li>
                      <li>MongoDB</li>
                      <li>MySQL</li>
                      <li>Redis</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.187rem]">
                  <h3 className="m-0 relative text-inherit [text-decoration:underline] capitalize font-normal font-inherit inline-block min-w-[7.313rem]">
                    Messagerie distribuée
                  </h3>
                  <div className="relative text-[0.5rem] text-dimgray">
                    <ul className="m-0 font-inherit text-inherit pl-[1.375rem]">
                      <li>Apache Kafka</li>
                      <li>NATS</li>
                      <li>RabbitMQ</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.187rem]">
                  <h3 className="m-0 relative text-inherit [text-decoration:underline] capitalize font-normal font-inherit inline-block min-w-[5.75rem]">{`Langages & Tests`}</h3>
                  <div className="relative text-[0.5rem] text-dimgray">
                    <ul className="m-0 font-inherit text-inherit pl-[1.375rem]">
                      <li>Java (Spring)</li>
                      <li>PHP (Symfony)</li>
                      <li>JavaScript (TypeScript)</li>
                      <li>Angular</li>
                      <li>React</li>
                      <li>NodeJS</li>
                      <li>Playwright</li>
                      <li>Selenium</li>
                      <li>Jest</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
              <h1 className="m-0 relative text-inherit uppercase font-medium font-inherit inline-block min-w-[6rem] mq450:text-[1rem]">
                LANGUES
              </h1>
              <h3 className="m-0 self-stretch relative text-[0.688rem] capitalize font-normal font-inherit">
                <ul className="m-0 font-inherit text-inherit pl-[1.363rem]">
                  <li>Français</li>
                  <li>Anglais</li>
                  <li>Sango</li>
                </ul>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CVDevOpsOTTODieuPUissantC;
