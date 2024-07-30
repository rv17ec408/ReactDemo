import React from "react";
import ReactLogo from "../images/React.png";
import { MainContent } from "../components/HomePage/MainContent";
const HomePage = () => {
  function Header() {
    return (
      <nav className="nav">
        <img src={ReactLogo} alt="Name" />
        <ul className="nav-list">
          <li>Pricing</li>
          <li>Contact Us</li>
          <li>About</li>
        </ul>
      </nav>
    );
  }

  function Footer() {
    return (
      <div>
        <small>@2019 Development phase</small>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <MainContent className="name"/>
      <Footer />
    </div>
  );
};

export default HomePage;
export const Head = () => <title>Home Page</title>;
