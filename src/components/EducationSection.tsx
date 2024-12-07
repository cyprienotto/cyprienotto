const education = [
  {
    title: "Master 2 - Algorithmes & Réseaux Informatique",
    institution: "La Sorbonne Université",
    date: "Sept. 2024 - Juil. 2025",
    details: [
      "Agents Distribués, Robotique, Recherche Opérationnelle, Multi-agent.",
      "Optimisation combinatoire, Théorie des jeux, Algorithmique avancée.",
      "Cybersécurité, Cloud Native, Développement réseau et CI/CD.",
    ],
  },
  {
    title: "Master 1 - Architecte des systèmes d'informations",
    institution: "La Sorbonne Université",
    date: "Sept. 2023 - Juil. 2024",
    details: [
      "Conception et développement de systèmes d'information.",
      "Gestion des infrastructures réseau et de la virtualisation.",
      "Architecture orientée service et Event Driven Architecture.",
    ],
  },
];

const EducationSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Éducation</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{edu.title}</h3>
          <p className="text-gray-600">
            {edu.institution} - {edu.date}
          </p>
          <ul className="list-disc ml-5 text-gray-800">
            {edu.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default EducationSection;
