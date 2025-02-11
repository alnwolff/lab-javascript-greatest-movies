// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let directors = []

  arr.map (function (movie) {
    
    directors.push (movie.director)
    return directors
  })
  
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  
  const moviesCount = arr.filter (function (movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') != -1
  })
  return moviesCount.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {

  if (arr.length === 0) {
    return 0
  }
  
  const sum = arr.reduce (function (acc, val) {
    
    return acc + (val.score || 0)
  }, 0)
  
  const average = sum / arr.length
  return Math.round((average + Number.EPSILON) * 100) / 100
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  
  const onlyDrama = arr.filter (function (movie) {
    return movie.genre.indexOf('Drama') != -1
  })
  return scoresAverage(onlyDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const copy = JSON.parse(JSON.stringify(arr));
  
  const orderedYear = copy.sort (function (a,b) {
    
    if (a.year > b.year) {
      return 1
    } else if (a.year < b.year){
      return -1
    } else {
      if (a.title > b.title) {
        return 1
      } else if (a.title < b.title) {
        return -1
      }
    }
  })
  return orderedYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  const copy = JSON.parse(JSON.stringify(arr));
    
  const orderedTitles = copy.sort (function (a,b) {
    if (a.title > b.title) {
        return 1
      } else if (a.title < b.title) {
        return -1
      }
  })
  
  const first20Titles = orderedTitles.slice(0,20)

  const movies = first20Titles.map( function (movie) {
    
    return movie.title
  })
  return movies
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
