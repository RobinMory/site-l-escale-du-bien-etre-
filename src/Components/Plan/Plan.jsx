import images from "../../assets/images";

import "./Plan.css";

const Plan = () => {
  return (
    <div className="accueil-container">
      <section className="photo-section">
        <div className="photo-card">
          <section className="adresse">
            <p>Rue de la chapelle 8</p>
            <p>Péronnes-lez-Antoing</p>
          </section>
          <div className="photo-wrapper">
            <picture>
              <source srcSet={images.plan.webp} type="image/webp" />
              <img
                src={images.plan.jpg}
                alt="Tarifs"
                className="image"
                loading="lazy"
              />
            </picture>
            <picture>
              <source srcSet={images.plan2.webp} type="image/webp" />
              <img
                src={images.plan2.jpg}
                alt="Tarifs"
                className="image"
                loading="lazy"
              />
            </picture>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plan;

/*

*/
