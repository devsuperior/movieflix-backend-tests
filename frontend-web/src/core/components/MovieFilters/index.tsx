import { Genre } from 'core/types/Movie';
import { makeRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import './styles.scss';

export type FilterForm = {
    genreId?: number;
 }
 
 type Props = {
    onSearch: (filter: FilterForm) => void;
 }

const MovieFilters = ({ onSearch }: Props) => {
    const [isLoadingGenre, setIsLoadingGenre] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
   
        setIsLoadingGenre(true);
        makeRequest({ url: '/genres' })
           .then(response => setGenres(response.data))
           .finally(() => setIsLoadingGenre(false));
     }, [])

     const handleChangeGenre = (genre: Genre) => {
       
        onSearch({ genreId:genre.id });
     }

    return (
            <Select
                isLoading={isLoadingGenre}
                options={genres} 
                getOptionLabel={(option: Genre) => option.name}
                getOptionValue={(option: Genre) => String(option.id)}
                className="filter-select-container"
                placeholder="Genres"
                inputId="genres"
                onChange={value => handleChangeGenre(value as Genre)}
            />   
    )
}

export default MovieFilters;
