import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Testimonial from './pages/Testimonial';
import Error from './pages/Error';
import NavBar from './components/NavBar';
import './style/page.css'

function App(){
    return(
        <main>
         
        <BrowserRouter>
            
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About}/>
                <Route path="/project" component={Project}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/testimonial" component={Testimonial}/>
                <Route path="/contact" component={Contact}/>
                <Route  component={Error}/>
            </Switch> 
        </BrowserRouter> 
        
        </main>
    )
}
export default App;

