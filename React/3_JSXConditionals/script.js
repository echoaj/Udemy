
function getNum(min, max){
    return Math.floor(Math.random() * ((max+1) - min)) + min;
}

class NumPicker extends React.Component{
    render(){
        const num = getNum(20, 25);
        let msg;

        if(num % 2 === 0){
            msg = 
            <div style={{backgroundColor:"rgb(30,205,100)"}}>
                <h2>EVEN Number</h2>
                <p>An even number when divided by 2 gives remainder 0.</p>
            </div>
        }else{
            msg = 
            <div style={{backgroundColor:"rgb(50,70,250)", color:"white"}}>
                <h2>ODD Number</h2>
                <p>An even number when divided by 2 gives remainder 1.</p>
            </div>
        }

        return (
            <div>
                <h1>Your number is ...{num}</h1>
                <p>{num === 21 ? 'Bad Luck': 'It\'s your lucky day.'}</p>
                {(num === 21 && <img src="https://c.tenor.com/Yl1l5qXLNjkAAAAd/bad-luck.gif"/>)
                || <img src="https://c.tenor.com/alCfKi9rBKIAAAAC/four-leaf-clover-lucky-charm.gif"/>}
                <hr/>
                <br/>
                {msg}
            </div>
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'))