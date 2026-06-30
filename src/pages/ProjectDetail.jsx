import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Container from "../components/common/Container";
import projects from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen bg-[#08111F] pt-32 pb-24">
        <Container>
          <h1 className="text-3xl font-bold text-white">
            Project tidak ditemukan
          </h1>

          <Link
            to="/projects"
            className="mt-6 inline-block text-blue-400 hover:text-blue-300"
          >
            Kembali ke Projects
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#08111F] pt-32 pb-24 animate-fade-up">
      <Container>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
        >
          <ArrowLeft size={16} />
          Kembali ke Projects
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-4 text-lg text-blue-400 md:text-xl">
              {project.subtitle}
            </p>

            <p className="mt-10 leading-8 text-slate-300 md:leading-9">
              {project.description}
            </p>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white">Fitur Utama</h2>

              <ol className="mt-6 space-y-5 list-decimal list-inside text-slate-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ol>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white">Peran Saya</h2>

              <p className="mt-5 leading-8 text-slate-300 md:leading-9">
                {project.role}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Dokumentasi</h2>

            <div className="mt-8 space-y-6">
              {project.documentations?.length ? (
                project.documentations.map((documentation, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-950/30"
                  >
                    <img
                      src={documentation.image}
                      alt={`Dokumentasi ${index + 1}`}
                      className="w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                ))
              ) : (
                [1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex h-64 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-500"
                  >
                    Dokumentasi {item}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectDetail;