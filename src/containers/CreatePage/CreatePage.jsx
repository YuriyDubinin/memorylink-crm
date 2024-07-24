import React from 'react';

import './style/CreatePage.scss';

import CreateUserForm from './elements/CreateUserForm/CreateUserForm';

const CreatePage = () => {
    return (
        <div className="create-page">
            <CreateUserForm />
        </div>
    );
};

export default CreatePage;
