import React, { use } from 'react';

const Contries = ({ContriesPromise}) => {
    const ContrieS = use(ContriesPromise);
    return (
        <div>
            <h1> BANGLADESH</h1>
        </div>
    );
};

export default Contries;