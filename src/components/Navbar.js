import {useState,useEffect} from 'react'




function Navbar()
{
    const [position,setPosition] = useState('navbar');
    const [items,setItems] = useState([
        {name:'ABOUT',position:'slider',active:true},
        {name:'THINGS TO DO',position:'footer',active:false},
    ]);



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


    // Scroll listener
    function handleScroll()
    {
        const category = getCurrentSectionName() || 'ABOUT';
        changeItemActiveState(category);
        if(window.pageYOffset >= 30)
        {
            setPosition('navbar fixed');
        }
        else
        {
            setPosition('navbar');
        }
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
            if(current_active == item.name)
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


    return(
    <div className={position}>
        <div className='logo'>FAST TRAVEL</div>
        <div className="nav-items">
            {items.map((item) =>
            {
                const class_name = item.active ? 'nav-item active':'nav-item';
                return <a className={class_name} onClick={handleItemClick}>{item.name}</a>
            })}
        </div>
    </div>
    );
}

export default Navbar;