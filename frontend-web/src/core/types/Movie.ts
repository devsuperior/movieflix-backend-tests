export type MoviesResponse = {
    content: Movie[];
    totalPages: number;
}

export type Movie = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genreId: string;
    genreName: string;
    reviews: Review[];
    genres: Genre[];
    
}

export type Review = {
    id: number;
    text: string;
    movieId: number;
    userId: User;
}

export type Genre = {
    id: number;
    name: string;
}

export type User = {
    id: number;
    name: string;
    email: string;
}

export type review = {
    userId: User;
}