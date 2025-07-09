import Navbar from './components/navbar';
import Hero from './components/hero'
import './styles/main.scss';
import './styles/navbar.scss'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* Your page content here */}
        <Hero />
      </div>
    </>
  );
}

export default App;