import LineWave from './LineWave';
import {motion} from 'framer-motion';
import PersonalPhoto from '../assets/photo.png';
import { AiFillFacebook } from 'react-icons/ai';
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithubSquare} from 'react-icons/fa'


const Hero = (props)=>{
    return (
        <section className='relative h-fit lg:h-96'>
            <div className='absolute inset-0 top-40'><LineWave/></div>
            <div className='flex flex-col  lg:flex-row justify-between items-center px-8 pt-40'>
                <motion.div 
                    initial={{ x:'-100vw' , opacity:0 }}
                    animate={{ x: 0 , opacity:1 }}
                    transition={{ duration:2 ,delay:1 , ease:'easeInOut', type:'spring'}}
                    className='flex flex-col justify-center items-center lg:items-start'>
                    <h1 className='uppercase text-purple text-center md:text-left text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider'>Hello world i'm <span className='text-rose'>Houcem Eddine</span></h1>
                    <h2 className='mt-2 text-gray-50 text-center md:text-left text-md lg:text-lg tracking-wider'>Full-stack and mobile developer</h2>
                    
                    <motion.button 
                        initial={{ scale:1 }}
                        whileHover={{ scale:1.05 }} 
                        onClick={()=>props.scrollIntoView('contact')}
                        className='w-full uppercase text-center rounded-lg decoration-none bg-blue py-2 px-4 lg:w-1/2 text-gray-50 font-semibold text-md lg:text-lg mt-6 tracking-wider' 
                        >Hire me</motion.button>
                </motion.div>
                <motion.img 
                initial={{ x:'100vw' , opacity:0 }}
                animate={{ x: 0 , opacity:1 }}
                transition={{ duration:2 ,delay:1 , ease:'easeInOut', type:'spring'}}
                className='w-full lg:w-1/3 mt-8 lg:mt-0' src={PersonalPhoto} alt='houcem'/>
                <div className='flex flex-row lg:flex-col mt-4 lg:mt-0 lg:ml-8 gap-8 justify-center items-center'>
                    <motion.a 
                        initial={{ x:10 , opacity:0 }} 
                        animate={{ x:0 , opacity:1 }} 
                        transition={{ duration:2 ,type:'spring',delay:2,ease:'easeInOut' }} 
                        href='https://web.facebook.com/houssem.benseghir.1' 
                        target="_blank"
                        className='z-40 text-4xl lg:text:3xl text-gray-50'>
                        <motion.div whileHover={{scale:1.1}}><AiFillFacebook/></motion.div>
                    </motion.a>   
                    <motion.a 
                        initial={{ x:10 , opacity:0 }} 
                        animate={{ x:0 , opacity:1 }} 
                        transition={{ duration:2 ,type:'spring',delay:2.5,ease:'easeInOut' }} 
                        href='https://www.instagram.com/houssem_fullstack/?hl=fr' 
                        target="_blank"
                        className='z-40 text-4xl lg:text:3xl text-gray-50'>
                        <motion.div whileHover={{scale:1.1}}><FaInstagramSquare/></motion.div>
                    </motion.a>
                    <motion.a 
                        initial={{ x:10 , opacity:0 }} 
                        animate={{ x:0 , opacity:1 }} 
                        transition={{ duration:2 ,type:'spring',delay:3,ease:'easeInOut'}} 
                        href='https://www.linkedin.com/in/houcem-eddine-benseghir-477158238/' 
                        target="_blank"
                        className='z-40 text-4xl lg:text:3xl text-gray-50'>
                        <motion.div whileHover={{scale:1.1}}><AiFillLinkedin/></motion.div>
                    </motion.a>
                    <motion.a 
                        initial={{ x:10 , opacity:0 }} 
                        animate={{ x:0 , opacity:1 }} 
                        transition={{ duration:2 ,type:'spring',delay:3.5,ease:'easeInOut'}} 
                        href='https://github.com/androhoussem-lab'
                        target="_blank" 
                        className='z-40 text-4xl lg:text:3xl text-gray-50'>
                        <motion.div whileHover={{scale:1.1}}><FaGithubSquare/></motion.div>
                    </motion.a>
                </div>
            </div>
            
            
        </section>
    );
}

export default Hero;