import NavItemsData from "../data/navigator.json";


function Footer()
{



    return(
     <div className='footer'>
            <div className='logo'>FAST TRAVEL</div>
            <div className="nav-items">
            {Object.keys(NavItemsData).map((item) =>
            {
                return <a className="nav-item" key={item}>{NavItemsData[item].name}</a>
            })}
            </div>
     </div>

    );
}




export default Footer;