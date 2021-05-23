import ApartmentsData from "../data/offers.json";
import {AiOutlineLeft as Left,AiOutlineRight as Right} from "react-icons/ai";
import {useState} from "react";
import Map from './Map';



function InfoBar(props)
{

    const bars = [];

    for(let i = 0; i < props.length;i++)
    {
        const className = (props.activePosition == i) ? "active bar":"bar"; 
        bars[i] = <div key={i} className={className}></div>
    }

    return(
        <div className={props.className}>
          {bars.map((item) => item)}
        </div>
    );
}





function OfferFrame(props)
{


    const [imageIndex,setImageIndex] = useState(0);

    function leftClickHandler()
    {
        if(imageIndex == 0)
            setImageIndex(props.images.length - 1);
        else
            setImageIndex(imageIndex - 1);
    }

    function rightClickHandler()
    {
        if(imageIndex + 1 == props.images.length)
            setImageIndex(0);
        else
            setImageIndex(imageIndex + 1);
    }



    return(
        <div className="offer-frame"> 
            <div className="image-container">
                <img src={props.images[imageIndex]}/>
                <div className="layer"></div>
                <button className="book">Book now</button>
                <button className="slide left" onClick={leftClickHandler}><Left className="icon" /></button>
                <button className="slide right" onClick={rightClickHandler}><Right className="icon" /></button>
                <InfoBar className="slider-infobar" length={props.images.length} activePosition={imageIndex} />
            </div>
            <h3>{props.title}</h3>
            <h4>${props.price }\PER NIGHT</h4>
        </div>
    );

}


function Offers()
{
    

    return(
        <>
        <div className="offers" >
            <h2>Hotels & Apartments</h2>
            <p>On Bali there are so many variety of dwelling for everyone tastes.
             So if you want something exsotic be sure 
             that on Bali you will find what you are looking!</p>
            <div className="offer-frames">
                {Object.keys(ApartmentsData).map(i => 
                {
                    return(
                        <OfferFrame  key={i} title={ApartmentsData[i].title}
                             price={ApartmentsData[i].price} 
                             images={ApartmentsData[i].images} />
                        
                        );
                })}
            </div>

           
        </div>
        <Map/>
        </>
    );
}

export default Offers;