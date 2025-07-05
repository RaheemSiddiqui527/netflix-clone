export interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  adult: boolean;
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
  vote_count: number;
}

// Mock movie data with reliable image URLs
export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "The Dark Knight",
    backdrop_path: "https://picsum.photos/1920/1080?random=1",
    poster_path: "https://picsum.photos/500/750?random=1",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    release_date: "2008-07-18",
    vote_average: 8.5,
    genre_ids: [28, 80, 18],
    adult: false,
    original_language: "en",
    original_title: "The Dark Knight",
    popularity: 123.456,
    video: false,
    vote_count: 12000
  },
  {
    id: 2,
    title: "Inception",
    backdrop_path: "https://picsum.photos/1920/1080?random=2",
    poster_path: "https://picsum.photos/500/750?random=2",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    release_date: "2010-07-16",
    vote_average: 8.3,
    genre_ids: [28, 878, 53],
    adult: false,
    original_language: "en",
    original_title: "Inception",
    popularity: 98.765,
    video: false,
    vote_count: 15000
  },
  {
    id: 3,
    title: "Interstellar",
    backdrop_path: "https://picsum.photos/1920/1080?random=3",
    poster_path: "https://picsum.photos/500/750?random=3",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    release_date: "2014-11-07",
    vote_average: 8.6,
    genre_ids: [18, 878],
    adult: false,
    original_language: "en",
    original_title: "Interstellar",
    popularity: 87.432,
    video: false,
    vote_count: 11000
  },
  {
    id: 4,
    title: "The Matrix",
    backdrop_path: "https://picsum.photos/1920/1080?random=4",
    poster_path: "https://picsum.photos/500/750?random=4",
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    release_date: "1999-03-31",
    vote_average: 8.7,
    genre_ids: [28, 878],
    adult: false,
    original_language: "en",
    original_title: "The Matrix",
    popularity: 76.543,
    video: false,
    vote_count: 13000
  },
  {
    id: 5,
    title: "Pulp Fiction",
    backdrop_path: "https://picsum.photos/1920/1080?random=5",
    poster_path: "https://picsum.photos/500/750?random=5",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    release_date: "1994-10-14",
    vote_average: 8.9,
    genre_ids: [80, 18],
    adult: false,
    original_language: "en",
    original_title: "Pulp Fiction",
    popularity: 65.432,
    video: false,
    vote_count: 14000
  },
  {
    id: 6,
    title: "The Avengers",
    backdrop_path: "https://picsum.photos/1920/1080?random=6",
    poster_path: "https://picsum.photos/500/750?random=6",
    overview: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    release_date: "2012-05-04",
    vote_average: 8.0,
    genre_ids: [28, 12, 878],
    adult: false,
    original_language: "en",
    original_title: "The Avengers",
    popularity: 89.123,
    video: false,
    vote_count: 16000
  },
  {
    id: 7,
    title: "Joker",
    backdrop_path: "https://picsum.photos/1920/1080?random=7",
    poster_path: "https://picsum.photos/500/750?random=7",
    overview: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
    release_date: "2019-10-04",
    vote_average: 8.4,
    genre_ids: [80, 18, 53],
    adult: false,
    original_language: "en",
    original_title: "Joker",
    popularity: 92.876,
    video: false,
    vote_count: 9500
  },
  {
    id: 8,
    title: "Spider-Man: No Way Home",
    backdrop_path: "https://picsum.photos/1920/1080?random=8",
    poster_path: "https://picsum.photos/500/750?random=8",
    overview: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    release_date: "2021-12-17",
    vote_average: 8.2,
    genre_ids: [28, 12, 878],
    adult: false,
    original_language: "en",
    original_title: "Spider-Man: No Way Home",
    popularity: 95.432,
    video: false,
    vote_count: 8500
  },
  {
    id: 9,
    title: "Black Widow",
    backdrop_path: "https://picsum.photos/1920/1080?random=9",
    poster_path: "https://picsum.photos/500/750?random=9",
    overview: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    release_date: "2021-07-09",
    vote_average: 6.7,
    genre_ids: [28, 12, 878],
    adult: false,
    original_language: "en",
    original_title: "Black Widow",
    popularity: 85.123,
    video: false,
    vote_count: 7500
  },
  {
    id: 10,
    title: "Thor: Ragnarok",
    backdrop_path: "https://picsum.photos/1920/1080?random=10",
    poster_path: "https://picsum.photos/500/750?random=10",
    overview: "Thor is imprisoned on the planet Sakaar, and must race against time to return to Asgard and stop Ragnarök.",
    release_date: "2017-11-03",
    vote_average: 7.9,
    genre_ids: [28, 12, 35],
    adult: false,
    original_language: "en",
    original_title: "Thor: Ragnarok",
    popularity: 78.456,
    video: false,
    vote_count: 9200
  },
  {
    id: 11,
    title: "Captain Marvel",
    backdrop_path: "https://picsum.photos/1920/1080?random=11",
    poster_path: "https://picsum.photos/500/750?random=11",
    overview: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war.",
    release_date: "2019-03-08",
    vote_average: 6.8,
    genre_ids: [28, 12, 878],
    adult: false,
    original_language: "en",
    original_title: "Captain Marvel",
    popularity: 72.789,
    video: false,
    vote_count: 8100
  },
  {
    id: 12,
    title: "Iron Man",
    backdrop_path: "https://picsum.photos/1920/1080?random=12",
    poster_path: "https://picsum.photos/500/750?random=12",
    overview: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    release_date: "2008-05-02",
    vote_average: 7.9,
    genre_ids: [28, 12, 878],
    adult: false,
    original_language: "en",
    original_title: "Iron Man",
    popularity: 88.234,
    video: false,
    vote_count: 11500
  },
  {
    id: 13,
    title: "Guardians of the Galaxy",
    backdrop_path: "https://picsum.photos/1920/1080?random=13",
    poster_path: "https://picsum.photos/500/750?random=13",
    overview: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    release_date: "2014-08-01",
    vote_average: 8.0,
    genre_ids: [28, 12, 35],
    adult: false,
    original_language: "en",
    original_title: "Guardians of the Galaxy",
    popularity: 82.567,
    video: false,
    vote_count: 10200
  },
  {
    id: 14,
    title: "Doctor Strange",
    backdrop_path: "https://picsum.photos/1920/1080?random=14",
    poster_path: "https://picsum.photos/500/750?random=14",
    overview: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
    release_date: "2016-11-04",
    vote_average: 7.5,
    genre_ids: [28, 12, 14],
    adult: false,
    original_language: "en",
    original_title: "Doctor Strange",
    popularity: 75.890,
    video: false,
    vote_count: 8900
  },
  {
    id: 15,
    title: "Ant-Man",
    backdrop_path: "https://picsum.photos/1920/1080?random=15",
    poster_path: "https://picsum.photos/500/750?random=15",
    overview: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero.",
    release_date: "2015-07-17",
    vote_average: 7.3,
    genre_ids: [28, 12, 35],
    adult: false,
    original_language: "en",
    original_title: "Ant-Man",
    popularity: 69.123,
    video: false,
    vote_count: 7800
  },
  {
    id: 16,
    title: "Captain America",
    backdrop_path: "https://picsum.photos/1920/1080?random=16",
    poster_path: "https://picsum.photos/500/750?random=16",
    overview: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a Super-Soldier serum.",
    release_date: "2011-07-22",
    vote_average: 6.9,
    genre_ids: [28, 12, 878],
    adult: false,
    original_language: "en",
    original_title: "Captain America: The First Avenger",
    popularity: 71.456,
    video: false,
    vote_count: 8600
  },
  {
    id: 17,
    title: "Deadpool",
    backdrop_path: "https://picsum.photos/1920/1080?random=17",
    poster_path: "https://picsum.photos/500/750?random=17",
    overview: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
    release_date: "2016-02-12",
    vote_average: 8.0,
    genre_ids: [28, 35, 878],
    adult: false,
    original_language: "en",
    original_title: "Deadpool",
    popularity: 89.789,
    video: false,
    vote_count: 12300
  },
  {
    id: 18,
    title: "X-Men",
    backdrop_path: "https://picsum.photos/1920/1080?random=18",
    poster_path: "https://picsum.photos/500/750?random=18",
    overview: "In a world where mutants exist and are discriminated against, two groups form for an inevitable clash: the supremacist Brotherhood, and the pacifist X-Men.",
    release_date: "2000-07-14",
    vote_average: 7.4,
    genre_ids: [28, 12, 878],
    adult: false,
    original_language: "en",
    original_title: "X-Men",
    popularity: 76.234,
    video: false,
    vote_count: 9100
  },
  {
    id: 19,
    title: "Fantastic Four",
    backdrop_path: "https://picsum.photos/1920/1080?random=19",
    poster_path: "https://picsum.photos/500/750?random=19",
    overview: "A group of astronauts gain superpowers after a cosmic radiation exposure and must use them to oppose the plans of their enemy, Doctor Victor Von Doom.",
    release_date: "2005-07-08",
    vote_average: 5.7,
    genre_ids: [28, 12, 878],
    adult: false,
    original_language: "en",
    original_title: "Fantastic Four",
    popularity: 62.567,
    video: false,
    vote_count: 6500
  },
  {
    id: 20,
    title: "Blade Runner",
    backdrop_path: "https://picsum.photos/1920/1080?random=20",
    poster_path: "https://picsum.photos/500/750?random=20",
    overview: "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to the earth seeking their creator.",
    release_date: "1982-06-25",
    vote_average: 8.1,
    genre_ids: [878, 53, 18],
    adult: false,
    original_language: "en",
    original_title: "Blade Runner",
    popularity: 84.890,
    video: false,
    vote_count: 13500
  }
];

// Category-specific movie lists
export const trendingMovies = mockMovies.slice(0, 12);
export const netflixOriginals = mockMovies.slice(5, 17);
export const topRated = mockMovies.slice(2, 14);
export const actionMovies = mockMovies.filter(movie => movie.genre_ids.includes(28)).slice(0, 12);
export const comedyMovies = mockMovies.slice(10, 15);
export const horrorMovies = mockMovies.slice(15, 20);
export const romanceMovies = mockMovies.slice(8, 13);
export const documentaries = mockMovies.slice(12, 17);