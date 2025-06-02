import images from "../../assets/images";
import "./Info.css";

const Info = () => {
  return (
    <div className="info-container">
      <picture>
        <source srcSet={images.logoPhyto.webp} type="image/webp" />
        <img
          src={images.logoPhyto.jpg}
          alt="Tarifs"
          className="partenaire-photo"
          loading="lazy"
        />
      </picture>
      <h3 className="category-subtitle">Soin Visage</h3>
      <section className="info-box">
        <h2 className="info-title">Sublime éclat: soin nettoyant</h2>
        <h4 className="info-subtitle">TOUS TYPES DE PEAUX – 45 MIN</h4>
        <p className="info-text">
          Un nettoyage de la peau en profondeur pour un effet bonne mine
          immédiat.
        </p>
      </section>

      <section className="info-box">
        <h2 className="info-title">Précision regard: soin contour des yeux</h2>
        <p className="info-text">
          Un soin pour estomper les signes de l’âge, les cernes et les poches
          grâce à une huile relaxante et un masque frais. Le regard révèle tout
          son éclat et semble comme rajeuni. Peut être intégré dans un soin
          visage.
        </p>
      </section>

      <section className="info-box">
        <h2 className="info-title">Embruns désaltérants: soin hydratant</h2>
        <h4 className="info-subtitle">
          PEAUX DÉSHYDRATÉES ET/OU SÈCHES – 1H00
        </h4>
        <p className="info-text">
          Une cascade d’actifs marins ultra-hydratants gorge votre peau pour lui
          apporter instantanément confort et éclat. La souplesse et la douceur
          de la peau sont restaurées durablement.
        </p>
      </section>

      <section className="info-box">
        <h2 className="info-title">Douceur océane: soin apaisant</h2>
        <h4 className="info-subtitle">
          PEAUX SENSIBLES ET ROUGEURS DIFFUSES – 1H00
        </h4>
        <p className="info-text">
          Etonnant de délicatesse et de fraîcheur, ce soin combine des effets
          apaisants et désensibilisants pour un effet immédiat de douceur et de
          confort.
        </p>
      </section>

      <section className="info-box">
        <h2 className="info-title">Voile de pureté: soin purifiant</h2>
        <h4 className="info-subtitle">
          PEAUX MIXTES, GRASSES, À PROBLÈMES, ASPHYXIÉES – 1H00
        </h4>
        <p className="info-text">
          Ce soin assainit et rééquilibre l’épiderme. Les luisances et petites
          imperfections cutanées disparaissent, votre grain de peau est affiné.
          Le teint retrouve sa luminosité naturelle.
        </p>
      </section>

      <section className="info-box">
        <h2 className="info-title">
          Soin jeunesse: soin rides – fermeté – éclat
        </h2>
        <h4 className="info-subtitle">TOUTES PEAUX – 1H</h4>
        <p className="info-text">
          Ce soin permet d’estomper les rides, de booster la fermeté et de
          donner un coup d’éclat immédiat à votre peau. Résultat : la peau est +
          lisse, le visage comme resculpté et le teint + frais !
        </p>
      </section>

      <section className="info-box">
        <h2 className="info-title">
          Profond anti-âge de luxe: soin jeunesse absolu
        </h2>
        <h4 className="info-subtitle">TOUTES PEAUX – 1H30</h4>
        <p className="info-text">
          Ce soin permet de révéler la jeunesse du visage, donne un effet de
          tenseur, votre peau est lisse et tonifiée, votre grain de peau est
          plus uniforme.
        </p>
      </section>

      <h3 className="category-subtitle">Soin Corps</h3>

      <section className="info-box">
        <h2 className="info-title">
          Secret de velours ( Phytocéane ): soin exfoliant
        </h2>
        <h4 className="info-subtitle">TOUS TYPES DE PEAUX – 45 MIN.</h4>
        <p className="info-text">
          La combinaison d’un gommage et d’un massage permet d’éliminer en
          douceur les cellules mortes et redonne souplesse et velouté à votre
          peau.
        </p>
      </section>

      <section className="info-box">
        <h2 className="info-title">
          L’escapade océane ( Phytocéane ): soin exfoliant et relaxant
        </h2>
        <h4 className="info-subtitle">SOIN EXFOLIANT ET RELAXANT – 1H00</h4>
        <p className="info-text">
          Exfoliation au sable de Bora-Bora, modelage relaxant au Safran
          d’Océanie, parfums d’exotisme…ce soin vous offre un résultat beauté
          immédiat. Hydratée, votre peau retrouve sa douceur et son éclat !
        </p>
      </section>

      <section className="info-box">
        <h2 className="info-title">Destination Zanzibar</h2>
        <h4 className="info-subtitle">SOIN EXFOLIANT ET RELAXANT – 1H00</h4>
        <p className="info-text">
          Gommage et massage corps relaxant à l&apos;huile vierge de coco.
        </p>
      </section>

      <picture>
        <source srcSet={images.logoArabia.webp} type="image/webp" />
        <img
          src={images.logoArabia.jpg}
          alt="Tarifs"
          className="partenaire-photo"
          loading="lazy"
        />
      </picture>

      <section className="info-box">
        <h2 className="info-title">Le gommage aux senteurs orientales </h2>
        <h4 className="info-subtitle">40Min.</h4>
        <p className="info-text">
          Gommage profond au mélange de sucre, huile et sel de la mer morte.
          Dans ce soin, la peau sera nettoyée en profondeur par un gommage au
          sucre de canne. Senteurs disponible pour les gommages : rose, bambou,
          fleur d’oranger et jasmin d’Arabie, etc.
        </p>
      </section>

      <section className="info-box">
        <h2 className="info-title">Le massage Oriental relaxant</h2>
        <h4 className="info-subtitle">50Min.</h4>
        <p className="info-text">
          Le massage Oriental vise essentiellement à apporter une détente
          musculaire pour apporter un réel mieux-être général. Une invitation au
          ressourcement du corps, de l’esprit et des sens.
        </p>
      </section>

      <section className="info-box">
        <h2 className="info-title">Effluves polynésienne</h2>
        <p className="info-text">
          Gommage et massage relaxant à l&apos;huile de papaye, frangipanier,...
        </p>
      </section>

      <section className="info-box">
        <h2 className="info-title">Le massage aux pierres chaudes</h2>
        <h4 className="info-subtitle">50Min.</h4>
        <p className="info-text">
          Il soulage les douleurs musculaires et dénoue les tensions. Ce qu’il
          offre de plus est la chaleur qui émane des pierres, car elle améliore
          la circulation sanguine et atténue les douleurs. Les huiles
          essentielles sont utilisées pour une parfaite relaxation.
        </p>
      </section>

      <section className="info-box">
        <h2 className="info-title">Le massage à la bougie</h2>
        <h4 className="info-subtitle">50Min.</h4>
        <p className="info-text">
          Le massage de la bougie est une technique ancestrale à des fins
          relaxantes, dynamisantes, stimulantes et calmantes. Ce sont des
          bougies spécifiques naturelles possédant un point de fusion très bas
          afin de permettre une liquéfaction rapide sans aucun risque de
          brûlures. L’huile de massage va vous procurer un massage doux et
          hydratant au contact de la peau.
        </p>
      </section>

      <section className="info-box">
        <h2 className="info-title">L’enveloppement au beurre de karité</h2>
        <h4 className="info-subtitle">1H.</h4>
        <p className="info-text">
          Le soin nourrissant et restructurant au pur beurre de karité. Après un
          nettoyage profond par un gommage pour permettre une meilleure
          pénétration, cet enveloppement au beurre nourrira les peaux les plus
          sèches tout en leur redonnant une élasticité qui préviendra les signes
          de l’âge.
        </p>
      </section>

      <picture>
        <source srcSet={images.logoIndigo.webp} type="image/webp" />
        <img
          src={images.logoIndigo.jpg}
          alt="Tarifs"
          className="partenaire-photo"
          loading="lazy"
        />
      </picture>

      <section className="info-box">
        <h2 className="info-title">Manucure express</h2>
        <p className="info-text">
          La manucure express consiste à la coupe et le limage des ongles, le
          soin des cuticules ainsi que le massage des mains et pour finir avec
          un vernis durcisseur.
        </p>
      </section>

      <section className="info-box">
        <h2 className="info-title">Manucure Wellness</h2>
        <p className="info-text">
          La manucure welness consiste à un gommage des mains, la coupe et le
          limage des ongles, le soin des cuticules, un masque et un massage des
          mains et pour finir avec un vernis durcisseur.
        </p>
      </section>

      <section className="info-box">
        <h2 className="info-title">Le vernis semi-permanent</h2>
        <p className="info-text">
          Le vernis semi permanent consiste à 4 couches de vernis sur des ongles
          naturels pour une qualité sur la longue durée.
        </p>
      </section>
    </div>
  );
};

export default Info;
