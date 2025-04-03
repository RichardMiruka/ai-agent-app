// In this file, you have all of your routes.
// This is how we'll navigate between pages using BrowserRouter.
// This is the main entry point of your React application.
// It uses React Router to define the routes for your application.
// The <Router> component wraps the entire application and enables routing.
// The <Routes> component contains all the defined routes.
// Each <Route> component defines a path and the corresponding component to render.
// The <Layout> component is used to wrap the pages with a common layout.
// The <Home>, <Projects>, <Career>, <Services>, <Research>, and <Contact> components are the pages of your application.
// The <Route> components specify the paths for each page.
// The <BrowserRouter> component is used to enable client-side routing.
// The <Routes> component is used to define the routes for your application.
// The <Route> component is used to define a single route.

import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Career from './pages/Career';
import Services from './pages/Services';
import Research from './pages/Research';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/career" element={<Career />} />
          <Route path="/services" element={<Services />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
