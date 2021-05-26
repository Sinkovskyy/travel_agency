import React from 'react'
import data from '../data/images.json'
import {Spring,animated} from "react-spring"

// generate images 
function* image_generator()
{
    while(true)
    {
        for(const [,url] of Object.entries(data))
        {
            yield url;
        }
    }
}


class Slidebar extends React.Component
{

    slider_time = 7000;
    constructor(props)
    {
        super(props);
        this.generator = image_generator();
        this.state = {image:this.generator.next().value};

    }

    nextImage()
    {
        this.setState({
            image: this.generator.next().value
        });
    }

    componentDidMount()
    {
        this.timer = setInterval(
            () => this.nextImage(),
            this.slider_time
        );
    }

    componentWillUnmount() 
    {
        clearInterval(this.timer);
    }

    render()
    {  

        const generator = image_generator();

        

        return(
            <Spring
            config={{duration:1000}}
            from={{opacity:0}}
            to={{opacity:1}}
            >
            { styles => 
            (
                <div className='sliderbar' 
                style={{backgroundImage: `url(${this.state.image})`}}>
                <animated.div style={styles} className='content'>
                    <h1>BALI ISLAND</h1>
                    <p>You’ll always have fascinating places to be and friendly people to see.</p>
                    <button>Starting from just $399</button>
                </animated.div>
                </div>
            )
            }
            </Spring>
        );
    }
}


export default Slidebar;