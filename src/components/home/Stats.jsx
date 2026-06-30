import Container from "../common/Container";

const stats = [
  { value: "4", label: "Projects" },
  { value: "2", label: "Research Projects" },
  { value: "3.91", label: "IPK" },
  { value: "2024", label: "Mahasiswa Aktif" },
];

function Stats() {
  return (
    <section className="relative z-20 pb-20">
      <Container>
        <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border-b border-white/10 p-6 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <h3 className="text-3xl font-bold text-white">{item.value}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Stats;