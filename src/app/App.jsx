import React, { Component } from 'react';

import cat from '../assets/images/cat.jpg';
import dog from '../assets/images/dog.png';
import dogs from '../assets/images/dogs.gif'

const hello = () => {
	return (
		<div className="container">
			<div className="image-wrapper">
				<img src={cat} className="image-wrapper__image" />
			</div>
			<div className="image-wrapper">
				<img src={dog} className="image-wrapper__image" />
			</div>
			<div className="image-wrapper">
				<img src={dogs} className="image-wrapper__image" />
			</div>

			<h1>Hello from my React Component!</h1>
		</div>
	)
}

export default hello;