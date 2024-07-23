import React from 'react';

import './style/Loader';

import Spinner from './assets/spinner.svg?jsx';
import WorldIcon from './assets/world.svg?jsx';

const Loader = () => {
    return (
        <div className="loader">
            <Spinner />
            <div className="loader__extra-layer">
                <WorldIcon />
            </div>
        </div>
    );
};

export default Loader;
