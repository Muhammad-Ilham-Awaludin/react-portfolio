import CardNav from './navbarAnimation/CardNav'
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
          { label: "About Me", targetId: "about" },
          { label: "Skills", targetId: "skills" },
          { label: "Experience", targetId: "experience" },
          { label: "Certificates", targetId: "certificates" },
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured Projects", targetId: "projects" },
        // { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Contact", targetId: "contact" },
        { label: "Send Message", targetId: "contact" },
        // { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <div
      style={{
        position: "sticky",
        top: 20,
        zIndex: 9999,
      }}
    >
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        logoText="Ilhamawal"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
    </div>
  );
};

export default Navbar;
