import Navbar from './components/Navbar';
import Slidebar from './components/Slidebar';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Slidebar/>
        {/* <About/> */}
      </main>

      <footer>
       {/* <Footer/> */}
      </footer>
    </div>
  );
}

export default App;
