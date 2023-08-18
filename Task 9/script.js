/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
	constructor(titleInput, directorInput, budgetInput) {
		this.title = titleInput;
		this.director = directorInput;
		this.budget = budgetInput;
	}

	wasExpensive() {
		return this.budget > 100_000_000;
	}
}

const movie1 = new Movie("title", "director", 100_000_001);
const movie2 = new Movie("title", "director", 99_000_000);
