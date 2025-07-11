import Navbar from './components/client/navbar/navbar.jsx';
import Hero from './components/client/hero/hero.jsx';
import './styles/main.scss';
import './components/client/navbar/navbar.scss'

function App() {
  return (
    <>
      <div className="container">
        {/*navbar*/}
        <Navbar />
        {/* hero */}
        <Hero />
        {/*featured*/}
        <featured />

      </div>
    </>
  );
}

export default App;