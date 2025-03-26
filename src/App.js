import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'
import Services from './components/pages/Services'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return ( 
    <Router>
      <Navbar/>
      <Container customClass="min-height">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/company" exact element={<Company />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/navbar" exact element={<Navbar />} />
<<<<<<< HEAD
        <Route path="/newproject" exact element={<NewProject />} />
        <Route path="/project/:id" exact element={<Project />} />
        <Route path="/services"  exact element={<Services/>}/>
        
=======
        <Route path="/NewProject" element={<NewProject />} />
>>>>>>> createHome#20
      </Routes>
      </Container>
      
      <Footer />
      
    </Router>
  );
}

export default App;
