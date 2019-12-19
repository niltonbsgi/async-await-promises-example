import React from 'react';

class FetchAsyncAwait extends React.PureComponent{
    constructor(){
        super();
        this.state = { data: [] }
    }

    async componentDidMount(){
        debugger
        const response = await fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10');
        const json = await response.json();
        this.setState({ data: json})
    }

    render(){
        return (
        <div>
            <ul>
            <h3>With Async Await</h3>
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

export default FetchAsyncAwait