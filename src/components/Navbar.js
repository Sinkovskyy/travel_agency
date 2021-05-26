import {useState,useEffect} from 'react'
import Sidebar from './Sidebar';
import NavItemsData from "../data/navigator.json"
import {HiMenu as IconMenu} from 'react-icons/hi'
import {useSpring,animated} from "react-spring";







function Navbar()
{

    const mainClassName = "navbar";
    const [position,setPosition] = useState(mainClassName);

    const [items,setItems] = useState(Object.keys(NavItemsData).map((item) => NavItemsData[item]));
    const [sidebarActive,setSidebarActive] = useState(false);

    const fadeIn = useSpring({
        config:
        {
            duration:700
        },
        from:
        {
            y:-20,
            opacity:0
        },
        to:
        {
            y:0,
            opacity:1
        }
    })


    function getCurrentSectionName()
    {
        let name;
        items.forEach((item) =>
        {
            const element = document.getElementsByClassName(item.position)[0];
            if( element.offsetTop < window.pageYOffset + 200)
            {
                name = item.name;
            }
        });
        return name;
    }


    function changePosition(clicked = false)
    {
        let isSidebarActive = clicked ? sidebarActive : !sidebarActive;
        let position = isSidebarActive ? 'navbar':'navbar fixed';
        if(isSidebarActive)  
            position =  (window.pageYOffset >= 30)?'navbar fixed':'navbar';
        
        setPosition(position);
    }

    // Scroll listener
    function handleScroll()
    {
        const category = getCurrentSectionName() || items[0].name;
        changeItemActiveState(category);
        changePosition();
    }
    
    // Add and remove scroll listeners 
    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
        return () => 
        {
            window.removeEventListener('scroll',handleScroll)
        };
    });


    function changeItemActiveState(current_active)
    {
        let active_item;
        // Change active item
        setItems(items.map((item) =>
        {
            if(current_active === item.name)
            {
                active_item = item;
                return {...item,active:true};
            };
            return {...item,active:false};
        }));
        return active_item;
    }

   

    function handleItemClick(event)
    {
        const current_active = event.target.firstChild.data;
        const active_item = changeItemActiveState(current_active);
        // Scroll to the clicked category
        document.getElementsByClassName(active_item.position)[0].scrollIntoView({ behavior: 'smooth' });
    }
  

    function clickSidebarHandler()
    {
        setSidebarActive(!sidebarActive);
        changePosition(true);
    }

    return(
    < >
        <animated.div style={fadeIn} className={position}>
            <div className='logo'>FAST TRAVEL</div>
            <div className="nav-items">
                {items.map((item,key) =>
                {
                    const class_name = item.active ? 'nav-item active':'nav-item';
                    return <animated.a style={fadeIn} className={class_name} key={key} onClick={handleItemClick}>{item.name}</animated.a>
                })}
            </div>
            <div className="icon-menu-wrapper">
                <IconMenu className="icon-menu" size={37} onClick={clickSidebarHandler}/>
            </div>
        </animated.div>
        <Sidebar isActive={sidebarActive}>
            {items.map((item,key) =>
                {
                    const class_name = item.active ? 'nav-item active':'nav-item';
                    return <a className={class_name} key={key} onClick={handleItemClick}>{item.name}</a>
                })}
        </Sidebar>
    </>
    );
}





export default Navbar;