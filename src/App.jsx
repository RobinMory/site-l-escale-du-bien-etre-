import Accueil from "./Components/Accueil/Accueil";
import Tarif from "./Components/Tarif/Tarif";
import Hub from "./Components/Hub/Hub";
import Partenaire from "./Components/Partenaire/Partenaire";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import Plan from "./Components/Plan/Plan";
import About from "./Components/About/About";
import Info from "./Components/Info/Info";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hub />, // Hub comme layout parent
    errorElement: <NotFoundPage />,
    children: [
      { path: "/", element: <Accueil /> }, // Accueil comme route enfant
      { path: "/tarif", element: <Tarif /> }, // Tarif comme route enfant
      { path: "/partenaire", element: <Partenaire /> }, // Tarif comme route enfant
      { path: "/plan", element: <Plan /> },
      { path: "/about", element: <About /> },
      { path: "/info", element: <Info /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
