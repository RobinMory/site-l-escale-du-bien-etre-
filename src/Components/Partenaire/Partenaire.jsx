import images from "../../assets/images";
import "./Partenaire.css"; 

const Partenaire = () => {
  return (
    <div className="partenaire-container">
      <section className="partenaire-photo-section">
        <div className="partenaire-photo-card">
          <picture>
            <source srcSet={images.phytoProduit.webp} type="image/webp" />
            <img src={images.phytoProduit.jpg} alt="Phyto Produit" className="partenaire-photo" loading="lazy" />
          </picture>
          <p className="partenaire-photo-description">
            Phytocéane propose des soins cosmétiques innovants issus des
            bienfaits des algues marines. Les produits de cette marque sont
            formulés pour revitaliser, nourrir et protéger la peau grâce aux
            propriétés exceptionnelles des ingrédients marins. Utilisés dans des
            soins de visage et de corps, ces produits allient efficacité et
            respect de la peau, pour un résultat immédiat de douceur et de
            bien-être. Idéal pour les soins relaxants, hydratants et
            revitalisants, Phytocéane offre une expérience sensorielle unique.
          </p>
        </div>
        <div className="partenaire-photo-card">
          <picture>
            <source srcSet={images.arabiaProduit.webp} type="image/webp" />
            <img src={images.arabiaProduit.jpg} alt="Arabia Produit" className="partenaire-photo" loading="lazy" />
          </picture>
          <p className="partenaire-photo-description">
            Arabia s’inspire des traditions orientales et de la richesse des
            plantes pour créer des soins de beauté profondément nourrissants et
            réparateurs. Grâce à des formules aux extraits naturels, chaque
            produit de la marque agit en profondeur pour apaiser, régénérer et
            revitaliser la peau. Idéale pour les traitements de beauté en profondeur, Arabia
            offre une expérience de soin de luxe qui respecte les rituels de
            beauté ancestraux.
          </p>
        </div>
      </section>

      <section className="partenaire-photo-section">
        <div className="partenaire-photo-card">
          <picture>
            <source srcSet={images.bioProduit.webp} type="image/webp" />
            <img src={images.bioProduit.jpg} alt="Bio Produit" className="partenaire-photo" loading="lazy" />
          </picture>
          <p className="partenaire-photo-description">
            BioBalance incarne l’essence de la beauté naturelle avec une gamme
            de soins 100% bio et écologiques. Conçus pour offrir à la peau un
            soin respectueux de l&apos;environnement, ces produits allient efficacité
            et pureté. Que ce soit pour l&apos;hydratation, la nutrition ou
            l&apos;apaisement, BioBalance utilise des ingrédients naturels et non
            irritants, parfaits pour les peaux sensibles. Idéals pour les soins
            du visage, ces produits apportent une touche de luxe
            tout en restant fidèles aux principes de l&apos;écologie et du bien-être.
          </p>
        </div>
        <div className="partenaire-photo-card">
          <picture>
            <source srcSet={images.indigoProduit.webp} type="image/webp" />
            <img src={images.indigoProduit.jpg} alt="Indigo Produit" className="partenaire-photo" loading="lazy" />
          </picture>
          <p className="partenaire-photo-description">
            Spécialisée dans le domaine de l&apos;onglerie, Indigo est la référence
            pour des ongles parfaitement soignés et sublimés. Grâce à ses
            produits innovants et à sa gamme complète de vernis semi-permanents,
            Indigo permet de créer des manucures durables
            et éclatantes. Idéal pour les esthéticiennes passionnées par les
            soins des ongles, Indigo offre une palette de produits qui s’adapte
            à toutes les envies.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Partenaire;

