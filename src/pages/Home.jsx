import profile from "../assets/profile.png";
import bgLight from "../assets/bg-light.png";
import profile2 from "../assets/profile.JPG";
import TextType from '../components/textType/TextType';

export default function Home() {
  return (
    <section
      className="d-flex align-items-center justify-content-center"
  style={{
    backgroundImage: `url(${bgLight})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "80px 20px",
    minHeight: "100vh",
  }}
      // style={{
      //   background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      //   paddingTop: "100px",
      //   paddingBottom: "100px"
      // }}
    >
      <div className="container">
        <div className="row align-items-center g-5 justify-content-center">

          {/* TEXT CONTENT */}
          <div className="col-10 col-md-6 text-center text-md-start">
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
                fontSize: "2.5rem",
              }}
            />

            <p className="fs-5 text-muted mt-2 mx-auto mx-md-0" style={{ maxWidth: "520px" }}>
              A Frontend Developer crafting clean, modern and responsive user interfaces.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 mt-4 justify-content-center justify-content-md-start">
              <a href="#contact" className="btn btn-primary px-4 py-2 fw-semibold shadow">
                Contact Me
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="col-10 col-md-5 d-flex justify-content-center justify-content-md-end">
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
