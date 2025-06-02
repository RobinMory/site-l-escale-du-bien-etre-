import { Outlet } from "react-router-dom";
//import  { useEffect } from 'react';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function Hub() {

  /*
  useEffect(() => {
    // Empêcher la rotation d'écran sur mobile
    const handleOrientationChange = (event) => {
      if (window.orientation === 90 || window.orientation === -90) {
        alert("La rotation est désactivée pour cette application.");
        window.scrollTo(0, 0); // Optionnel, pour revenir en haut de la page
      }
    };

    // Ajoute un écouteur d'événements pour la rotation de l'écran
    window.addEventListener("orientationchange", handleOrientationChange);

    // Nettoyage de l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);  // Le tableau vide [] signifie que l'effet ne se déclenche qu'une fois au montage
  */

  return (
    <div
      style={{display: "flex",flexDirection: "column",minHeight: "100vh",
      }}
    >
      <NavBar />
      <div
        style={{flex: 1,display: "flex",flexDirection: "column",height: "auto",padding: "20px",
        }}
      >
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Hub;
