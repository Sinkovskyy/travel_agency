import NavItemsData from "../data/navigator.json";
import {
    GrFacebookOption as Facebook,
    GrTwitter as Twitter,
    GrInstagram as Instagram,
    GrLinkedin as Linkedin

} from 'react-icons/gr'


function Footer()
{

    const ICON_SIZE = 30;


    // Click on items handler
    function clickHandler(event)
    {
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
     <div className='footer'>
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
     </div>

    );
}




export default Footer;