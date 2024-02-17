import Action from "../components/Action/Action";
import Baner from "../components/Baner/Baner";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Title from "../components/Title/Title";

export default function HomePage() {
  return (
    <>
      <main>
        <Baner />

        <div className="container">

          <div className="actiontitle">
            <Title>Акции</Title>
            <a href="">Перейти в каталог</a>
          </div>

            
          <Action/>
          <Button/>
        </div>
        <Footer/>
      </main>
    </>
  );
}
