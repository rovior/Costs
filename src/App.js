<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
=======
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
>>>>>>> 5b0b23229d48d91cba78b1575f3173a167be50e8

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
<<<<<<< HEAD
import Project from './components/pages/Project'
import Services from './components/pages/Services'
=======
>>>>>>> 5b0b23229d48d91cba78b1575f3173a167be50e8

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
<<<<<<< HEAD
  return ( 
=======
  return (
>>>>>>> 5b0b23229d48d91cba78b1575f3173a167be50e8
    <Router>
      <Navbar/>
      <Container customClass="min-height">
      <Routes>
<<<<<<< HEAD
=======
  

>>>>>>> 5b0b23229d48d91cba78b1575f3173a167be50e8
        <Route path="/" exact element={<Home />} />
        <Route path="/company" exact element={<Company />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/navbar" exact element={<Navbar />} />
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/newproject" exact element={<NewProject />} />
        <Route path="/project/:id" exact element={<Project />} />
        <Route path="/services"  exact element={<Services/>}/>
        
=======
        <Route path="/NewProject" element={<NewProject />} />
>>>>>>> createHome#20
=======
        <Route path="/newproject" exact element={<NewProject />} />
        
>>>>>>> 5b0b23229d48d91cba78b1575f3173a167be50e8
      </Routes>
      </Container>
      
      <Footer />
      
    </Router>
  );
}

export default App;
