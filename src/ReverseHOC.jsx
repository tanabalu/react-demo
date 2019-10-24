const ReverseHOC = (WrappedComponent) => class extends WrappedComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentWillMount() {
        console.log('super componentWillMount');
        super.componentWillMount();
    }

    componentDidMount() {
        console.log('super componentDidMount');
        super.componentDidMount();
    }

    render() { 
        console.log('super render');
        return (
            super.render()
        );
    }
}
 
export default ReverseHOC;