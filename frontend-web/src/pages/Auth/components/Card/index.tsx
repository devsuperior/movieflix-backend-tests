import React from 'react';
import './styles.scss';

type Props = {
    title: string;
    children: React.ReactNode;
}

const RotaCard = ({ title, children }: Props) => {
    return (
       <div className="card-base rota-card">
           <h1 className="rota-card-title">
               {title}
           </h1>
           {children}
       </div>
    )
}

export default RotaCard;