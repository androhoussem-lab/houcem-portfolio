import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import { useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import {SiDart} from 'react-icons/si';
import {SiHtml5} from 'react-icons/si';
import {SiCss3} from 'react-icons/si';
import {SiTailwindcss} from 'react-icons/si';
import {FaPaintBrush} from 'react-icons/fa';
import {SiPhp} from 'react-icons/si';
import {SiJava} from 'react-icons/si';
import {SiJavascript} from 'react-icons/si';

import {motion,useAnimation} from 'framer-motion';

const SkillCard = (props)=>{
    const frameworksElements = props.frameworks.map((frameWork , index) => {
        return <h2 key={index} className='text-gray-50'>{frameWork}</h2>
    });
    const toolsElements = props.tools.map((tool , index) => {
        return <h2 key={index} className='text-gray-50'>{tool}</h2>
    });
    const packagesElements = props.packages.map((packageEle , index) => {
        return <h2 key={index} className='text-gray-50'>{packageEle},</h2>
    });
    const animation = useAnimation();

    useEffect(()=>{
        if(props.infoIsShow){
            animation.start({
                opacity:1,
                transition:{
                    duration:1 ,type:'spring',
                }
            });
        }
        if(!props.infoIsShow){
            animation.start({
                opacity:0,
                transition:{
                    duration:1 , ease:'easeInOut' ,type:'spring'
                }
            });
        }
    },[props.infoIsShow])

    const getIcon = (language) => {
        let icon = <></>
        switch(language){
            case 'Php':
                icon = <SiPhp className='text-9xl text-gray-50 h-full mx-auto'/>;
            break;
            case 'Dart':
                icon = <SiDart className='text-9xl text-gray-50 h-full mx-auto'/>;
            break;
            case 'Html':
                icon = <SiHtml5 className='text-9xl text-gray-50 h-full mx-auto'/>;
            break;
            case 'Css':
                icon = <SiCss3 className='text-9xl text-gray-50 h-full mx-auto'/>;
            break;
            case 'Tailwind':
                icon = <SiTailwindcss className='text-9xl text-gray-50 h-full mx-auto'/>;
            break;
            case 'Javascript':
                icon = <SiJavascript className='text-9xl text-gray-50 h-full mx-auto'/>;
            break;
            case 'Java':
                icon = <SiJava className='text-9xl text-gray-50 h-full mx-auto'/>;
            break;
            case 'Design':
                icon = <FaPaintBrush className='text-9xl text-gray-50 h-full mx-auto'/>;
            break;
        }

        return icon;
    }
    return (
    <div onClick={()=>props.toggleShowInfo(props.id)} className="relative z-50 w-full h-96 cursor-pointer mx-auto md:w-5/6 lg:w-full rounded-lg transition-all hover:bg-rose">
        <div className='border-2 h-full w-full rounded-lg '>{getIcon(props.skill)}</div>
        {props.infoIsShow && (
                <motion.div 
                    initial={{opacity:0}} 
                    animate={animation} 
                    className="absolute inset-0 w-full rounded-lg p-4 bg-gradient-to-b from-purple to-rose overflow-y-scroll scrollbar">
                        <div className='w-24 h-1/2 mx-auto'>
                            <CircularProgressbar 
                                styles={buildStyles({
                                    textColor: "#2BBEF2",
                                    pathColor: "#EA37A3",
                                    trailColor: "#6B4EE6"
                                })} 
                                value={props.percentage} 
                                text={`${props.percentage}%`} />
                        </div>
                        <div className=''>
                            <h2 className='text-lg  md:text-base font-bold text-blue'>Skill :</h2>
                            <h2 className='text-lg  md:text-base text-gray-50'>{props.skill}</h2>
                        </div>
                        {frameworksElements.length > 0 && (
                        <div className=''>
                            <h2 className='text-lg  md:text-base font-bold text-blue'>Frameworks :</h2>
                            <h2 className='text-lg  md:text-base text-gray-50'>{frameworksElements}</h2>
                        </div> 
                        )}
                        {packagesElements.length > 0 && (
                           <div className=''>
                           <h2 className='text-lg  md:text-base font-bold text-blue'>Packages :</h2>
                           <h2 className='text-lg  md:text-base text-gray-50'>{packagesElements} and more..</h2>
                           </div> 
                        )}
                        <h2 className='text-lg  md:text-base font-bold text-blue'>Tools :</h2>
                        <h2 className='text-lg  md:text-base text-gray-50'>{toolsElements}</h2>
                </motion.div>
            )}
    </div>);

}

export default SkillCard;