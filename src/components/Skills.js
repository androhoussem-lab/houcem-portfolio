import {motion , useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { skillsData } from '../skills_data';
import SkillCard from './SkillCard';

const Skills = ()=>{
    const {ref , inView} = useInView({
        threshold : 0.1
    });
    const [skills , setSkills] = useState(skillsData);
    const animation = useAnimation();
    useEffect(()=>{
        if(inView){
            animation.start({
                y : 0,
                opacity : 1,
                transition:{
                    duration:2,
                    type : 'spring',
                    bounce : 0.1
                }
            });
        }
        if(!inView){
            animation.start({
                y : -100,
                opacity : 0,
                transition:{
                    duration:2,
                    type : 'spring',
                    bounce : 0.1
                }
            });
        }
    },[inView]);
    const toggleShowInfo = (id)=>{
        setSkills(prevState => {
            return prevState.map(skill => {
                return skill.id === id ?({...skill , infoIsShow : !skill.infoIsShow}):skill;
            })
        })
    }
    const skillsElements = skills.map(skill => {
        return <SkillCard key={skill.id} id={skill.id} toggleShowInfo={toggleShowInfo} {...skill}/>
    });

    return (
        <div ref={ref} id='skills'>
            <motion.section     
                initial = {{ opacity :0 , y : -100 }} 
                animate={animation}
                className = 'pt-40 px-8'>
                <h2 className='text-blue text-2xl font-bold md:text-3xl'>Skills and technologies:</h2>  
            <div className='grid grid-cols-1 mt-8 gap-8 lg:grid-cols-3'>
            {skillsElements}
            </div>
            </motion.section>
        </div>
    );
}


export default Skills;