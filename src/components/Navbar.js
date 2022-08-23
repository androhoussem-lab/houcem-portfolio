import {motion} from 'framer-motion';
import {HiMenuAlt3} from 'react-icons/hi';

const Navbar = (props)=>{
    return (
        <motion.nav 
        initial={{ y:-10 , opacity : 0}}
        animate={{ y:0 , opacity:1 }}
        transition = {{ duration:1 , type:'spring' , ease:'easeInOut'}}
        className="z-50 bg-mirage w-full py-4 px-4 md:px-8 flex  justify-between items-center fixed md:relative">
            <a className="font-dancing font-black text-2xl text-purple md:text-4xl" href='#'><h1>Houcem<span className="text-rose">Portfolio</span></h1></a>
            <ul className="hidden list-none md:flex align-middle ">
                <li onClick={()=>props.onNavItemClick('about')} className="text-gray-50 text-md lg:text-lg hover:bg-blue px-8 py-1 rounded-lg cursor-pointer">About</li>
                <li onClick={()=>props.onNavItemClick('skills')} className="text-gray-50 text-md lg:text-lg hover:bg-blue px-8 py-1 rounded-lg cursor-pointer">Skills</li>
                <li onClick={()=>props.onNavItemClick('portfolio')} className="text-gray-50 text-md lg:text-lg hover:bg-blue px-8 py-1 rounded-lg cursor-pointer">Portfolio</li>
                <li onClick={()=>props.onNavItemClick('contact')} className="text-gray-50 text-md lg:text-lg hover:bg-blue px-8 py-1 rounded-lg cursor-pointer">Contact</li>
            </ul>
            <div className='md:hidden' onClick={props.toggleMenuShow}>
                <HiMenuAlt3 className='text-gray-50 text-xl'/>
            </div>
        </motion.nav>
    );
}

export default Navbar;