import {BiArrowToTop} from "react-icons/bi";
import {useState,useEffect} from "react";

export default () => 
{

    const ICON_SIZE = 20;
    const TOP_CLASS = "sliderbar";
    const [active,setActive] = useState(false); 




    // Scroll listener
    function handleScroll()
    {
        let isActive = false;
        const element = document.getElementsByClassName(TOP_CLASS)[0];
        if(element.offsetHeight < window.pageYOffset + 200)
            isActive = !isActive;   
        setActive(isActive);

    }

     // Add and remove scroll listeners 
     useEffect(() => {
        window.addEventListener('scroll',handleScroll);
        return () => 
        {
            window.removeEventListener('scroll',handleScroll)
        };
    });

    function clickHandler()
    {
         // Scroll to the clicked category
         document.getElementsByClassName(TOP_CLASS)[0].scrollIntoView({ behavior: 'smooth' });
    }


    return(
        <button className={active ? "upbutton": "upbutton unactive"} onClick={clickHandler}>
            <BiArrowToTop className="icon" size={ICON_SIZE}/>
        </button>
            );
}