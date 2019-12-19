import React from 'react';

class FetchPromises extends React.PureComponent{
    constructor(){
        super();
        this.state = { data: [] }
    }

    componentDidMount(){
        fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
            .then(response => response.json())
            .then(json => this.setState({ data: json}))

    }

    render(){
        return (
        <div>
            <ul>
            <h3>With Promises</h3>
                {
                    this.state.data.map((element, index) =>(
                        <li key={index}>
                            {element.name} : {element.price_usd}
                        </li>
                    ))
                }
            </ul>
        </div>
            )
    }
}

export default FetchPromises