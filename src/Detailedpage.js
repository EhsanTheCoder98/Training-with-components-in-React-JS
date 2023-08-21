import React from 'react';
import { useParams } from 'react-router-dom';

const Detailedpage = () => {
    const params = useParams();
    console.log(params);

    return (
        <div>
            <h1>Details product NO. {params.id}</h1>
        </div>
    );
};

export default Detailedpage;