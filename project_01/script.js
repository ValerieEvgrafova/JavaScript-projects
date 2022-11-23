'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?'),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// Код переписан ниже с использованием цикла

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?');

    if (a != null && b != null && a != '' && b != '' && a.length > 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB);

