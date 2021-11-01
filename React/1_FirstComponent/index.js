
// Define component
/*
class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
			</div>
		);
	}
}
*/

// Function Component
function Hello(){
	return (
		<div>
			<h1>Hello there!</h1>
			<h1>Hello there!</h1>
			<h1>Hello there!</h1>
		</div>
	);
}

/* Differneces between function and class component */
/* 
   Both can accept props and render content
   Difference is the way the syntax
   Historically function components could not be used for
   important features like State & Lifecycle Methods
   Class components more used that function component
   but that is changing.

   Class component: render method return JSX
   Function component: return JSX
*/



// We will render component "Hello", to div root id
ReactDOM.render(<Hello />, document.getElementById('root'));