import {useState,useEffect} from "react";



export default function useView(className,offset = 300)
{
    const [state,setState] = useState(false);


    function handleScroll(event)
    {
        const element = document.getElementsByClassName(className)[0];
        if( element.offsetTop < window.pageYOffset-offset)
        {
            setState(true);
        }
    }

    useEffect(() =>
    {
        window.addEventListener('scroll', handleScroll);
        return(() =>  {window.removeEventListener('scroll', handleScroll)});
    });


    return(state);

}



