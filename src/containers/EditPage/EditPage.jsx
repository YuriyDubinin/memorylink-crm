import React from 'react';

import './style/EditPage.scss';

import UpdateUserForm from './elements/UpdateUserForm/UpdateUserForm';

const EditPage = () => {
    return (
        <div className="edit-page">
            <UpdateUserForm />
        </div>
    );
};

export default EditPage;