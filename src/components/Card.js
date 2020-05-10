import React from 'react';


const Card = ({name, email, id} ) => {
	// const {name, email, id} = props;
	return(

	<div className='tc bg-light-green dib br3 ma2 pa3 grow shadow-5 bw2'>
		<img alt="photo" src={`https://robohash.org/${id}?200x200`} />
		<div>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	</div>
	);
}

export default Card;