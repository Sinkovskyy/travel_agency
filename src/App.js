import Navbar from './components/Navbar';
import Slidebar from './components/Slidebar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <nav>
        <Slidebar/>
      </nav>


      <footer>
       <Footer/>
       <Footer/>
      </footer>
    </div>
  );
}

export default App;
