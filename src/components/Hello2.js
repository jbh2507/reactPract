import React, {Component} from 'react'

class Hello2 extends Component{

    constructor(){
        super()
        this.state = {count: 1}
    }

    handleClick = () => {
        this.setState({count: ++this.state.count})
    }

    render(){
        return (
            <>
            <h1>Hello {this.state.count}!</h1>
            <button onClick={this.handleClick}>+</button>
            <button>-</button>
            </>
        )
    }
}

export default Hello2