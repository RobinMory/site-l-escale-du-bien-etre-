import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <h4>Contact et adresse</h4>
            <a className="disabled-link">
              <p>GSM : +32 476 17 20 08</p>
            </a>
            <a className="disabled-link">
              <p>Adresse : Rue de la chapelle 8</p>
              <p>Péronnes-lez-Antoing</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Réseaux sociaux</h4>
            <a
              href="https://www.facebook.com/havet.sandrina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Facebook</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Partenaires</h4>
            <a
              href="https://www.phytoceane.com/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Phytocéane</p>
            </a>
            <a
              href="https://arabia.lu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Arabia</p>
            </a>
            <a
              href="https://fr.districos.com/p/bio-balance-facial.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Bio Balance</p>
            </a>
            <a
              href="https://www.indigonails.be/fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Indigo</p>
            </a>
          </div>
        </div>

        <hr></hr>

        <div className="sb_footer_below">
          <div className="sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} MoryEntreprises. Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
