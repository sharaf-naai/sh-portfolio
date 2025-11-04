import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <a href="#hero" className="logo">
          Sharaf E.
        </a>
        </div>
        <div className="socials">
          {/* {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))} */}
          <div className="icon">
            <a href="https://www.linkedin.com/in/charaf-eddine-naai-3970b4219" target="_blank"><img src="/images/linkedin.png"/></a>
          </div>
          <div className="icon">
            <img src="/images/fb.png"/>
          </div>
          <div className="icon">
            <img src="/images/insta.png"/>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Sharaf E. Naai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
