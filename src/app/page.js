import "../styles/main.scss";
import Accueil from "./components/sections/accueil";
import Apropos from "./components/sections/Apropos";
import Projets from "./components/sections/projets";
import Contact from "./components/sections/form";

export const metadata = {
  title: "Portfolio Dylan Dubois",
  description: "Découvrez mon portfolio d'Intégrateur React",
};

export default function Home() {
  return (
    <>
      { <section id="accueil">
        <Accueil />
      </section> }
      <section id="apropos">
        <Apropos />
      </section>
      { <section id="projets">
        <Projets />
      </section> }
      { <section id="contact">
        <Contact />
      </section> }
    </>
  );
}
