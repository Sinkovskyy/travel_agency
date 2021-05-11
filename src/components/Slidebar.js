import React from 'react';
import data from '../images.json'


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

    slider_time = 5000;
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
            <div className='slider' 
            style={{backgroundImage: `url(${this.state.image})`}}
            >
            </div>
        );
    }
}


export default Slidebar;