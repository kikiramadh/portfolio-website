import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Container from "../components/common/Container";
import projects from "../data/projects";

function Projects() {
  return (
    <section className="min-h-screen bg-[#08111F] pt-36 pb-24 animate-fade-up">
      <Container>
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">Proyek Saya</h1>
          <div className="mt-4 h-1 w-12 rounded-full bg-blue-500" />
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.06]"
            >
              <h2 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                {project.title}
              </h2>

              <div className="flex items-center gap-2 text-sm font-semibold text-blue-400">
                Lihat Detail
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;