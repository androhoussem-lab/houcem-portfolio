import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState,useEffect } from "react";
import Menu from './components/Menu';
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";


const App = ()=>{

    const [menuIsShow , setMenuIsShow] = useState(false);

    const toggleMenuShow = ()=>{
        setMenuIsShow(prevState => !prevState);
    }

    const scrollIntoView=(id)=>{
        document.getElementById(id).scrollIntoView({behavior:'smooth'});
    }


    useEffect(()=>{
        document.title = 'Houcem Portfolio'
    },[])


    return (
        <div className="font-poppins bg-gradient-to-b from-mirage to-rose overflow-x-hidden selection:bg-pink-400">
            {menuIsShow
            ?<Menu toggleMenuShow={toggleMenuShow}/>
            :<div className="font-poppins bg-gradient-to-b from-mirage via-purple to-rose">
            <Navbar onNavItemClick={scrollIntoView} toggleMenuShow={toggleMenuShow}/>
            <Hero scrollIntoView={scrollIntoView}/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contact/>
            <Copyright/>
        </div>}
        </div>
        
    );
}


export default App;