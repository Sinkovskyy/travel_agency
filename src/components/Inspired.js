import useView from "./useView";
import {useSpring,animated} from "react-spring";



export default () => 
{
    const mainClassName = "inspired";
    const isVisiable = useView(mainClassName,-200);
    const textAnimation = useSpring(
    {

        from:
        {
            transition:"all 1s ease",
            height:0,
            opacity:0
        },
        to:
        {
            height: isVisiable ? 550 : 0,
            opacity:isVisiable? 1: 0
        }
    });


    return(
        <div className={mainClassName}>
            <animated.div style={textAnimation}className="title-container" >
                <h2>Get Inspired</h2>
            </animated.div>
            <video  id="bgvid"autoPlay muted loop>
                <source src="./images/inspired.webm" type="video/webm"/>
            </video>
        </div>
    );

}