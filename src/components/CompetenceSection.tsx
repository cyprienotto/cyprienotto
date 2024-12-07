const skills = [
  {
    category: "Langages",
    items: ["JavaScript", "TypeScript", "Python", "Rust"],
  },
  { category: "Outils", items: ["Docker", "Kubernetes", "Jenkins", "Git"] },
  { category: "Bases de données", items: ["PostgreSQL", "MongoDB", "Redis"] },
];

const CompetenceSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Compétences</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="font-semibold">{skill.category}</h3>
            <ul className="list-disc ml-5">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompetenceSection;
