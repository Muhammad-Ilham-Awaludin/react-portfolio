import React from "react";

export default function Projects() {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "100px"
      }}
    >
      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-5 pb-4">
          <h2 className="display-3 fw-bold mb-3" style={{ color: "#1e293b" }}>
            Featured Projects
          </h2>
          <div
            className="mx-auto mb-3"
            style={{
              width: "100px",
              height: "4px",
              background: "linear-gradient(to right, #3b82f6, #6366f1)",
              borderRadius: "2px"
            }}
          />
          <p style={{ color: "#64748b", fontSize: "1.15rem" }}>
            Some of my recent work and creative solutions
          </p>
        </div>

        {/* PROJECT 1 */}
        <div className="row align-items-center mb-5 pb-5">
          <div className="col-md-6 mb-4 mb-md-0 pe-md-5">
            <h3 className="fw-bold mb-4" style={{ fontSize: "2rem", color: "#1e293b" }}>
              Portfolio Website
            </h3>
            <p className="mb-4" style={{ color: "#64748b", fontSize: "1.05rem", lineHeight: "1.8" }}>
              A personal portfolio website showcasing my projects, skills, and
              experience with responsive design and clean UI.
            </p>

            <ul className="list-unstyled mb-4">
              <div className="row">
                <div className="col-6 mb-2">
                  <li style={{ color: "#475569", fontSize: "1rem" }}>
                    <span style={{ color: "#10b981", marginRight: "10px", fontSize: "1.2rem" }}>✓</span>
                    React.js
                  </li>
                </div>

                <div className="col-6 mb-2">
                  <li style={{ color: "#475569", fontSize: "1rem" }}>
                    <span style={{ color: "#10b981", marginRight: "10px", fontSize: "1.2rem" }}>✓</span>
                    Bootstrap 5
                  </li>
                </div>

                <div className="col-6 mb-2">
                  <li style={{ color: "#475569", fontSize: "1rem" }}>
                    <span style={{ color: "#10b981", marginRight: "10px", fontSize: "1.2rem" }}>✓</span>
                    Responsive Design
                  </li>
                </div>

                <div className="col-6 mb-2">
                  <li style={{ color: "#475569", fontSize: "1rem" }}>
                    <span style={{ color: "#10b981", marginRight: "10px", fontSize: "1.2rem" }}>✓</span>
                    Clean UI / UX
                  </li>
                </div>
              </div>
            </ul>

            <div className="d-flex gap-3">
              <a 
                href="#" 
                className="btn px-4 py-2"
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "600",
                  boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                  transition: "all 0.3s ease"
                }}
              >
                Live Demo
              </a>
              <a 
                href="#" 
                className="btn px-4 py-2"
                style={{
                  background: "white",
                  color: "#3b82f6",
                  border: "2px solid #3b82f6",
                  borderRadius: "10px",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}
              >
                Source Code
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.3s ease"
            }}>
              <img
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800"
                alt="Portfolio Project"
                className="img-fluid"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="row align-items-center mb-5 pb-5 flex-md-row-reverse">
          <div className="col-md-6 mb-4 mb-md-0 ps-md-5">
            <h3 className="fw-bold mb-4" style={{ fontSize: "2rem", color: "#1e293b" }}>
              E-Commerce Platform
            </h3>
            <p className="mb-4" style={{ color: "#64748b", fontSize: "1.05rem", lineHeight: "1.8" }}>
              A full-featured e-commerce platform with payment integration,
              admin dashboard, and optimized performance.
            </p>

            <ul className="list-unstyled mb-4">
              <div className="row">
                <div className="col-6 mb-2">
                  <li style={{ color: "#475569", fontSize: "1rem" }}>
                    <span style={{ color: "#10b981", marginRight: "10px", fontSize: "1.2rem" }}>✓</span>
                    React.js
                  </li>
                </div>

                <div className="col-6 mb-2">
                  <li style={{ color: "#475569", fontSize: "1rem" }}>
                    <span style={{ color: "#10b981", marginRight: "10px", fontSize: "1.2rem" }}>✓</span>
                    Bootstrap 5
                  </li>
                </div>

                <div className="col-6 mb-2">
                  <li style={{ color: "#475569", fontSize: "1rem" }}>
                    <span style={{ color: "#10b981", marginRight: "10px", fontSize: "1.2rem" }}>✓</span>
                    Responsive Design
                  </li>
                </div>

                <div className="col-6 mb-2">
                  <li style={{ color: "#475569", fontSize: "1rem" }}>
                    <span style={{ color: "#10b981", marginRight: "10px", fontSize: "1.2rem" }}>✓</span>
                    Clean UI / UX
                  </li>
                </div>
              </div>
            </ul>

            <div className="d-flex gap-3">
              <a 
                href="#" 
                className="btn px-4 py-2"
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "600",
                  boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                  transition: "all 0.3s ease"
                }}
              >
                Live Demo
              </a>
              <a 
                href="#" 
                className="btn px-4 py-2"
                style={{
                  background: "white",
                  color: "#3b82f6",
                  border: "2px solid #3b82f6",
                  borderRadius: "10px",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}
              >
                Source Code
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.3s ease"
            }}>
              <img
                src="https://images.unsplash.com/photo-1557821552-17105176677c?w=800"
                alt="E-Commerce Project"
                className="img-fluid"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 pe-md-5">
            <h3 className="fw-bold mb-4" style={{ fontSize: "2rem", color: "#1e293b" }}>
              Task Management App
            </h3>
            <p className="mb-4" style={{ color: "#64748b", fontSize: "1.05rem", lineHeight: "1.8" }}>
              A collaborative task management app with real-time updates,
              drag-and-drop interface, and team collaboration.
            </p>

            <ul className="list-unstyled mb-4">
              <div className="row">
                <div className="col-6 mb-2">
                  <li style={{ color: "#475569", fontSize: "1rem" }}>
                    <span style={{ color: "#10b981", marginRight: "10px", fontSize: "1.2rem" }}>✓</span>
                    React.js
                  </li>
                </div>

                <div className="col-6 mb-2">
                  <li style={{ color: "#475569", fontSize: "1rem" }}>
                    <span style={{ color: "#10b981", marginRight: "10px", fontSize: "1.2rem" }}>✓</span>
                    Bootstrap 5
                  </li>
                </div>

                <div className="col-6 mb-2">
                  <li style={{ color: "#475569", fontSize: "1rem" }}>
                    <span style={{ color: "#10b981", marginRight: "10px", fontSize: "1.2rem" }}>✓</span>
                    Responsive Design
                  </li>
                </div>

                <div className="col-6 mb-2">
                  <li style={{ color: "#475569", fontSize: "1rem" }}>
                    <span style={{ color: "#10b981", marginRight: "10px", fontSize: "1.2rem" }}>✓</span>
                    Clean UI / UX
                  </li>
                </div>
              </div>
            </ul>

            <div className="d-flex gap-3">
              <a 
                href="#" 
                className="btn px-4 py-2"
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "600",
                  boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                  transition: "all 0.3s ease"
                }}
              >
                Live Demo
              </a>
              <a 
                href="#" 
                className="btn px-4 py-2"
                style={{
                  background: "white",
                  color: "#3b82f6",
                  border: "2px solid #3b82f6",
                  borderRadius: "10px",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}
              >
                Source Code
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.3s ease"
            }}>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
                alt="Task Management Project"
                className="img-fluid"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}