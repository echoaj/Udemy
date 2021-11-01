
// For props we traditionally use double quotes ex: props="item"

class App extends React.Component {
    render(){
        return (
            <div>
                <Hello to="Richard" from="Paul" num={5}/>
                <Hello to="Alex" from="Josh" num={8}/>
                <Hello to="Jackie"/>

                {/* Can pass ints, bools, lists, functions */}
                {/* <Hello num={5} list={4,5,3} bool={true} img="https//wwww.myimage.com/> */}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))