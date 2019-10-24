import React, { Component } from 'react';
import HOC from './HOC';
// import ReverseHOC from './ReverseHOC';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        console.log('item componentWillMount');
    }

    componentDidMount() {
        console.log('item componentDidMount');
    }

    render() {
        console.log('item render');
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/App.js</code> and save to reload. </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Learn React</a>
                </header>
            </div>
        );
    }
}

export default HOC(App);
// export default ReverseHOC(App);