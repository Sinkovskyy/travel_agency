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
      <header className=".noselect">
        <Navbar/>
      </header>
      <main>
        <Slidebar/>
        <About/>
        <Inspired/>
        <Offers/>
      </main>
      <footer>
       <Footer/>
      </footer>
      <UpButton/>
    </div>
  );
}

export default App;
