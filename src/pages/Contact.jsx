import bgLight from "../assets/bg-light.png";
import bgDark from "../assets/bg-dark.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-5"
      style={{
        minHeight: "100vh",
        // background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        backgroundImage: `url(${bgLight})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container py-5">
        <div className="row g-4 align-items-stretch">

          {/* LEFT CARD - Contact Info */}
          <div className="col-lg-5">
            <div
              className="p-4 rounded-4 text-white shadow-lg h-100"
              style={{
                // background: "rgba(15, 23, 42, 0.85)",
                backgroundImage: `url(${bgDark})`,
                backgroundSize: "cover",
                backdropFilter: "blur(10px)"
              }}
            >
              <h2 className="fw-bold mb-1" style={{ fontSize: "2rem" }}>
                Contact
              </h2>
              <p className="text-secondary mb-4" style={{ fontSize: "1.1rem" }}>
                Let's get in touch
              </p>

              {/* Email */}
              <div className="d-flex align-items-start gap-3 mb-3 align-items-center">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(59, 130, 246, 0.25)"
                  }}
                >
                  {/* <span style={{ fontSize: "1.2rem" }}>✉</span> */}
                  <a href="#" style={{ fontSize: "20px" }}><i className="fa-solid fa-envelope" style={{ color: "#fff" }}></i></a>
                </div>
                <div>
                  <small className="text-secondary d-block mb-1">Email</small>
                  <p className="mb-0">ilhamawal30@gmail.com</p>
                </div>
              </div>

              {/* Twitter/Nother */}
              <div className="d-flex align-items-start gap-3 mb-3 align-items-center">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(59, 130, 246, 0.25)"
                  }}
                >
                  {/* <span style={{ fontSize: "1.2rem" }}></span> */}
                  <a href="#" style={{ fontSize: "20px" }}><i className="fa-brands fa-instagram" style={{ color: "#fff" }}></i></a>
                </div>
                <div>
                  <small className="text-secondary d-block mb-1">Instagram</small>
                  <p className="mb-0">ilham4wal</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="d-flex align-items-start gap-3 mb-3 align-items-center">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(59, 130, 246, 0.25)"
                  }}
                >
                  {/* <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>in</span> */}
                  <a href="#" style={{ fontSize: "20px" }}><i className="fa-brands fa-linkedin" style={{ color: "#fff" }}></i></a>
                </div>
                <div>
                  <small className="text-secondary d-block mb-1">Linksdin</small>
                  <p className="mb-0">MUHAMMAD ILHAM AWALUDIN</p>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-light opacity-25 my-4" />

              {/* Socials */}
              <div>
                <small className="text-secondary d-block mb-3">Socials</small>
                <div className="d-flex gap-3">
                  <a 
                    href="#"
                    className="rounded-3 d-flex align-items-center justify-content-center text-decoration-none text-white"
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "rgba(59, 130, 246, 0.25)"
                    }}
                  >
                    {/* <a href="#" style={{ fontSize: "20px" }}> */}
                      <i className="fa-brands fa-instagram" style={{ color: "#fff" }}></i>
                    {/* </a> */}
                  </a>
                  <a 
                    href="#"
                    className="rounded-3 d-flex align-items-center justify-content-center text-decoration-none text-white"
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "rgba(59, 130, 246, 0.25)"
                    }}
                  >
                    {/* <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>in</span> */}
                    {/* <a href="#" style={{ fontSize: "20px" }}> */}
                      <i className="fa-brands fa-linkedin" style={{ color: "#fff" }}></i>
                    {/* </a> */}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD - Contact Form */}
          <div className="col-lg-7">
            <div
              className="p-4 p-md-5 rounded-4 text-white shadow-lg h-100"
              style={{
                // background: "rgba(15, 23, 42, 0.85)",
                backgroundImage: `url(${bgDark})`,
                backgroundSize: "cover",
                backdropFilter: "blur(10px)"
              }}
            >
              <h3 className="fw-bold mb-4" style={{ fontSize: "1.75rem" }}>
                Send Me a Message
              </h3>

              {/* Name Input */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Your Name"
                  style={{
                    background: "rgba(51, 65, 85, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "white"
                  }}
                />
              </div>

              {/* Email Input */}
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Your Email"
                  style={{
                    background: "rgba(51, 65, 85, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "white"
                  }}
                />
              </div>

              {/* Subject Textarea */}
              <div className="mb-4">
                <textarea
                  rows="4"
                  className="form-control form-control-lg"
                  placeholder="Subject"
                  style={{
                    background: "rgba(51, 65, 85, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "white",
                    resize: "none"
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                className="btn btn-primary btn-lg px-4 fw-semibold"
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                  border: "none",
                  boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)"
                }}
              >
                Send Message →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}