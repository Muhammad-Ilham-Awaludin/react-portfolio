import { useState } from 'react';
import pkl from "../assets/pkl.png";
import bgLight from "../assets/bg-light.png";
import solid from "../assets/dicoding-solid.png";
import web from "../assets/dicoding-web.png";
import myskill from "../assets/myskill.png";
// import { Marquee } from "@/components/ui/marquee";
import { MarqueeDemo } from "@/components/MarqueeDemo";

export default function About() {

  const certificates = [
    {
      img: web,
      year: "2023",
      title: "Belajar Dasar Pemrograman Web",
      provider: "Dicoding Indonesia",
      desc:
        "Completed advanced frontend training focused on React, performance optimization, and modern best practices.",
    },
    {
      img: solid,
      year: "2024",
      title: "Belajar Prinsip Pemrograman SOLID",
      provider: "Dicoding Indonesia",
      desc:
        "Focused on building scalable UI, clean architecture, and best practices.",
    },
    {
      img: pkl,
      year: "2025",
      title: "Sertifikasi PKL",
      provider: "PT Berdhaya Gemilang Mandiri",
      desc:
        "Learned React hooks, state management, and performance optimization.",
    },
    {
      img: myskill,
      year: "2025",
      title: "Wordpress Introduction",
      provider: "MySkill",
      desc:
        "Learned React hooks, state management, and performance optimization.",
    },
  ]

  return (
    <section
      style={{
        backgroundImage: `url(${bgLight})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "80px 0",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-4 fw-bold mb-3" style={{ color: "#1e293b" }}>
              About Me
            </h2>
            <div style={{ width: "80px", height: "4px", background: "linear-gradient(to right, #3b82f6, #6366f1)", margin: "0 auto" }}></div>
          </div>
        </div>

        {/* Introduction */}
        <div className="row mb-5" id="about">
          <div className="col-lg-10 mx-auto">
            <div className="card shadow-lg border-0" style={{ borderRadius: "20px" }}>
              <div className="card-body p-5">
                <h3 className="h4 fw-bold mb-4" style={{ color: "#3b82f6" }}>
                  Hi, I'm MUHAMMAD ILHAM AWALUDIN 👋
                </h3>
                {/* <p className="lead mb-3" style={{ color: "#475569", lineHeight: "1.8" }}>
                  A passionate <strong>Frontend Developer</strong> and <strong>UI/UX Designer</strong> with expertise in creating visually stunning and user-friendly web applications. I believe in crafting digital experiences that not only look beautiful but also solve real problems.
                </p>
                <p style={{ color: "#64748b", lineHeight: "1.8" }}>
                  With a strong foundation in modern web technologies and design principles, I specialize in building responsive, accessible, and performant interfaces. My approach combines technical excellence with creative problem-solving to deliver exceptional user experiences that drive engagement and satisfaction.
                </p> */}
                <p className="lead mb-3" style={{ color: "#475569", lineHeight: "1.8" }}>
                  Seorang siswa jurusan Pengembangan Perangkat Lunak dan Gim di SMK Wikrama Bogor. Saya memiliki minat yang kuat dalam pengembangan perangkat lunak, khususnya dalam membangun aplikasi web modern. Saya fokus pada pengembangan antarmuka (frontend) yang clean, responsif, dan mudah digunakan, serta berkomitmen untuk terus belajar dan mengembangkan kemampuan teknis maupun kreativitas dalam dunia teknologi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="row mb-5" id="skills">
          <div className="col-12 mb-4">
            <h3 className="h3 fw-bold text-center" style={{ color: "#1e293b" }}>
              Technical Skills
            </h3>
          </div>

          <MarqueeDemo />

        </div>

        {/* Experience */}
        <div className="row mb-5" id="experience">
          <div className="col-12 mb-4">
            <h3 className="h3 fw-bold text-center" style={{ color: "#1e293b" }}>
              Experience
            </h3>
          </div>

          <div className="col-lg-6 mb-4">
            <div
              className="card border-0 shadow-sm h-100"
              style={{ borderRadius: "15px", borderLeft: "4px solid #3b82f6" }}
            >
              <div className="card-body p-4">
                <h5 className="fw-bold mb-2">Frontend Developer (PKL)</h5>
                <p className="text-muted mb-2">
                  <strong>PT Berdhaya Gemilang Mandiri</strong> | 2025
                </p>
                <p style={{ color: "#64748b", lineHeight: "1.7" }}>
                  Mengembangkan tampilan website responsif menggunakan HTML, CSS,
                  JavaScript, dan Laravel serta menerapkan UI yang user-friendly.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div
              className="card border-0 shadow-sm h-100"
              style={{ borderRadius: "15px", borderLeft: "4px solid #3b82f6" }}
            >
              <div className="card-body p-4">
                <h5 className="fw-bold mb-2">Frontend Developer (Kelompok)</h5>
                <p className="text-muted mb-2">
                  <strong>Project Buku Tamu</strong> | 2025
                </p>
                <p style={{ color: "#64748b", lineHeight: "1.7" }}>
                  Mengembangkan tampilan website responsif menggunakan HTML, CSS,
                  JavaScript, dan React TS serta menerapkan UI yang user-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="row" id="certificates">
          <div className="col-12 mb-4">
            <h3 className="h3 fw-bold text-center" style={{ color: "#1e293b" }}>
              Certificates & Achievements
            </h3>
          </div>

          {/* CERTIFICATE 1 */}
          {certificates.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card certificate-card h-100 border-0 shadow-lg">
                <div className="img-wrapper">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="card-img-top"
                  />
                </div>

                <div className="card-body p-4">
                  <span className="badge mb-2">{item.year}</span>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted mb-2">{item.provider}</p>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}

// function CertificateCard({ certificate }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="card border-0 shadow-lg h-100"
//       style={{
//         borderRadius: "15px",
//         overflow: "hidden",
//         backgroundColor: "#1e293b",
//         color: "white",
//         transition: "transform 0.3s, box-shadow 0.3s",
//         transform: isHovered ? "translateY(-10px)" : "translateY(0)"
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div style={{ overflow: "hidden" }}>
//         <img
//           src={certificate.image}
//           alt={certificate.title}
//           className="card-img-top"
//           style={{
//             height: "200px",
//             objectFit: "cover",
//             transition: "transform 0.3s",
//             transform: isHovered ? "scale(1.1)" : "scale(1)"
//           }}
//         />
//       </div>
//       <div className="card-body p-4">
//         <div className="mb-2">
//           <span className="badge" style={{ backgroundColor: "#3b82f6", fontSize: "0.75rem" }}>
//             {certificate.date}
//           </span>
//         </div>
//         <h5 className="card-title fw-bold mb-2">{certificate.title}</h5>
//         <p className="text-muted mb-3" style={{ fontSize: "0.9rem" }}>
//           {certificate.organization}
//         </p>
//         <p className="card-text" style={{ fontSize: "0.9rem", lineHeight: "1.6", opacity: "0.9" }}>
//           {certificate.description}
//         </p>
//       </div>
//     </div>
//   );
// }