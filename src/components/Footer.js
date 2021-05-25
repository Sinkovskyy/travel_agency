import NavItemsData from "../data/navigator.json";
import {
    GrFacebookOption as Facebook,
    GrTwitter as Twitter,
    GrInstagram as Instagram,
    GrLinkedin as Linkedin

} from 'react-icons/gr';
import useView from "./useView";
import {useSpring,animated} from "react-spring";


function Footer()
{

    const ICON_SIZE = 30;
    const mainClassName = "footer";
    const isVisiable = useView(mainClassName,-700);
    const fadeIn = useSpring({
        config:
        {
           delay:200,
            duration:1000
        },
        from:
        {
            opacity:0
        },
        to:
        {
            opacity:isVisiable?1:0
        },
    });



    // Click on items handler
    function clickHandler(event)
    {
        console.log("offers" + document.getElementsByClassName("footer")[0].offsetTop);
        // Get value of current clicked item
        const data = event.target.firstChild.data;
        // Find class of pressed element and move to the section
        Object.keys(NavItemsData).forEach(i => {
            if(NavItemsData[i].name == data)
            {
                document.getElementsByClassName(NavItemsData[i].position)[0].scrollIntoView({ behavior: 'smooth' });
            }
        });
    }


   

    return(
     <animated.div style={fadeIn} className={mainClassName}>
            <div className='logo'>FAST TRAVEL</div>
            <div className="nav-items">
                <div className="container">
            {Object.keys(NavItemsData).map((item) =>
            {
                return <a className="nav-item" onClick={clickHandler} key={item}>{NavItemsData[item].name}</a>
            })}
                </div>
            </div>

            <div className="other">
                <div className="social-media-tags">
                    <Facebook className="facebook icon" size={ICON_SIZE} />
                    <Instagram className="instagram icon" size={ICON_SIZE} />
                    <Twitter className="twitter icon" size={ICON_SIZE} />
                    <Linkedin className="linkedin icon" size={ICON_SIZE} />
                </div>
                <div className="license">©2021 Fast Travel. All rights reserved</div>
            </div>
     </animated.div>

    );
}




export default Footer;