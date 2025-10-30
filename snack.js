/*Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?*/
/*

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name);
console.log(secondBurger.name );  /*

OUTPUT

Double Cheese Burger
Double Cheese Burger
1 oggetto 
*/ 


/*
const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // Salad
console.log(secondBurger.ingredients[0]); // Salad


/*P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?  3 oggetti  */


/*

const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 3 oggetti all'interno ci sono altrettanti oggetti quindi 9*/
/*

const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

/*
Qual è il metodo migliore per clonare l’oggetto chef, e perché?
RISPOSTA la shallow copy perchè esiste una funzione che non verrebbe copiata se fossero usate la deep copy con Json.stringlify e structuredClone
Qual è il metodo migliore per clonare l’oggetto restaurant, e perché clone?
RISPOSTA structuredClone perchè è pensato per copiare anche oggetti complessi come appunto date , se avessimo usato Json.stringlify new Date sarebbe restituito come stringa 
*/

const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const newRestaurant = {...hamburger.maker.restaurant};
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = {...hamburger};
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // Chef Hyur 
console.log(secondBurger.maker.name); //Chef Hyur 
console.log(hamburger.maker.restaurant.name); // Hyur's II
console.log(secondBurger.maker.restaurant.name); // Hyur's II

/*
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? hamburger maker restaurant newRestaurant secondBurger*/