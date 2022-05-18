import { Route, Routes, Outlet, Link } from 'react-router-dom';
import './app.css';

function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
  }
  
  function About() {
    return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  }

function App() {


	return (
	 <div className='wrap'>
		<Routes>
				<Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
		</Routes>
	</div>
		
	);
}

export default App;
