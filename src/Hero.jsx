import heroImg from "./assets/hero2.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            In my portfolio, I proudly present an exceptionally innovative and
            creative project that I developed using the powerful Contentful CMS.
            This project stands out for its cutting-edge technology, unique
            design, and dynamic features, making it a highly versatile and
            impressive addition to my body of work. It has the potential to
            leave a lasting impact in the world of web development and design,
            showcasing my commitment to delivering outstanding results in every
            project I undertake.
          </p>
          ;
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
