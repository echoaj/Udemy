
class Hello extends React.Component {

    // To create a default prop you must define it exactly like down below.
    static defaultProps = {
        from: 'Anonymous',
        num:1
    }

    render(){
        let exclamations = "!".repeat(this.props.num)
        // You can't reassign a property. They are ReadOnly
        return <p>Hello how are you! from <b>{this.props.from}</b> to <b>{this.props.to}</b>{exclamations}</p>
        // <img src="this.props.img"/>
    }
}