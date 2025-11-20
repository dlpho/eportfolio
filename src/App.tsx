import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { Assessment } from "./components/Assessment";
import { Resume } from "./components/Resume";
import { WorkSamples } from "./components/WorkSamples";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <Hero />
      <Introduction />
      <Assessment />
      <Resume />
      <WorkSamples />
      <Footer />
    </div>
  );
}
