import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Container from "../common/Container";
import projects from "../../data/projects";

function FeaturedProjects() {
  const selectedProjects = projects.slice(0, 3);

  return (
    <section className="pb-24">
      <Container>
        <div className="mb-10 flex items-center justify-between gap-6">
          <h2 className="text-4xl font-bold text-white">Project Saya</h2>

          <Link
            to="/projects"
            className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            Lihat Semua Proyek →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {selectedProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-blue-950/30"
            >
              <h3 className="text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-blue-400">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-400">
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

export default FeaturedProjects;