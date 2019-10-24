const ReverseHOC = (WrappedComponent) => class extends WrappedComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentWillMount() {
        console.log('super componentWillMount');
        super.componentWillMount();
        // super.componentDidMount();
    }

    componentDidMount() {
        console.log('super componentDidMount');
        super.componentDidMount();
        // super.componentWillMount();
    }

    render() { 
        console.log('super render');
        return (
            super.render()
        );
    }
}
 
export default ReverseHOC;