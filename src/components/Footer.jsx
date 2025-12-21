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
              UI/UX Designer & Web Developer.
            </p>
            <p className="text-secondary small">
              I design and build stunning websites that prioritize user
              experience.
            </p>
          </div>

          {/* ABOUT */}
          <div className="col-lg-2 col-md-4">
            <h6 className="text-white fw-semibold mb-3">About</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Case Studies
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
                  Practices
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-lg-2 col-md-4">
            <h6 className="text-white fw-semibold mb-3">Contact</h6>
            <ul className="list-unstyled text-secondary small">
              <li className="mb-2">
                Email: erickson.reign@gmail.com
              </li>
              <li>
                Twitter: @ilhamawal
              </li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div className="col-lg-2">
            <h6 className="text-white fw-semibold mb-3">Socials</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  2 Poster
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
          © 2024 Ilhamawal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
