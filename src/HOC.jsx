import React, { Component } from 'react';

const HOC = (WrappedComponent) => class extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentWillMount() {
        console.log('super componentWillMount');
    }

    componentDidMount() {
        console.log('super componentDidMount');
    }

    render() { 
        console.log('super render');
        return (
            <WrappedComponent {...this.props} />
        );
    }
}
 
export default HOC;