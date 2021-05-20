const movies = [
    { title: "The Matrix", genre: "Sci-fi", releaseDate: 1999 },
    { title: "Lord of the Rings", genre: "Fantasy", releaseDate: 2001 },
    { title: "Avatar", genre: "Sci-fi", releaseDate: 2009 },
    { title: "Lalaland", genre: "Musical", releaseDate: 2016 },
    { title: "Harry Potter and the Chamber of Secrets", genre: "Fantasy", releaseDate: 2002 },
    { title: "Bohemian Rhapsody", genre: "Musical", releaseDate: 2018 },
    { title: "1917", genre: "Military", releaseDate: 2019 },
    { title: "Pulp Fiction", genre: "Crime", releaseDate: 1994 },
    { title: "The Joker", genre: "Thriller", releaseDate: 2019 }
];


/* EJERCICIOS */

// EJERCICIO 1: Devuelve el nombre de cada película utilizando forEach.
// SOLUCIÓN
movies.forEach(film => film.title)

// EJERCICIO 2: Devuelve el nombre de las películas que lanzadas antes de 2005.
// SOLUCIÓN
movies.forEach((film) => { 
    film.releaseDate < 2005 ? film.title : null;
});

// Ejercicio 3: Devuelve el nombre de las películas de género Fantasy. 
// SOLUCIÓN

// Ejercicio 4: Devuelve todas las películas en orden de su lanzamiento, de más antiguas a más recientes.
// Ejercicio 5: Devuelve la suma de todos los años utilizando reduce. Por ejemplo, Pulp Fiction y The Joker sumarían 4013.
// Ejercicio 6: Crea un nuevo objeto que contenga las propiedades title y genre y un método que devuelva estas propiedades. Utiliza destructuring. 
// Ejercicio 7: Crea una función que tome un número desconocido de arguments de tipo numérico y que devuelva su suma. 
// Ejercicio 8: Crea una función que tome un número desconocido de argumentos de cualquier tipo y los meta en un array y la devuelva.
// Ejercicio 9: Destructura la propiedad releaseDate del objeto Frozen.
