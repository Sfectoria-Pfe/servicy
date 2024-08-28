import './App.css';
import { Suspense, useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import loading from './assets/lotties/loading.json';
import Router from './Router';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    );
  }

  return (
    <Suspense fallback={<div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
    </div>}>
      <Router />
    </Suspense>
  );
}

export default App;
