/*
                JSX In Depth
JSX is a simplistic way of generating React.createElement(component, props, ...children)

Example:
JSX:
    <MyButton color="blue" shadowSize={2}>
        Click Me
    </MyButton>
REACT:
    React.createElement(
        MyButton,
        {color: 'blue', shadowSize: 2},
        'Click Me'
    )

A software called babel is what complies JSX to React
https://babeljs.io    
*/

class Image1 extends React.Component{
    render(){
        return React.createElement("div", null, React.createElement("h1", null, "German Shepherd ", 1), React.createElement("img", {
                src: "https://s36700.pcdn.co/wp-content/uploads/2016/07/GSD-text-courtesy-Connie-Cabanela-600x497.jpg.webp"
              }));
        
    }
}

function Image2(){
    return (
        <div>
            <h1>German Shepherd {1}</h1>
            <img src="https://s36700.pcdn.co/wp-content/uploads/2016/07/GSD-text-courtesy-Connie-Cabanela-600x497.jpg.webp"/>
        </div>
    )
}

ReactDOM.render(<Image2 />, document.getElementById('root'));

/************************************ Insert JSX ******************************************/

function getMood(){
    const moods = ['Angry', 'Happy', 'Sad', "Jelous", "Curious", "Confused"]
    let min = 0;
    let max = moods.length;
    let index = Math.floor(Math.random() * (max-min)) + min
    return moods[index];
}

class JSXDemo extends React.Component{
    render(){
        return (
            <div>
                <h1>My current mood is: {getMood()}</h1>
            </div>
        )
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('next1'));