const experiences = [
  {
    title: "Développeur Full-Stack",
    company: "TENNISNGO",
    date: "Oct. 2024 - Déc. 2024",
    description: [
      "Intégration des maquettes et développement de l’application en React Native.",
      "Conception et développement des APIs et du serveur Nest.js.",
    ],
  },
  {
    title: "DevOps & Développeur",
    company: "ALKWELO",
    date: "Jan. 2024 - Août 2024",
    description: [
      "Automatisation des processus CI/CD avec Kubernetes et Docker.",
      "Mise en place de tests automatisés avec Playwright et Jenkins.",
      "Développement en React, Node.js, et Rust.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Expériences</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <p className="text-gray-600">
            {exp.company} - {exp.date}
          </p>
          <ul className="list-disc ml-5 text-gray-800">
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;
const experiences = [
  {
    title: "Développeur Full-Stack",
    company: "TENNISNGO",
    date: "Oct. 2024 - Déc. 2024",
    description: [
      "Intégration des maquettes et développement de l’application en React Native.",
      "Conception et développement des APIs et du serveur Nest.js.",
    ],
  },
  {
    title: "DevOps & Développeur",
    company: "ALKWELO",
    date: "Jan. 2024 - Août 2024",
    description: [
      "Automatisation des processus CI/CD avec Kubernetes et Docker.",
      "Mise en place de tests automatisés avec Playwright et Jenkins.",
      "Développement en React, Node.js, et Rust.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Expériences</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <p className="text-gray-600">
            {exp.company} - {exp.date}
          </p>
          <ul className="list-disc ml-5 text-gray-800">
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;
