"use client";

import * as React from "react";
import { Color, FontFamily, FontSize } from "./GlobalStyles";
import {
  Document,
  Page,
  Image,
  StyleSheet,
  Text,
  View,
  PDFViewer,
} from "@react-pdf/renderer";

const CVDevOpsOTTODieuPUissantC = () => {
  return (
    <Document>
      <Page size="A4" style={styles.cvDevopsOttoDieuPuissantC}>
        <View style={styles.contentWrapper}>
          <View style={styles.header}>
            <View style={styles.avatarNameContact}>
              <View style={styles.identityWrap}>
                <Image
                  style={styles.avatarIcon}
                  // resizeMode="cover"
                  src="/assets/img/ottodpc.jpeg"
                />
                <View style={styles.nameParent}>
                  <View style={styles.identityWrap}>
                    <Text
                      style={{ ...styles.firstname, ...styles.lastnameTypo }}
                    >
                      OTTO
                    </Text>
                    <Text
                      style={{ ...styles.lastname, ...styles.lastnameTypo }}
                    >
                      Cyprien
                    </Text>
                  </View>
                  <View style={styles.postRythm}>
                    <Text style={{ ...styles.post, ...styles.postTypo1 }}>
                      DevOps Engineer
                    </Text>
                    <Text style={{ ...styles.rythm, ...styles.bioFlexBox }}>
                      En alternance : 1 semaine en cours / 3 semaines en
                      entreprise
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.contact}>
                <Text style={styles.email}>cyprienotto@outlook.fr </Text>
                <Text style={styles.numberTypo}>06.20.32.03.88</Text>
                <Text style={{ ...styles.linkedinLink, ...styles.numberTypo }}>
                  linkedin.com/in/ottodpc
                </Text>
                <Text style={{ ...styles.linkedinLink, ...styles.numberTypo }}>
                  github.com/ottodpc
                </Text>
                <Text style={{ ...styles.linkedinLink, ...styles.numberTypo }}>
                  twitter.com/ottodpc
                </Text>
              </View>
            </View>
            <Text style={{ ...styles.bio, ...styles.bioFlexBox }}>
              Avec 5 ans d'expérience en tant que Développeur Full-Stack et
              Concepteur d'Applications, j'utilise les technologies et outils de
              la philosophie DevOps depuis 3 ans et je suis déterminé à
              poursuivre mon évolution dans ce domaine. Autonome et empathique,
              j’apprécie le travail d’équipe, je communique toujours avec clarté
              et je m’adapte au changement.
            </Text>
          </View>
          <View style={styles.body}>
            <View>
              <View>
                <Text style={{ ...styles.sectionName, ...styles.postTypo1 }}>
                  EXPÉRIENCES
                </Text>
                <View style={styles.itemsWrapper}>
                  <View>
                    <Text
                      style={{ ...styles.post1, ...styles.postFlexBox }}
                    >{`DevOps & Quality Assurance Test automation`}</Text>
                    <Text
                      style={styles.lienHttpswwwdataTricks}
                    >{`Lien: `}</Text>
                    <View style={styles.companyDate}>
                      <Text style={styles.company}>DATA-TRICKS</Text>
                      <Text style={styles.date}>sept. 2023 - août 2024</Text>
                    </View>
                    <Text
                      style={{ ...styles.description, ...styles.postFlexBox }}
                    >{`Intégration et déploiement continu (CI/CD) pour une livraison rapide et fiable.
Mise en place et gestion de l'automatisation des tests dans les pipelines CI/CD avec Selenium, Jenkins
Surveillance et amélioration de la performance et de la sécurité des applications en production.`}</Text>
                  </View>
                  <View style={styles.sectionItem1}>
                    <Text style={{ ...styles.post1, ...styles.postFlexBox }}>
                      Concepteur Développeur d’applications
                    </Text>
                    <Text style={styles.lienHttpswwwdataTricks}>
                      Lien: https://www.nvgallery.com/fr-fr
                    </Text>
                    <View style={styles.companyDate}>
                      <Text style={styles.company}>NV GALLERY</Text>
                      <Text style={styles.date}>mai 2022 - juil. 2023</Text>
                    </View>
                    <Text
                      style={{ ...styles.description, ...styles.postFlexBox }}
                    >{`Conception et développement de nouvelles fonctionnalités pour améliorer l'expérience utilisateur et augmenter l'efficacité opérationnelle.
Maintenance applicative pour assurer la continuité du service et répondre aux exigences de performance et de sécurité.
Diagnostic et résolution des bugs pour garantir la fiabilité et la stabilité de l'application.`}</Text>
                  </View>
                  <View style={styles.sectionItem1}>
                    <Text style={{ ...styles.post1, ...styles.postFlexBox }}>
                      Développeur web
                    </Text>
                    <Text style={styles.lienHttpswwwdataTricks}>
                      Lien: https://www.savane-mousson.fr
                    </Text>
                    <View style={styles.companyDate}>
                      <Text style={styles.company}>{`Savane & Mousson`}</Text>
                      <Text style={styles.date}>Oct. 2021 - mai 2022</Text>
                    </View>
                    <Text
                      style={{ ...styles.description, ...styles.postFlexBox }}
                    >{`Conception et développement du site web utilisant HTML5, CSS3 et JavaScript, et Wordpress.
Création des formulaires en ligne, des galeries d'images et des flux de médias sociaux, et fourniture d'une formation au personnel de l'organisation pour la mise à jour du contenu du site web.`}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.experienceSection1}>
                <Text style={{ ...styles.sectionName, ...styles.postTypo1 }}>
                  ÉDUCATION
                </Text>
                <View style={styles.itemsWrapper1}>
                  <View>
                    <Text style={{ ...styles.post4, ...styles.postFlexBox }}>
                      Master DevOps - Architecte des systèmes d'informations,
                      Bac +4
                    </Text>
                    <View style={styles.companyDate3}>
                      <Text style={styles.company}>CFA-INSTA</Text>
                      <Text style={styles.date}>sept. 2023 - juillet 2024</Text>
                    </View>
                  </View>
                  <View style={styles.sectionItem4}>
                    <Text style={{ ...styles.post4, ...styles.postFlexBox }}>
                      Concepteur Développeur d’application, Bac +3
                    </Text>
                    <View style={styles.companyDate3}>
                      <Text style={styles.company}>CFA-INSTA</Text>
                      <Text style={styles.date}>sept. 2022 - juillet 2023</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.experienceSection1}>
                <Text style={{ ...styles.sectionName, ...styles.postTypo1 }}>
                  INTÉRÊTS
                </Text>
                <Text
                  style={{ ...styles.items, ...styles.postFlexBox }}
                >{`Tech's News
Cuisine
Course à pied
Danse
Football`}</Text>
              </View>
            </View>
            <View style={styles.skillsLangues}>
              <View>
                <Text style={{ ...styles.sectionName, ...styles.postTypo1 }}>
                  Compétences
                </Text>
                <View style={styles.sectionItem1}>
                  <View>
                    <Text
                      style={{
                        ...styles.mthodologiesPratiques,
                        ...styles.postTypo,
                      }}
                    >{`Méthodologies & pratiques`}</Text>
                    <Text style={styles.scrumKanban}>{`SCRUM / Kanban
SOLID
Design Patterns
Programmation fonctionnelle
Programmation réactive`}</Text>
                  </View>
                  <View style={styles.sectionItem1}>
                    <Text
                      style={{
                        ...styles.mthodologiesPratiques,
                        ...styles.postTypo,
                      }}
                    >{`Conteneurisation & orchestration`}</Text>
                    <Text style={styles.scrumKanban}>{`Docker
Kubernetes
Helm
Docker Swarm`}</Text>
                  </View>
                  <View style={styles.sectionItem1}>
                    <Text
                      style={{
                        ...styles.mthodologiesPratiques,
                        ...styles.postTypo,
                      }}
                    >{`Automatisation & Provisioning & CI/CD`}</Text>
                    <Text style={styles.scrumKanban}>{`Ansible
Terraform
Git
Jenkins
GitLab CI/CD
Github Action`}</Text>
                  </View>
                  <View style={styles.sectionItem1}>
                    <Text
                      style={{
                        ...styles.mthodologiesPratiques,
                        ...styles.postTypo,
                      }}
                    >
                      Réseaux
                    </Text>
                    <Text style={styles.scrumKanban}>{`TCP/IP
Load Balancing
Proxies inverses (Nginx, Traefik)`}</Text>
                  </View>
                  <View style={styles.sectionItem1}>
                    <Text
                      style={{
                        ...styles.mthodologiesPratiques,
                        ...styles.postTypo,
                      }}
                    >
                      Monitoring
                    </Text>
                    <Text
                      style={{
                        ...styles.prometheusGrafana,
                        ...styles.bioFlexBox,
                      }}
                    >{`Prometheus
Grafana`}</Text>
                  </View>
                  <View style={styles.sectionItem1}>
                    <Text
                      style={{
                        ...styles.mthodologiesPratiques,
                        ...styles.postTypo,
                      }}
                    >
                      Base de données
                    </Text>
                    <Text style={styles.scrumKanban}>{`PostgreSQL
MongoDB
MySQL
Redis`}</Text>
                  </View>
                  <View style={styles.sectionItem1}>
                    <Text
                      style={{
                        ...styles.mthodologiesPratiques,
                        ...styles.postTypo,
                      }}
                    >
                      Messagerie distribuée
                    </Text>
                    <Text style={styles.scrumKanban}>{`Apache Kafka
NATS
RabbitMQ`}</Text>
                  </View>
                  <View style={styles.sectionItem1}>
                    <Text
                      style={{
                        ...styles.mthodologiesPratiques,
                        ...styles.postTypo,
                      }}
                    >{`Langages & Tests`}</Text>
                    <Text style={styles.scrumKanban}>{`Java (Spring)
PHP (Symfony)
JavaScript (TypeScript)
Angular
React
NodeJS
Playwright
Selenium
Jest`}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.sectionItem4}>
                <Text style={{ ...styles.sectionName, ...styles.postTypo1 }}>
                  LANGUES
                </Text>
                <Text
                  style={{ ...styles.items, ...styles.postFlexBox }}
                >{`Français
Anglais
Sango`}</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  lastnameTypo: {
    // fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontSize: FontSize.size_xl,
  },
  postTypo1: {
    fontFamily: FontFamily.interMedium,
    // fontWeight: "500",
  },
  bioFlexBox: {
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  numberTypo: {
    marginTop: 8,
    fontSize: FontSize.size_5xs,
    fontStyle: "italic",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
  },
  postFlexBox: {
    width: 232,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  postTypo: {
    textTransform: "capitalize",
    fontSize: FontSize.size_2xs,
  },
  avatarIcon: {
    borderRadius: 8,
    width: 86,
    height: 86,
  },
  firstname: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
  },
  lastname: {
    marginLeft: 8,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
  },
  identityWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  post: {
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    // fontWeight: "500",
  },
  rythm: {
    fontSize: 9,
    width: 166,
    marginTop: 6,
    color: Color.colorDimgray,
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
  },
  postRythm: {
    marginTop: 10,
    justifyContent: "center",
  },
  nameParent: {
    marginLeft: 30,
    justifyContent: "center",
  },
  email: {
    textDecoration: "underline",
    fontSize: FontSize.size_5xs,
    fontStyle: "italic",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
  },
  linkedinLink: {
    textDecoration: "underline",
  },
  contact: {
    marginLeft: 146,
    justifyContent: "center",
  },
  avatarNameContact: {
    flexDirection: "row",
  },
  bio: {
    width: 514,
    height: 25,
    marginTop: 12,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xs,
    color: Color.colorBlack,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  sectionName: {
    textTransform: "uppercase",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    // fontWeight: "500",
  },
  post1: {
    textTransform: "capitalize",
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    // fontWeight: "500",
    color: Color.colorBlack,
  },
  lienHttpswwwdataTricks: {
    // fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    marginTop: 5,
    textDecoration: "underline",
    fontSize: FontSize.size_5xs,
    color: Color.colorDimgray,
    fontStyle: "italic",
    textAlign: "left",
  },
  company: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  date: {
    marginLeft: 17,
    fontSize: FontSize.size_5xs,
    color: Color.colorDimgray,
    fontStyle: "italic",
    textAlign: "left",
    fontFamily: FontFamily.interLight,
  },
  companyDate: {
    marginTop: 5,
    flexDirection: "row",
  },
  description: {
    marginTop: 5,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xs,
    color: Color.colorDimgray,
  },
  sectionItem1: {
    marginTop: 4,
  },
  itemsWrapper: {
    marginTop: 17,
  },
  post4: {
    color: Color.colorGray,
    textTransform: "capitalize",
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    // fontWeight: "500",
  },
  companyDate3: {
    marginTop: 3,
    flexDirection: "row",
  },
  sectionItem4: {
    marginTop: 12,
  },
  itemsWrapper1: {
    marginTop: 6,
  },
  experienceSection1: {
    marginTop: 14,
  },
  items: {
    marginTop: 4,
    textTransform: "capitalize",
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  mthodologiesPratiques: {
    fontFamily: FontFamily.interRegular,
    textDecoration: "underline",
    textAlign: "left",
    color: Color.colorBlack,
  },
  scrumKanban: {
    marginTop: 3,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xs,
    color: Color.colorDimgray,
    textAlign: "left",
  },
  prometheusGrafana: {
    width: 63,
    marginTop: 3,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xs,
    color: Color.colorDimgray,
  },
  skillsLangues: {
    marginLeft: 70,
  },
  body: {
    width: 494,
    marginTop: 12,
    flexDirection: "row",
  },
  contentWrapper: {
    position: "absolute",
    top: 30,
    left: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  cvDevopsOttoDieuPuissantC: {
    backgroundColor: "#e31717",
    flex: 1,
    width: "100%",
    height: 842,
    overflow: "hidden",
  },
});

export default CVDevOpsOTTODieuPUissantC;
