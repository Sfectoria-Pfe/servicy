import './App.css';
import Footer from './components/Footer';
import Animals from './components/Animals'
import Navbar from './components/Navbar';
import { lazy, Suspense } from 'react';
import Lottie from 'react-lottie';
import loading from './assets/lotties/loading.json';
import Employees from './components/Employees';
import Services from './components/Services';
import Prestataires from './components/Prestataires';
const Hero = lazy(() => import('./components/Hero'))
function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Suspense fallback={<div className=' d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />

      </div>}>
        <Navbar />
        <Hero />
        <Prestataires/>
        <Services />
        <Employees />
        <Animals />
        <Footer />
      </Suspense>
    </div>

  );
}

export default App;
