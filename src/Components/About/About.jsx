import images from "../../assets/images";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-photo-section">
        <div className="about-photo-card">
          <div className="about-photo-wrapper">
          <picture>
              <source srcSet={images.photoComptoir.webp} type="image/webp" />
              <img
                src={images.photoComptoir.jpg}
                alt="Tarifs"
                className="about-photo"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="about-text-container">
            <p>
              Bienvenue dans mon havre de beauté à Péronnes-lez-Antoing, où
              depuis 2008, je m&apos;engage avec passion à sublimer votre éclat
              naturel.
              <p>
                En tant qu&apos;esthéticienne expérimentée, je vous invite à
                découvrir une gamme complète de soins personnalisés : des
                traitements revitalisants pour le visage qui réveillent la
                jeunesse de votre peau, des manucures et le vernis
                semi-transparent qui ajoutent une touche d&apos;élégance à vos
                mains, des épilations méticuleuses pour une peau lisse et
                soyeuse ainsi que des gommages pour redonner un coup
                d&apos;éclat à votre peau et des massages dans une ambiance
                cocoon.
              </p>
              Dans mon institut, chaque détail est pensé pour vous offrir une
              expérience unique de bien-être et de beauté. Que vous souhaitiez
              vous détendre pleinement lors d&apos;un soin, je suis là pour
              répondre à vos besoins avec expertise et professionnalisme.
              <p>
                Je vous attends avec impatience pour partager ensemble le
                plaisir de prendre soin de vous.
              </p>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
