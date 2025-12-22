import bgDark from "../assets/bg-dark.png";
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer
      className="pt-5"
      style={{
        backgroundImage: `url(${bgDark})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div
        className="container py-5 rounded-4"
        style={{
          background: "rgba(15, 23, 42, 0.85)",
          backdropFilter: "blur(10px)"
        }}
      >
        <div className="row gy-4">

          {/* BRAND */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img src={logo} alt="Logo" width="40" height="40" style={{ borderRadius: "50%" }}/>
              <h5 className="mb-0 fw-bold text-white">Ilhamawal</h5>
            </div>

            <p className="text-secondary mb-2">
              Frontend Developer.
            </p>
            <p className="text-secondary small">
              A Frontend Developer crafting clean, modern and responsive user interfaces.
            </p>
          </div>

          {/* ABOUT */}
          <div className="col-lg-2 col-md-4">
            <h6 className="text-white fw-semibold mb-3">About</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  About Me
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Experience
                </a>
              </li>
            </ul>
          </div>

          {/* PROJECTS */}
          <div className="col-lg-2 col-md-4">
            <h6 className="text-white fw-semibold mb-3">Projects</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Featured Projects
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Case Studies
                </a>
              </li> */}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-lg-2 col-md-4">
            <h6 className="text-white fw-semibold mb-3">Contact</h6>
            <ul className="list-unstyled text-secondary small">
              <li className="mb-2">
                Email: ilhamawal30@gmail.com
              </li>
              <li>
                Phone Number: 085715823600
              </li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div className="col-lg-2">
            <h6 className="text-white fw-semibold mb-3">Socials</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <hr className="border-light opacity-25 my-4" />

        <p className="text-center text-secondary small mb-0">
          © 2025 MUHAMMAD ILHAM AWALUDIN. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
