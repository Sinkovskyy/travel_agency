import ApartmentsData from "../data/offers.json";



function Offers()
{
    
    return(
        <div className="offers">
            <h2>Hotels & Houses</h2>
            <p>On Bali there are so many variety of dwelling for everyone tastes.
             So if you want something exsotic be sure 
             that on Bali you will find what you are looking!</p>
            <div className="offer-frames"
            
            >
                {Object.keys(ApartmentsData).map(i => 
                {
                    return(
                        <div className="offer-frame" key={i}> 
                            <div className="image-container">
                                <img src={ApartmentsData[i].image}/>
                                <div className="layer"></div>
                                <button>Book now</button>
                            </div>
                            <h3>{ApartmentsData[i].title}</h3>
                            <h4>${ApartmentsData[i].price }\PER NIGHT</h4>
                        </div>
                        );
                })}
            </div>
        </div>
    );
}

export default Offers;