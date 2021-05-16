import discoverData from "../data/discover_panel.json";
import servisesData from "../data/our_servises.json";
import {useState} from 'react';
// import { GoSettings } from 'react-icons';






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
                <img src="./images/about1.jpg" alt="about"/>
            </div>
            <div className="container info">
                <h2>Discover New Horizons</h2>
                <div className="tag-slider">
                    {Object.keys(discoverData).map((key) => 
                    {
                        const class_name = key === tag ? "slide active":"slide"; 
                        return(
                            <div key={key} className={class_name} onClick={clickHandler}>
                                <a>{key.split("_").join(" ")}</a>
                            </div>
                        );
                    })}
                    
                </div>
                <p>{discoverData[tag]}</p>
                <button>Read More</button>
            </div>
        </div>
    );
}


function Servises()
{
    
    return(
        <div className='servises'>
            <h2>Our Servises</h2>
            <div className="block-container">
            { Object.keys(servisesData).map((item) =>
            {
                return(
                    <div className="container" key={item}>
                        <div className="s-block" >
                        
                            <i className={servisesData[item].icon}></i>
                            <h3>{servisesData[item].title}</h3>
                            <p>{servisesData[item].description}</p>
                        </div>
                     </div>
                     );
            })}
            </div>
        </div>
    );
}

function About()
{


    return(
        <div className='about'>
            <Discover/>
            <Servises/>
        </div>
    );
}


export default About;