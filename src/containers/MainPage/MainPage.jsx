import React from 'react';

import './style/MainPage.scss';

import CreateUserForm from './components/CreateUserForm/CreateUserForm';

const MainPage = () => {
    return (
        <div className="main-page">
            <CreateUserForm />
        </div>
    );
};

export default MainPage;
