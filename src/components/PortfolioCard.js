import { useEffect } from 'react';
import {motion,useAnimation} from 'framer-motion';

const SkillCard = (props)=>{
    const langagesElements = props.languages.map((langage , index) => {
        return <h2 key={index} className='text-gray-50'>{langage}</h2>
    });
    const animation = useAnimation();

    useEffect(()=>{
        if(props.infoIsShow){
            animation.start({
                opacity:1,
                transition:{
                    duration:2 ,type:'spring',
                }
            });
        }
        if(!props.infoIsShow){
            animation.start({
                opacity:0,
                transition:{
                    duration:2 , ease:'easeInOut' ,type:'spring'
                }
            });
        }
    },[props.infoIsShow])


    return (
    <div onClick={()=>props.toggleShowInfo(props.id)} className="relative w-full grid-flow-row cursor-pointer mx-auto rounded-lg">
        <img src={props.image} alt="project" className='relative w-full lg:h-[60rem] filter saturate-100'/>
        {props.infoIsShow && (
                <motion.div 
                    initial={{opacity:0}} 
                    animate={animation} 
                    className="absolute inset-0 w-full rounded-lg p-4 bg-gradient-to-b from-purple to-rose">
                        <div className=''>
                            <h2 className='text-lg  md:text-base font-bold text-blue'>Title :</h2>
                            <h2 className='text-lg  md:text-base text-gray-50'>{props.title}</h2>
                        </div>
                        {langagesElements.length > 0 && (
                        <div className=''>
                            <h2 className='text-lg  md:text-base font-bold text-blue'>Langages :</h2>
                            <h2 className='text-lg  md:text-base text-gray-50'>{langagesElements}</h2>
                        </div> 
                        )}
                </motion.div>
            )}
    </div>);

}

export default SkillCard;