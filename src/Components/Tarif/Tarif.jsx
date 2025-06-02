import images from "../../assets/images";
import "./Tarif.css";

const Tarif = () => {
  return (
    <div className="tarif-container">
      <picture>
        <source srcSet={images.tarif.webp} type="image/webp" />
        <img
          src={images.tarif.jpg}
          alt="Tarifs"
          className="tarif-image"
          loading="lazy"
        />
      </picture>

      <section className="info-tarif-box">
        <h2 className="info-tarif-title">
          Possibilité de se procurer des bons cadeaux (valable 6 mois)
        </h2>
      </section>
    </div>
  );
};

export default Tarif;
