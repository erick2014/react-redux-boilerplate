require("./assets/stylesheets/styles.scss")

class Car {
	manufacturer(car) {
		document.write(`<div>I have a ${car}<div>`);
	}
}

const bmw = new Car();

bmw.manufacturer('bmw');