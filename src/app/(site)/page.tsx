import { NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/Layout";
import ExperienceSection from "@/components/ExperienceSection";
import CompetenceSection from "@/components/CompetenceSection";
import EducationSection from "@/components/EducationSection";
import InterestsAndLanguages from "@/components/InterestsAndLanguages";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>OTTO Cyprien - Développeur Full-Stack</title>
        <meta
          name="description"
          content="CV de OTTO Cyprien, Développeur Full-Stack et DevOps."
        />
      </Head>
      <main className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-center">OTTO Cyprien</h1>
          <p className="text-center text-gray-500">
            Stage de fin d’étude - Master 2
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="mailto:cyprienotto@outlook.fr" className="underline">
              Email
            </a>
            <a
              href="https://github.com/ottodpc"
              target="_blank"
              className="underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ottodpc"
              target="_blank"
              className="underline"
            >
              LinkedIn
            </a>
          </div>
        </header>
        <ExperienceSection />
        <CompetenceSection />
        <EducationSection />
        <InterestsAndLanguages />
      </main>
    </Layout>
  );
};

export default Home;
