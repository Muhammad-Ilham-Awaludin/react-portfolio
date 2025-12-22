import profile from "../assets/profile.png";
import bgLight from "../assets/bg-light.png";
import profile2 from "../assets/profile.JPG";
import TextType from '../components/textType/TextType';

export default function Home() {
  return (
    <section
      className="d-flex align-items-center justify-content-center"
      style={{
        width: "98.8vw",
        minHeight: "100vh",
        backgroundImage: `url(${bgLight})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 20px",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* TEXT CONTENT */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold text-dark">
              Hi, I'm{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #2563eb, #4f46e5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Ilhamawal
              </span>
            </h1>

            <TextType 
              text={["Frontend Developer", "Web Developer"]}
              typingSpeed={110}
              deletingSpeed={60} 
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              style={{
                color: "#3b82f6",
                fontWeight: 800,
                fontSize: "2.5rem"
              }}
            />
            {/* <h3 className="fw-semibold text-secondary mt-3">
              Frontend Developer
            </h3> */}

            <p className="fs-5 text-muted mt-2" style={{ maxWidth: "520px" }}>
              A Frontend Developer crafting clean, modern and responsive user interfaces.
            </p>

            {/* BUTTONS */}
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4 justify-content-center justify-content-md-start">
              <button className="btn btn-primary px-4 py-2 fw-semibold shadow">
                Contact Me
              </button>
              {/* <button className="btn btn-outline-primary px-4 py-2 fw-semibold">
                Contact Me
              </button> */}
            </div>
          </div>

          {/* IMAGE */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div
              style={{
                width: "330px",
                height: "330px",
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                border: "6px solid #fff",
              }}
            >
              <img
                src={profile2}
                alt="Ilhamawal"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
