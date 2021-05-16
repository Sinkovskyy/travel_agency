import data from "../data/discover_panel.json"
import {useState} from 'react'







function Discover()
{
    const [tag,setTag] = useState("ABOUT_US");


    function clickHandler(event)
    {
        const new_tag = event.currentTarget.firstChild.firstChild.data.split(" ").join("_");
        setTag(new_tag);
    }

    return(
        <div className="discover">
            <div className="container image">
                <img src="./images/about1.jpg"/>
            </div>
            <div className="container info">
                <h2>Discover New Horizons</h2>
                <div className="tag-slider">
                    {Object.keys(data).map((key) => 
                    {
                        const class_name = key == tag ? "slide active":"slide"; 
                        return(
                            <div key={key} className={class_name} onClick={clickHandler}>
                                <a>{key.split("_").join(" ")}</a>
                            </div>
                        );
                    })}
                    
                </div>
                <p>{data[tag]}</p>
                <button>Read More</button>
            </div>
        </div>
    );
}



function About()
{


    return(
        <div className='about'>
            <Discover/>
        </div>
    );
}


export default About;