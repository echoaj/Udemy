
class App extends React.Component{

    item() {
        let items = ["🍉", "🍓", "🍇"]
        let selection = items[Math.floor(Math.random()*items.length)];
        return selection
    }

    render(){
        return (
            <div>
                <h1>CASINO</h1>
                <Machine s1={this.item()} s2={this.item()} s3={this.item()} id="1"/>
                <Machine s1={this.item()} s2={this.item()} s3={this.item()} id="2"/>
                <Machine s1={this.item()} s2={this.item()} s3={this.item()} id="3"/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))