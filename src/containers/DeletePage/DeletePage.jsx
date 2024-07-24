import React from 'react';

import './style/DeletePage.scss';

import DeleteUserForm from './elements/DeleteUserForm/DeleteUserForm';

const DeletePage = () => {
    return (
        <div className="delete-page">
            <DeleteUserForm />
        </div>
    );
};

export default DeletePage;
