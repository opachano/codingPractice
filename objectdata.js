let movies = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  },
  {
    title: 'The Godfather',
    year: '1972',
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    rate: '9.2'
  },
  {
    title: 'The Godfather: Part II',
    year: '1974',
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.0'
  },
  {
    title: 'The Dark Knight',
    year: '2008',
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    rate: '9.0'
  },
  {
    title: '12 Angry Men',
    year: '1957',
    director: 'Sidney Lumet',
    duration: '1h 36min',
    genre: ['Crime', 'Drama'],
    rate: '8.9'
  },
  {
    title: 'Schindler\'s List',
    year: '1993',
    director: 'Steven Spielberg',
    duration: '3h 15min',
    genre: ['Biography', 'Drama', 'History'],
    rate: '8.9'
  },
  {
    title: 'Pulp Fiction',
    year: '1994',
    director: 'Quentin Tarantino',
    duration: '2h 34min',
    genre: ['Crime', 'Drama'],
    rate: '8.9'
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: '2003',
    director: 'Peter Jackson',
    duration: '3h 21min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    rate: '8.9'
  },
  {
    title: 'Il buono, il brutto, il cattivo',
    year: '1966',
    director: 'Sergio Leone',
    duration: '3h 2min',
    genre: ['Western'],
    rate: '8.9'
  },
  {
    title: 'Fight Club',
    year: '1999',
    director: 'David Fincher',
    duration: '2h 19min',
    genre: ['Drama'],
    rate: '8.8'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: '2001',
    director: 'Peter Jackson',
    duration: '2h 58min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    rate: '8.8'
  },
  {
    title: 'Forrest Gump',
    year: '1994',
    director: 'Robert Zemeckis',
    duration: '2h 22min',
    genre: ['Comedy', 'Drama', 'Romance'],
    rate: '8.8'
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: '1980',
    director: 'Irvin Kershner',
    duration: '2h 4min',
    genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    rate: '8.8'
  },
  {
    title: 'Inception',
    year: '2010',
    director: 'Christopher Nolan',
    duration: '2h 28min',
    genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
    rate: '8.8'
  },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: '2002',
    director: 'Peter Jackson',
    duration: '2h 59min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    rate: '8.7'
  },
  {
    title: 'One Flew Over the Cuckoo\'s Nest',
    year: '1975',
    director: 'Milos Forman',
    duration: '2h 13min',
    genre: ['Drama'],
    rate: '8.7'
  },
  {
    title: 'Goodfellas',
    year: '1990',
    director: 'Martin Scorsese',
    duration: '2h 26min',
    genre: ['Crime', 'Drama'],
    rate: '8.7'
  },
  {
    title: 'The Matrix',
    year: '1999',
    director: 'Lana Wachowski',
    duration: '2h 16min',
    genre: ['Action', 'Sci-Fi'],
    rate: '8.7'
  },
  {
    title: 'Shichinin no samurai',
    year: '1954',
    director: 'Akira Kurosawa',
    duration: '3h 27min',
    genre: ['Adventure', 'Drama'],
    rate: '8.7'
  },
  {
    title: 'Star Wars',
    year: '1977',
    director: 'George Lucas',
    duration: '2h 1min',
    genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    rate: '8.7'
  },
  {
    title: 'Cidade de Deus',
    year: '2002',
    director: 'Fernando Meirelles',
    duration: '2h 10min',
    genre: ['Crime', 'Drama'],
    rate: '8.7'
  },
  {
    title: 'Se7en',
    year: '1995',
    director: 'David Fincher',
    duration: '2h 7min',
    genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
    rate: '8.6'
  },
  {
    title: 'The Silence of the Lambs',
    year: '1991',
    director: 'Jonathan Demme',
    duration: '1h 58min',
    genre: ['Crime', 'Drama', 'Thriller'],
    rate: '8.6'
  },
  {
    title: 'It\'s a Wonderful Life',
    year: '1946',
    director: 'Frank Capra',
    duration: '2h 10min',
    genre: ['Drama', 'Family', 'Fantasy'],
    rate: '8.6'
  },
  {
    title: 'La vita è bella',
    year: '1997',
    director: 'Roberto Benigni',
    duration: '1h 56min',
    genre: ['Comedy', 'Drama', 'War'],
    rate: '8.6'
  },
  {
    title: 'The Usual Suspects',
    year: '1995',
    director: 'Bryan Singer',
    duration: '1h 46min',
    genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
    rate: '8.6'
  },
  {
    title: 'Léon',
    year: '1988',
    director: 'Luc Besson',
    duration: '1h 50min',
    genre: ['Crime', 'Drama', 'Thriller'],
    rate: '8.6'
  },
  {
    title: 'Saving Private Ryan',
    year: '1998',
    director: 'Steven Spielberg',
    duration: '2h 49min',
    genre: ['Drama', 'War'],
    rate: '8.6'
  },
  {
    title: 'Sen to Chihiro no kamikakushi',
    year: '2001',
    director: 'Hayao Miyazaki',
    duration: '2h 5min',
    genre: ['Animation', 'Adventure', 'Family', 'Fantasy', 'Mystery'],
    rate: '8.6'
  },
  {
    title: 'American History X',
    year: '1998',
    director: 'Tony Kaye',
    duration: '1h 59min',
    genre: ['Crime', 'Drama'],
    rate: '8.5'
  },
  {
    title: 'C\'era una volta il West',
    year: '1968',
    director: 'Sergio Leone',
    duration: '2h 44min',
    genre: ['Western'],
    rate: '8.6'
  },
  {
    title: 'Interstellar',
    year: '2014',
    director: 'Christopher Nolan',
    duration: '2h 49min',
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    rate: '8.6'
  },
  {
    title: 'Psycho',
    year: '1960',
    director: 'Alfred Hitchcock',
    duration: '1h 49min',
    genre: ['Horror', 'Mystery', 'Thriller'],
    rate: '8.5'
  },
  {
    title: 'The Green Mile',
    year: '1999',
    director: 'Frank Darabont',
    duration: '3h 9min',
    genre: ['Crime', 'Drama', 'Fantasy', 'Mystery'],
    rate: '8.5'
  },
  {
    title: 'Casablanca',
    year: '1942',
    director: 'Michael Curtiz',
    duration: '1h 42min',
    genre: ['Drama', 'Romance', 'War'],
    rate: '8.5'
  },
  {
    title: 'City Lights',
    year: '1931',
    director: 'Charles Chaplin',
    duration: '1h 27min',
    genre: ['Comedy', 'Drama', 'Romance'],
    rate: '8.6'
  },
  {
    title: 'Intouchables',
    year: '2011',
    director: 'Olivier Nakache',
    duration: '1h 52min',
    genre: ['Biography', 'Comedy', 'Drama'],
    rate: '8.6'
  },
  {
    title: 'Modern Times',
    year: '1936',
    director: 'Charles Chaplin',
    duration: '1h 27min',
    genre: ['Comedy', 'Drama', 'Family', 'Romance'],
    rate: '8.5'
  },
  {
    title: 'Raiders of the Lost Ark',
    year: '1981',
    director: 'Steven Spielberg',
    duration: '1h 55min',
    genre: ['Action', 'Adventure'],
    rate: '8.5'
  },
  {
    title: 'The Pianist',
    year: '2002',
    director: 'Roman Polanski',
    duration: '2h 30min',
    genre: ['Biography', 'Drama', 'Music', 'War'],
    rate: '8.5'
  },
  {
    title: 'The Departed',
    year: '2006',
    director: 'Martin Scorsese',
    duration: '2h 31min',
    genre: ['Crime', 'Drama', 'Thriller'],
    rate: '8.5'
  },
  {
    title: 'Rear Window',
    year: '1954',
    director: 'Alfred Hitchcock',
    duration: '1h 52min',
    genre: ['Mystery', 'Thriller'],
    rate: '8.5'
  },
  {
    title: 'Terminator 2: Judgment Day',
    year: '1991',
    director: 'James Cameron',
    duration: '2h 17min',
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    rate: '8.5'
  },
  {
    title: 'Back to the Future',
    year: '2003',
    director: 'Robert Zemeckis',
    duration: '1h 56min',
    genre: ['Adventure', 'Comedy', 'Sci-Fi'],
    rate: '9.5'
  },
  {
    title: 'Whiplash',
    year: '2003',
    director: 'Damien Chazelle',
    duration: '1h 47min',
    genre: ['Drama', 'Music'],
    rate: '9.5'
  },
  {
    title: 'Gladiator',
    year: '2003',
    director: 'Ridley Scott',
    duration: '2h 35min',
    genre: ['Action', 'Adventure', 'Drama'],
    rate: '9.5'
  },
  {
    title: 'The Prestige',
    year: '1993',
    director: 'Christopher Nolan',
    duration: '2h 10min',
    genre: ['Drama', 'Mystery', 'Sci-Fi', 'Thriller'],
    rate: '8.5'
  },
  {
    title: 'The Lion King',
    year: '1994',
    director: 'Roger Allers',
    duration: '1h 28min',
    genre: ['Animation', 'Adventure', 'Drama', 'Family', 'Musical'],
    rate: '8.5'
  },
  {
    title: 'Memento',
    year: '2000',
    director: 'Christopher Nolan',
    duration: '1h 53min',
    genre: ['Mystery', 'Thriller'],
    rate: '8.5'
  },
  {
    title: 'Apocalypse Now',
    year: '1979',
    director: 'Francis Ford Coppola',
    duration: '2h 27min',
    genre: ['Drama', 'War'],
    rate: '8.5'
  },
  {
    title: 'Alien',
    year: '1971',
    director: 'Ridley Scott',
    duration: '1h 57min',
    genre: ['Horror', 'Sci-Fi'],
    rate: '9.2'
  },
  ]

function turnHoursToMinutes(arr) {
  
  return arr.map(movie => {

    if (movie.duration.charAt(1) === "h") {

      let tempDuration = movie.duration;
      let hours = parseInt(tempDuration, 10) * 60;
      movie.duration = hours;     
      if (parseInt(tempDuration.substr(2), 10)) {

      let minutes = parseInt(tempDuration.substr(2), 10);
      movie.duration += minutes;
    }
      return movie
    } else {
      let tempDuration = movie.duration;
      let minutes = parseInt(tempDuration, 10);
      movie.duration = minutes;
      return movie
    }
  });

}

// Get the average of all rates with 2 decimals 

function ratesAverage(arr) {

  let average = arr.reduce((total, movie) => {
    return total + Number(movie.rate);
    }, 0)/arr.length

    return Number(average.toFixed(2));
};

// Get the average of Drama Movies

function dramaMoviesRate(arr) {

  let filteredArray = arr.filter(movie => {
    return movie.genre.indexOf("Drama") !== -1;
  });
  if (!filteredArray.length) {
    return undefined
  }

  return Number(ratesAverage(filteredArray).toFixed(2));

};

// Order by time duration, in growing order

function orderByDuration(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let resultArray = turnHoursToMinutes(arr);
  resultArray.sort((a, b) => {
    if (Number(a.duration) > Number(b.duration)) {
        return 1;
    }
    if (Number(a.duration) < Number(b.duration)) {
      return -1
    }  
    if (Number(a.duration) === Number(b.duration)) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
    }
    return 0;
  })
  return resultArray;
}

function howManyMovies(arr) {

  let filteredArray = arr.filter(movie => {
    return movie.genre.indexOf("Drama") !== -1;
  });
  return filteredArray.filter(movie => {
    return movie.director.indexOf("Steven Spielberg") !== -1;
  }).length;
}

function orderAlphabetically(arr) {
  let resultArray = arr.sort((a, b) => {
    if (a.title > b.title) {
        return 1;
    }
    if (a.duration < b.duration) {
      return -1
    } 
   return 0;
   
})
  return resultArray.slice(0, 20);
}



function bestYearAvg(arr) {

  if (arr.length === 0) {
    return undefined
  } else if (arr.length === 1) {
    return `The best year was ${arr[0].year} with an average rate of ${arr[0].rate}`;
  }

  function groupBy(arr, key) {
    return arr.reduce((x, y) => {
      (x[y[key]] = x[y[key]] || []).push(y);
      return x;
    }, {});
  };

  let moviesByYear = groupBy(arr, "year");
  let yearsArr = Object.keys(moviesByYear);
  let ratesArr = [];

  yearsArr.map(year => {
    ratesArr.push({"year":year, "rate":ratesAverage(moviesByYear[year])})
    return year 
  });

  let result = ratesArr.reduce((x, y) => {
    if(x.rate > y.rate) {
      return x
    } else if(y.rate > x.rate) {
      return y
    } else if (x.year > y.year) {
      return y
    } else return x;
  });
    return `The best year was ${result.year} with an average rate of ${result.rate}`
};


console.log(howManyMovies(movies));