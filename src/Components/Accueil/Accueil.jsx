import images from "../../assets/images";

import "./Accueil.css"; 

const Accueil = () => {

  return (
    <div className="accueil-container">
      <section className="photo-section">
        <div className="photo-wrapper">
          <img src={images.photo1.jpg} alt="Photo 1" className="photo" />
          <img src={images.photo5.jpg} alt="Photo 2" className="photo" />
        </div>
        <div className="photo-wrapper">
          <img src={images.photo3.jpg} alt="Photo 1" className="photo" />
          <img src={images.photo8.jpg} alt="Photo 2" className="photo" />
        </div>
      </section>
      <section className="photo-section">
        <div className="photo-wrapper">
          <img src={images.logo.jpg} alt="Photo gauche" className="photo" />
          <div className="centered-text">
            <h2 className="title-centered-text">Bienvenue à </h2>
            <h2 className="title-centered-text">L’escale du bien-être.</h2>
            <p>
            Une pause s’impose à L’Escale du Bien-Etre. Je vous
              accueille dans un cadre simple et chaleureux. Je suis heureuse de
              vous procurer détente, relaxation, beauté et vous propose des
              soins professionnels et de qualité.
            </p>
            <h2 className="title-centered-text">Heures d’ouverture : </h2>
            <p>Du lundi au vendredi de 09h00 à 18h00</p>
            <p> Fermé le mercredi</p>
            <h2 className="title-centered-text">Contact :</h2>
            <p>0479 / 17 20 08</p>
            <p>8, Rue de la chapelle 7640 Péronnes</p>
            
          </div>
          <img src={images.logo1.jpg} alt="Photo droite" className="photo" />
        </div>
      </section>

      <section className="photo-section">
        <div className="photo-wrapper">
          <img src={images.photo2.jpg} alt="Photo 1" className="photo" />
          <img src={images.photo6.jpg} alt="Photo 2" className="photo" />
        </div>
        <div className="photo-wrapper">
          <img src={images.photo7.jpg} alt="Photo 1" className="photo" />
          <img src={images.photo9.jpg} alt="Photo 2" className="photo" />
        </div>
      </section>
    </div>
  );
};

export default Accueil;