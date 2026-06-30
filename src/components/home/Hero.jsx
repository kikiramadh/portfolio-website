import { FileText, Briefcase } from "lucide-react";

import Button from "../common/Button";
import Container from "../common/Container";
import heroImage from "../../assets/images/profile/hero.png";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#08111F] pt-28 pb-16">
      <Container>
        <div className="relative z-10 grid min-h-[78vh] items-center gap-12 lg:grid-cols-2 animate-fade-up">
          <div>
            <p className="mb-5 text-sm font-semibold tracking-[0.35em] text-blue-400">
              INFORMATICS STUDENT
            </p>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
              Muhammad Rizky
              <br />
              <span className="text-blue-500">Ramadhan</span>
            </h1>

            <h2 className="mt-5 text-xl font-semibold text-blue-400 md:text-2xl">
              Ringkasan Singkat
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              Mahasiswa Informatika UPN "Veteran" Jakarta yang memiliki minat
              pada pengembangan web dan keamanan siber. Saya senang membangun
              aplikasi yang fungsional, rapi, dan bermanfaat serta terus
              mengembangkan kemampuan melalui berbagai proyek akademik dan riset
              teknologi.
            </p>

            <div className="mt-8 grid gap-4 sm:flex sm:flex-wrap">
              <Button
                href="/CV_Muhammad_Rizky_Ramadhan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <span className="flex items-center gap-2">
                  <FileText size={18} />
                  Lihat CV
                </span>
              </Button>

              <Button
                href="https://www.linkedin.com/in/muhammad-rizky-ramadh"
                variant="outline"
              >
                <span className="flex items-center gap-2">
                  <Briefcase size={18} />
                  LinkedIn
                </span>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute h-[430px] w-[430px] rounded-full bg-blue-600/10 blur-3xl animate-glow-pulse" />
            <div className="absolute h-[320px] w-[320px] rounded-full border border-blue-500/10" />
            <div className="absolute h-[430px] w-[430px] rounded-full border border-blue-500/5" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-blue-950/30 animate-float-soft">
              <img
                src={heroImage}
                alt="Muhammad Rizky Ramadhan"
                className="h-[430px] w-[350px] rounded-[1.5rem] object-cover object-top md:h-[500px] md:w-[400px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;