import React, {Component} from 'react';

class Link extends Component {
    
    render() {
        // const{
        //     author: { 
        //       name, 
        //       location: { city },
        //     },
        // } = this.props;
        
        return (
            <div>
                <div>
                    {this.props.link.description} ({this.props.link.url})
                </div>
            </div>
        )
    }
}

export default Link;