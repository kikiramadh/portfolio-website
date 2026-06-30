import { Mail, Phone, Link2 } from "lucide-react";

function Contact() {
  return (
    <section className="min-h-screen bg-[#08111F] px-6 pt-36 pb-24 animate-fade-up">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-white">Kontak Saya</h1>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-blue-500" />

        <p className="mx-auto mt-6 max-w-xl leading-7 text-slate-400">
          Tertarik untuk bekerja sama atau memiliki pertanyaan? Silakan hubungi
          saya melalui informasi berikut.
        </p>

        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-left">
          <div className="space-y-6">
            <div className="flex items-center gap-5 border-b border-white/10 pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Mail size={22} />
              </div>

              <div>
                <h2 className="font-bold text-white">Email</h2>
                <p className="mt-1 text-sm text-slate-400">
                  kikiramadhan2309@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 border-b border-white/10 pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Phone size={22} />
              </div>

              <div>
                <h2 className="font-bold text-white">No. Telepon</h2>
                <p className="mt-1 text-sm text-slate-400">085182596162</p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/muhammad-rizky-ramadh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 transition-all duration-300 hover:text-blue-400"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Link2 size={22} />
              </div>

              <div>
                <h2 className="font-bold text-white">LinkedIn</h2>
                <p className="mt-1 text-sm text-slate-400">
                  linkedin.com/in/muhammad-rizky-ramadh
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;