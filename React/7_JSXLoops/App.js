
class App extends React.Component{

    render(){
        return (
            <div>
                <Friend
                name="Amanda"
                hobbies={["Programming", "Drawing", "Singing", "Dancing", "Biking"]}
                />

                <Friend
                name="Nick"
                hobbies={["Video Games", "Basketball", "Biking"]}
                />

                <Friend
                name="Oliver"
                hobbies={["Clubbing", "Football", "Teaching", "Skiing", "Hiking", "Swimming", "Birding"]}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))