import {useInView} from 'react-intersection-observer';
import {motion , useAnimation} from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import {useState,useEffect, useRef} from 'react';
import {AiFillPhone} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import {MdLocationOn} from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contact = ()=>{

    const {ref , inView} = useInView({
        threshold : 0.1
    });
    const formRef = useRef();
    const [formData , setFormData] = useState({
        sender : '',
        from : '',
        subject:'',
        message:''
    });

    const [loading , setLoading] = useState(false);
    const [buttonText , setButtonText] = useState('Send message');
    const formAnimation = useAnimation();
    const textAnimation = useAnimation();
    useEffect(()=>{
        if(inView){
            formAnimation.start({
                x : 0,
                opacity : 1,
                transition:{
                    duration:1,
                    type : 'spring',
                }
            });
            textAnimation.start({
                x : 0,
                opacity : 1,
                transition:{
                    duration:1,
                    type : 'spring',
                    ease:'easeInOut'
                }
            });
        }
        if(!inView){
            formAnimation.start({
                x : '50vw',
                opacity : 0,
                transition:{
                    duration:1,
                    type : 'spring',
                    ease:'easeInOut'
                }
            });
            textAnimation.start({
                x : '-50vw',
                opacity : 0,
                transition:{
                    duration:1,
                    type : 'spring',
                }
            });
        }
    },[inView]);


    const notify = (message) => toast(message);

    const handleOnChange = (event)=>{
        const {name,value} = event.target;
        setFormData(prevState => {
            return {...prevState,[name]:value}
        })
    }

    const handleOnSubmit = (event)=>{
        event.preventDefault();
        if(formData.sender.length != 0 && formData.from.length != 0 && formData.subject.length != 0 && formData.message.length != 0){
            setLoading(prevState => !prevState);
            setButtonText('Sending message ...')
            emailjs.sendForm('service_u6rg9gs', 'template_7jzit1n', formRef.current, 'LjKh30t_lbqjA7TsV')
            .then((result) => {
            if(result.text === "OK"){
                
                setFormData({
                    sender : '',
                    from : '',
                    subject:'',
                    message:''
                });
                notify('Thank you for writing to me, I will reply to you as soon as possible, with my best regards');
                setLoading(prevState => !prevState);
                setButtonText('Send message')
            }else {
                setFormData({
                    sender : '',
                    from : '',
                    subject:'',
                    message:''
                });
                notify('An error occurred while sending, we are working on it as soon as possible');
            }
        }, (error) => {
            notify(error.text);
        });
       
        }else{
            notify('Please enter all required texts to send the message');
        }
      
    }

    return (
        <div ref={ref}>
            <section id='contact' className = 'pt-40 px-8'>
                    
                    <div className='flex flex-col justify-between items-start gap-8 lg:flex-row lg:gap-0'>
                        
                        <motion.div initial = {{ opacity :0 , x : '-100vw' }} animate={textAnimation} className='flex flex-col flex-1 justify-center items-start'>
                        <h2 className='text-blue text-2xl font-bold md:text-3xl'>Let's talk:</h2>
                            <div className='flex justify-center items-center gap-4 mt-8 '>
                                <AiFillPhone className='text-lg sm:text-xl text-purple'/>
                                <h2 className='text-lg sm:text-xl text-gray-50'>+213775130807</h2>
                            </div>
                            <div className='flex justify-center items-center gap-4'>
                                <MdEmail className='text-lg sm:text-xl text-purple'/>
                                <h2 className='text-lg sm:text-xl text-gray-50'>houssem.macbook@gmail.com</h2>
                            </div>
                            <div className='flex justify-center items-center gap-4'>
                            <MdLocationOn className='text-lg sm:text-xl text-purple'/>
                                <h2 className='text-lg sm:text-xl text-gray-50'>Oum El Bouaghi &nbsp; - Algeria -</h2>
                            </div>
                            
                        </motion.div>  
                        <motion.div className='flex-1 w-full' initial = {{ opacity :0 , x : 100 }} animate={formAnimation}>
                            <form ref={formRef} onSubmit={handleOnSubmit} className='flex flex-col w-full gap-8'>
                                <input type='text' name='sender' value={formData.sender} onChange={handleOnChange} max="30" placeholder='Full name' className='w-full p-2 lg:p-4 text-purple outline-none border-none rounded-lg required'/>
                                <input type='email' name='from' value={formData.from} onChange={handleOnChange} max="50" placeholder='Email' className='w-full p-2 lg:p-4 text-purple outline-none border-none rounded-lg required'/>
                                <input type='text' name='subject' value={formData.subject} onChange={handleOnChange} max="30" placeholder='Subject' className='w-full p-2 lg:p-4 text-purple outline-none border-none rounded-lg required'/>
                                <textarea type='text' name='message' value={formData.message} onChange={handleOnChange} max="255" placeholder='Message' className='w-full h-48 resize-none p-2 lg:p-4 text-purple outline-none border-none rounded-lg required'/>
                                <motion.button initial={{ scale:1 }} disabled={loading} whileHover={{ scale:1.01 }} className='w-full uppercase text-center rounded-lg decoration-none bg-blue py-2 px-4 text-gray-50 font-semibold text-md lg:text-lg mt-8 tracking-wider'>{buttonText}</motion.button>
                            </form>
                            <ToastContainer/>
                        </motion.div> 
                    </div>
                  
            </section>
        </div>
    );
}

export default Contact;