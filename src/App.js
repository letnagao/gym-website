import './App.css';
import HeroSection from './components/hero-section/HeroSection';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
    </div>
  );
}

export default App;
