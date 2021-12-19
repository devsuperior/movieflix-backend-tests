import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const ButtonLogin = ({ text }: Props) => (
    <div className="default-button">
        <button className="btn btn-primary btn-login">
           {text}
        </button>
    </div>
);

export default ButtonLogin;