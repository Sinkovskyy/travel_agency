import discoverData from "../data/discover_panel.json";
import servisesData from "../data/our_servises.json";
import {useState} from 'react';
import {useSpring,animated,useSprings} from 'react-spring';
import useView from "./useView";


function DiscoverInfo(props)
{

    const fadeIn = useSpring({
        from:{
            opacity:0,
        },
        to:
        {
            transition:"opacity .5s ease-out",
            opacity: props.isScrolled?1:0
        },

    });




    return(
                <>
                <div className="tag-slider">
                    {Object.keys(props.discoverData).map((key) => 
                    {
                        const class_name = key === props.tag ? "slide active":"slide"; 
                        return(
                            <div key={key} className={class_name} onClick={props.onClick}>
                                <a>{key.split("_").join(" ")}</a>
                            </div>
                        );
                    })}
                </div>
                <animated.div  style={fadeIn}>
                    <p>{props.discoverData[props.tag]}</p>
                    <button>Read More</button>
                </animated.div>
                </>
    );
}


function Discover()
{
    const [tag,setTag] = useState("ABOUT_US");
    const mainClassName = "discover";
    const isScrolled = useView(mainClassName);

    const discoverInfoAnims = useSpring(
        {
            config:
            {
                duration:800,
                delay:400,
                
            },
            from:
            {
             position:"absolute",   
             transition: "opacity 1s linear",
             x:400,
             opacity:0
            },
            to:
            {
                position:"relative",   
                opacity: isScrolled ? 1:0,
                x:isScrolled ? 0: 400,
            }


        }
    );

    const imageAnim = useSpring({
        from:
        {
            opacity:0,
            transform: "rotateY(90deg) rotateX(90deg)",
            transition: "all 1s ease" 
        },
        to:
        {
            opacity: isScrolled ? 1:0,
            transform: isScrolled ? "rotateY(0deg) rotateX(0deg)" : "rotateY(90deg) rotateX(90deg)",
        }
    });


    function clickHandler(event)
    {
        const new_tag = event.currentTarget.firstChild.firstChild.data.split(" ").join("_");
        setTag(new_tag);
    }



    return(
        <div className={mainClassName}>
            <div className="container image">
                <animated.img style={imageAnim} src="./images/about1.jpg" alt="about"/>
            </div>
            <animated.div style={discoverInfoAnims} className="container info">
                <h2 >Discover New Horizonts</h2>
                <DiscoverInfo key={tag} discoverData={discoverData} tag={tag} isScrolled={isScrolled} onClick={clickHandler}/>
            </animated.div>  
        </div>     
    );
}



function Servises()
{
    const mainClassName = "servises";
    const isVisiable = useView(mainClassName);


    const shuffleItems = useSprings(Object.keys(servisesData).length,
    Object.keys(servisesData).map((item) =>{
        const x = Math.random() * (1000 + 1000) - 1000;
        const y = Math.random() * (1000 + 1000) - 1000 ;
        return(
        {
            from:
            {
                opacity:0,
                transition:"opacity .1s ease , all 1s ease",
                x:x,
                y:y
            },
            to:
            {
                opacity:isVisiable? 1:0,
                x: isVisiable? 0:x,
                y: isVisiable? 0:y,
            }
    })}));

    const titleAnim = useSpring({
       from:
       {
           transition:"opacity .7s ease, all .4s ease",
           opacity:0,
           y:20
       },
       to:
       {
            opacity:isVisiable? 1:0,
            y:isVisiable?0:20
       }
    });

    return(
        <div className={mainClassName}>
            <animated.h2 style={titleAnim}>Our Servises</animated.h2>
            <div className="block-container">
            { shuffleItems.map((prop,item) =>
            {
                return(
                    <animated.div style={prop} className="container" key={item}>
                        <div className="s-block" >
                            <i className={servisesData[item].icon}></i>
                            <h3>{servisesData[item].title}</h3>
                            <p>{servisesData[item].description}</p>
                        </div>
                     </animated.div>
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