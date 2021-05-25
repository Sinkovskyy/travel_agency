import Navbar from './components/Navbar';
import Slidebar from './components/Slidebar';
import About from './components/About';
import Inspired from './components/Inspired';
import Offers from './components/Offers';
import Footer from './components/Footer';
import UpButton from './components/UpButton';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Slidebar/>
        <About/>
        <Inspired/>
        <Offers/>
        <Footer/>
      </main>
      <UpButton/>
      
      
    </div>
  );
}

export default App;
