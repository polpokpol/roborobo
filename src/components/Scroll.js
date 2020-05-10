import React, { Component } from 'react';

const Scroll = (props) => {
	return(

		<div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
			{props.children}
		</div>
	);
}

// class Scroll extends Component{

// 	constructor(props){
// 		this.props = props;
// 	}

// 	render(){
// 		return(

// 			<div style={{ overflow: 'scroll', border: '5px solid black', height: '500px'}}>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// }





export default Scroll;