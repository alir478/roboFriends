import React from 'react';

const Card = ({name , id ,email}) => {
	return(
		<div className='card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`http://robohash.org/${id}`} alt="robot"/>
			<div>
				<h1>{name}</h1>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;