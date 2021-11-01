
class Machine extends React.Component{
    render(){
        // Destructuring
        const {s1, s2, s3, id} = this.props;
        const status = (s1 === s2) && (s2 === s3)
        const textStyle = { textShadow: "2px 2px 10px #828282", 
                            fontSize: "35px",
                            lineHeight: "10px"};

        const statusColor = status ? "Machine-Winner" : "Machine-Looser";

        return (
            // In react, don't use class, use className
            <div className="Machine" style={{fontFamily:"cursive"}}>
                <h2>Slot Machine {id}</h2>
                <h3 style={textStyle}>{s1} {s2} {s3}</h3>
                <h3 className={statusColor}>You {status ? "Win" : "Loose"}</h3>
                <br/>
            </div>
        )
    }
}

/* Notes
HTML: calss
JSX: className
ex: <div className="..."

HTML: for
JSX: htmlfor
ex <input htmlfor="..."
*/