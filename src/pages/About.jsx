import { Calendar, GraduationCap, Medal, UserRound } from "lucide-react";

const profileInfo = [
  {
    icon: GraduationCap,
    label: "Pendidikan",
    title: "S1 Informatika",
    description: 'UPN "Veteran" Jakarta',
  },
  {
    icon: Calendar,
    label: "Tahun Masuk",
    title: "2024",
    description: "",
  },
  {
    icon: Medal,
    label: "IPK",
    title: "3,91",
    description: "",
  },
  {
    icon: UserRound,
    label: "Status",
    title: "Mahasiswa Aktif",
    description: "",
  },
];

const focusItems = ["Web Development", "Mobile Development", "Cybersecurity"];

const skills = [
  {
    title: "Bahasa Pemrograman",
    items: ["C++", "Java", "JavaScript", "Python", "PHP"],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "Laravel"],
  },
  {
    title: "Tools",
    items: ["GitHub", "Visual Studio Code", "Figma"],
  },
];

function About() {
  return (
    <section className="min-h-screen bg-[#08111F] px-6 pt-48 pb-24 lg:px-20 animate-fade-up">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <h1 className="text-4xl font-bold text-white">Tentang Saya</h1>
            <div className="mt-4 h-1 w-12 rounded-full bg-blue-500" />

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-300">
              Saya adalah mahasiswa aktif Program Studi Informatika di
              Universitas Pembangunan Nasional “Veteran” Jakarta. Saya memiliki
              ketertarikan dalam bidang pengembangan perangkat lunak dan
              keamanan siber. Melalui berbagai proyek akademik, saya telah
              mempelajari banyak teknologi dan berusaha menerapkannya untuk
              menyelesaikan masalah nyata.
            </p>

            <div className="mt-10 space-y-6">
              {profileInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-400">
                      <Icon size={22} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-blue-400">
                        {item.label}
                      </p>
                      <h3 className="mt-1 text-base font-bold text-white">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="mt-1 text-sm text-slate-400">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
              <h2 className="text-2xl font-bold text-white">Fokus</h2>
              <div className="mt-4 h-1 w-10 rounded-full bg-blue-500" />

              <ul className="mt-7 space-y-4 text-slate-300">
                {focusItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
              <h2 className="text-2xl font-bold text-white">Keahlian</h2>
              <div className="mt-4 h-1 w-10 rounded-full bg-blue-500" />

              <div className="mt-8 grid gap-8 md:grid-cols-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill.title}
                    className={
                      index !== skills.length - 1
                        ? "md:border-r md:border-white/10 md:pr-6"
                        : ""
                    }
                  >
                    <h3 className="text-sm font-semibold text-blue-400">
                      {skill.title}
                    </h3>

                    <ul className="mt-5 space-y-3 text-sm text-slate-300">
                      {skill.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;