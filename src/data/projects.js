import academicDoc1 from "../assets/images/projects/academic-document-archive/doc-1.png";
import academicDoc2 from "../assets/images/projects/academic-document-archive/doc-2.png";
import academicDoc3 from "../assets/images/projects/academic-document-archive/doc-3.png";

import spkDoc1 from "../assets/images/projects/spk-kredit/doc-1.png";
import spkDoc2 from "../assets/images/projects/spk-kredit/doc-2.png";
import spkDoc3 from "../assets/images/projects/spk-kredit/doc-3.png";

import mobsfDoc1 from "../assets/images/projects/mobsf-security-analysis/doc-1.png";
import mobsfDoc2 from "../assets/images/projects/mobsf-security-analysis/doc-2.png";
import mobsfDoc3 from "../assets/images/projects/mobsf-security-analysis/doc-3.png";

import shaDoc1 from "../assets/images/projects/sha256-bcrypt-analysis/doc-1.png";
import shaDoc2 from "../assets/images/projects/sha256-bcrypt-analysis/doc-2.png";
import shaDoc3 from "../assets/images/projects/sha256-bcrypt-analysis/doc-3.png";

import futuraDoc1 from "../assets/images/projects/futura-mart/doc-1.png";
import futuraDoc2 from "../assets/images/projects/futura-mart/doc-2.png";
import futuraDoc3 from "../assets/images/projects/futura-mart/doc-3.png";

import tokoDoc1 from "../assets/images/projects/toko-aneka-buana/doc-1.png";
import tokoDoc2 from "../assets/images/projects/toko-aneka-buana/doc-2.png";
import tokoDoc3 from "../assets/images/projects/toko-aneka-buana/doc-3.png";

const projects = [
  {
    id: 1,
    slug: "academic-document-archive",
    title: "Academic Document Archive",
    subtitle: "Sistem Pengarsipan Dokumen Akademik Berbasis Digital Signature",
    description:
      "Aplikasi web untuk pengarsipan dokumen akademik secara digital dengan fitur digital signature dan verifikasi dokumen untuk membantu memastikan keaslian serta integritas dokumen.",
    features: [
      "Upload dan manajemen dokumen akademik",
      "Digital signature untuk menjaga keaslian dokumen",
      "Verifikasi dokumen digital",
      "Pengelolaan arsip dokumen akademik",
    ],
    role:
      "Berkolaborasi dalam pengembangan sistem dan penyusunan penelitian terkait keamanan dokumen digital.",
    documentations: [{ image: academicDoc1 }, { image: academicDoc2 }, { image: academicDoc3 }],
  },
  {
    id: 2,
    slug: "spk-kredit",
    title: "Sistem Pendukung Keputusan Kredit",
    subtitle: "Aplikasi Web Persetujuan Kredit",
    description:
      "Aplikasi web untuk mendukung proses persetujuan kredit dengan antarmuka yang responsif dan interaktif.",
    features: [
      "Halaman input data kredit",
      "Validasi input menggunakan JavaScript",
      "Tampilan hasil keputusan secara dinamis",
      "Antarmuka responsif dan mudah digunakan",
    ],
    role:
      "Berkontribusi utama pada pengembangan antarmuka dan fungsionalitas aplikasi web.",
    documentations: [{ image: spkDoc1 }, { image: spkDoc2 }, { image: spkDoc3 }],
  },
  {
    id: 3,
    slug: "mobsf-security-analysis",
    title: "Analisis Keamanan WhatsApp & Telegram",
    subtitle: "Mobile Security Analysis Menggunakan MobSF",
    description:
      "Analisis keamanan statis aplikasi Android menggunakan MobSF berdasarkan metode NIJ dan standar OWASP MASVS.",
    features: [
      "Analisis dangerous permissions",
      "Analisis weak cryptography",
      "Analisis root detection dan SSL bypass",
      "Penyusunan laporan hasil keamanan aplikasi mobile",
    ],
    role:
      "Melakukan analisis keamanan statis dan menyusun laporan hasil analisis berdasarkan standar keamanan aplikasi mobile.",
    documentations: [{ image: mobsfDoc1 }, { image: mobsfDoc2 }, { image: mobsfDoc3 }],
  },
  {
    id: 4,
    slug: "sha256-bcrypt-analysis",
    title: "Analisis SHA-256 dan bcrypt",
    subtitle: "Keamanan Hash Kata Sandi terhadap Dictionary Attack",
    description:
      "Penelitian perbandingan algoritma hashing SHA-256 dan bcrypt terhadap dictionary attack menggunakan Python.",
    features: [
      "Simulasi pengujian menggunakan Python",
      "Pengujian waktu hashing",
      "Pengujian waktu cracking",
      "Analisis utilisasi CPU",
    ],
    role:
      "Melakukan studi literatur serta berkolaborasi dalam implementasi pengujian dan analisis hasil eksperimen.",
    documentations: [{ image: shaDoc1 }, { image: shaDoc2 }, { image: shaDoc3 }],
  },
  {
    id: 5,
    slug: "futura-mart",
    title: "Futura Mart",
    subtitle: "Aplikasi Kasir Berbasis C++",
    description:
      "Aplikasi kasir berbasis C++ dengan fitur transaksi, diskon otomatis, pembayaran, dan pencetakan struk.",
    features: [
      "Pemilihan barang",
      "Perhitungan total belanja",
      "Diskon otomatis",
      "Pencetakan struk",
    ],
    role:
      "Berkontribusi utama pada pengembangan source code aplikasi dalam tim.",
    documentations: [{ image: futuraDoc1 }, { image: futuraDoc2 }, { image: futuraDoc3 }],
  },
  {
    id: 6,
    slug: "toko-aneka-buana",
    title: "Sistem Penjualan Toko Aneka Buana",
    subtitle: "Sistem Penjualan Berbasis C++",
    description:
      "Sistem penjualan berbasis C++ menggunakan Linked List dan Queue untuk pengelolaan data dan transaksi.",
    features: [
      "Pengelolaan data barang",
      "Antrian transaksi pelanggan",
      "Pencarian dan pengurutan data",
      "Validasi input transaksi",
    ],
    role:
      "Merancang alur logika program dan berkolaborasi dalam pengembangan aplikasi bersama tim.",
    documentations: [{ image: tokoDoc1 }, { image: tokoDoc2 }, { image: tokoDoc3 }],
  },
];

export default projects;