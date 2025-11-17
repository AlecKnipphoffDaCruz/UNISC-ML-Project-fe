import InputForm from "../molecules/InputForm";
import Greetings from "../molecules/Greetings";
import Explaining from "../molecules/Explaining";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import {
  scrollToGreeting,
  scrollToExplaining,
  scrollToInput,
} from "../../utils/scrolls";

export default function MainOrganism() {
  return (
    <div>
      <Header />
      <section id="home">
        <Greetings />
      </section>
      <section id="how-it-works">
        <Explaining />
      </section>
      <section id="estimate">
        <InputForm />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
