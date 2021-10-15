import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Blog from './pages/Blog';
import Contact from './pages/Contact';
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
                <Route path="/blog" component={Blog}/>
                <Route path="/contact" component={Contact}/>
                <Route  component={Error}/>
            </Switch> 
        </BrowserRouter> 
        
        </main>
    )
}
export default App;

