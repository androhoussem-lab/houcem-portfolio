import {motion, useAnimation} from 'framer-motion';
import PersonalPhoto from '../assets/photo-02.png';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


const About = ()=>{
    const {ref,inView} = useInView({
        threshold : 0.3
    });
    const animation = useAnimation();

    useEffect(()=>{
        if(inView){
            animation.start({
                x : 0,
                transition:{
                    duration:2,
                    type : 'spring',
                }
            });
        }
        if(!inView){
            animation.start({
                x : '-100vw',
                transition:{
                    duration:2,
                    type : 'spring', 
                } 
            });
        }
    },[inView]);


    return (
        <div ref={ref} id='about'>
             <motion.section initial={{x:'-100vw'}} animate={animation}  className='flex flex-col justify-center items-center gap-4 lg:flex-row md:justify-between md:gap-0 pt-40 px-8'>
                <div>
                    <h2 className='text-blue text-2xl font-bold md:text-3xl'>About me:</h2>
                    <p
                    className='justify text-gray-50 mt-8 text-base lg:text-lg'>
                        Hello, I'm <span className='text-rose'>Houcem Eddine</span> from Algeria, you might be surprised if I tell you that I am a 'male nurse'😊 ... 
                        but I love computers from a young age, so I started programming 10 years ago with <span className='text-rose'>Visual-basic 6</span> and then <span className='text-rose'>Visual-basic.net</span>, but in fact I was just a programmer imitating lessons without any Understood 😵 , then I started with <span className='text-rose'>Java</span> in 2016, then <span className='text-rose'>Android</span> and got a certificate from Udacity (available on request), 
                        then in 2019 I entered the world of <span className='text-rose'>Flutter</span> and <span className='text-rose'>PHP</span> and here I actually started to understand programming and write long codes without going back to stackoverflow 🤗 , 
                        in these last years, I studied in several topics such as design (UX/UI), Git , Design Pattern and many other topics and now a few months ago I studied front-end with <span className='text-rose'>Html</span> <span className='text-rose'>Css</span> <span className='text-rose'>Tailwindcss</span> and <span className='text-rose'>Vanilla Javascript</span> 🥰 ... then <span className='text-rose'>React</span> .
                    </p>
                </div>
                
                <img
                className='w-full  lg:w-1/3' src={PersonalPhoto} alt='personal-02'/>
            </motion.section>  
        </div>
       
    );
}


export default About;