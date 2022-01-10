import React, { useState } from 'react';
import { makePrivateRequest } from 'core/utils/request';
import { useParams } from 'react-router';
import './styles.scss';
import MovieReviewLoader from 'pages/Movie/components/Loaders/MovieReviewLoader';
import ButtonLogin from 'core/components/ButtonLogin';

type FormState = {
    text: string;
    movieId: string;
    userId: string;
}

//type formData = { name: string };

type ParamsType = {
    movieId: string,
    userId: string;
}

const Form = () => {
    
    const { movieId, userId } = useParams<ParamsType>();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<FormState>({
        text: '',
        movieId,
        userId
    });

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const text = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [text]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const payload = {
            ...formData,
            reviews: [formData.text]
        }

        makePrivateRequest({ url: '/reviews', method: 'POST', data: payload })
    }

    return (
        <form onSubmit={handleSubmit}>
            {isLoading ? <MovieReviewLoader /> : (
                <>
                    <input
                        value={formData.text}
                        name="text"
                        type="text"
                        className="movie-input"
                        placeholder="Deixe sua avaliação aqui"
                        onChange={handleOnChange}
                    />
                    <div className="save-button">
                        <ButtonLogin text="SALVAR AVALIAÇÃO" />
                    </div>
                </>
            )}
        </form>
    )
}

export default Form;

