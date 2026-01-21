import {useState, useEffect} from 'react';
import { RiArrowUpCircleFill } from "react-icons/ri";


const QuickBtn = () => {

    const [isVisible, setIsVisible] = useState(false)
    const scrollTop = () => {
        window.scrollTo({top:0, behavior:"smooth"})
    }

    useEffect(()=>{
        const handleScroll = () =>{
            setIsVisible(window.scrollY > 500)
        }
        window.addEventListener('scroll',handleScroll);

        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    
    return isVisible && (
        <div className='quickBtn'>
            <button className="top" onClick={scrollTop}>
                <RiArrowUpCircleFill />
            </button>
        </div>
    );
};

export default QuickBtn;