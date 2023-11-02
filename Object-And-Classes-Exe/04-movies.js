function movies(arr) {
    let allTheMovies = [];

    for (let command of arr) {
        if (command.includes('addMovie')) {

            let movieName = command.split('addMovie ')[1];
            let movieObject = { name: movieName };
            allTheMovies.push(movieObject);

        } else if (command.includes('directedBy')) {

            let [movieName, director] = command.split(' directedBy ');

            let movie = allTheMovies.find(movie => movie.name == movieName);

            if (movie) {
                movie.director = director;
            }

        } else if (command.includes('onDate')) {
            let [movieName, date] = command.split(' onDate ');

            let movie = allTheMovies.find(movie => movie.name == movieName);

            if (movie) {
                movie.date = date;
            }

        }
    }

    for (let movie of allTheMovies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);