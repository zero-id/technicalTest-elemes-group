import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponenet from './components/NavbarComponent';
import HeroComponentMobile from './components/HeroComponentMobile';
import HeroComponent from './components/HeroComponent';
import { useEffect, useState } from 'react';
import CategoryComponent from './components/CategoryComponent';
import TrendingComponent from './components/TrendingComponent';
import FooterComponent from './components/FooterComponent';




function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <NavbarComponenet />
      {window.innerWidth < 900 ? <HeroComponentMobile /> : <HeroComponent />}
      <CategoryComponent />
      <TrendingComponent />
      <FooterComponent />
    </>
  )
}

export default App
