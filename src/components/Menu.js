import {AiFillCloseSquare} from 'react-icons/ai';


const Menu = (props)=>{
    return (
        <div className='w-full h-screen bg-mirage text-gray-50 p-8'>
            <div className='flex justify-between items-center'>
                <h1 className="font-dancing font-bold text-2xl text-purple">Houssem<span className="text-rose">Portfolio</span></h1>
                <span 
                    onClick={props.toggleMenuShow}
                    className='text-xl content-end'>
                    
                        <AiFillCloseSquare/>
                </span>
            </div>
            
            <ul className="list-none flex flex-col justify-center align-middle gap-8 mt-16">
                <a href="#about" onClick={props.toggleMenuShow} className="text-gray-50 text-lg hover:bg-blue cursor-pointer px-8 py-1 rounded-lg text-center">About</a>
                <a href="#skills" onClick={props.toggleMenuShow} className="text-gray-50 text-lg hover:bg-blue cursor-pointer px-8 py-1 rounded-lg text-center">Skills</a>
                <a href="#portfolio" onClick={props.toggleMenuShow} className="text-gray-50 text-lg hover:bg-blue cursor-pointer px-8 py-1 rounded-lg text-center">Portfolio</a>
                <a href="#contact" onClick={props.toggleMenuShow} className="text-gray-50 text-lg hover:bg-blue cursor-pointer px-8 py-1 rounded-lg text-center">Contact</a>
                
            </ul>
        </div>
    );
}

export default Menu;