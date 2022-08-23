import {motion , useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { portfolioData } from '../portfolio_data';
import PortfolioCard from './PortfolioCard';



const Portfolio = ()=>{
    const {ref , inView} = useInView();
    const [projects , setProject] = useState(portfolioData);
    const animation = useAnimation();
    useEffect(()=>{
        if(inView){
            animation.start({
                y : 0,
                transition:{
                    duration:2,
                    type : 'spring',
                    ease:'easeInOut'
                }
            });
        }
        if(!inView){
            animation.start({
                y : -100,
                transition:{
                    duration:2,
                    type : 'spring',
                    ease:'easeInOut'
                }
            });
        }
        console.log(inView);
    },[inView]);
    const toggleShowInfo = (id)=>{
        setProject(prevState => {
            return prevState.map(project => {
                return project.id === id ?({...project , infoIsShow : !project.infoIsShow}):project;
            })
        })
    }
    const WebElements = projects.filter(project => project.platform === 'Web').map(project => {
        return <PortfolioCard key={project.id} id={project.id} toggleShowInfo={toggleShowInfo} {...project}/>
    });

    const mobileElement = projects.filter(project => project.platform === 'Mobile').map(project => {
        return <PortfolioCard key={project.id} id={project.id} toggleShowInfo={toggleShowInfo} {...project}/>
    });
    return (
        <div ref={ref} id='portfolio'>
            <motion.section 
                initial = {{ y : -100 }} 
                animate={animation}
                className = 'pt-40 px-8'>
                <h2 className='text-blue text-2xl font-bold md:text-3xl'>Portfolio (Front-End):</h2>  
                <div className='grid grid-cols-1 mt-8 gap-8 lg:grid-cols-2'>
                    {WebElements}
                </div>
                <h2 className='text-blue text-2xl font-bold md:text-3xl mt-32'>Portfolio (Mobile):</h2>  
                <div className='grid grid-cols-1 mt-8 gap-8 lg:grid-cols-2'>
                    {mobileElement}
                </div>
            </motion.section>
        </div>
    );
}


export default Portfolio;