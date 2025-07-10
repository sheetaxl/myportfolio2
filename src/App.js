import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero.js'; // ✅ import Hero
import About from './components/about.js';
import Projects from './components/projects.js'; // ✅ import Projects
import Contact from './components/contact.js'; // ✅ Add this import
import './App.css'; // ✅ This line MUST be there

import Footer from './components/footer.js';


function App() {
  return (
    <>
      <Navbar />
      <Hero /> {/* ✅ use Hero here */}
      <About/>
      <Projects/>
      <Contact />
      <Footer />
      
      
      <div className="container mt-5 text-center">
        <h2 className="text-success">content area</h2>
      </div>
    </>
  );
}

export default App;

/*import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5 text-center">
        <h1 className="text-primary">Welcome to My Portfolio</h1>
        <p className="lead">This is the beginning of something great!</p>
      </div>
    </>
  );
}

export default App;*/

/*import React from 'react';

function App() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-primary">Bootstrap is Working!</h1>
      <button className="btn btn-success">Click Me</button>
    </div>
  );
}

export default App;*/

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
