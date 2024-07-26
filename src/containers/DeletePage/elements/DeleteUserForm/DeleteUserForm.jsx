import React from 'react';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';

import './style/DeleteUserForm.scss';

import InfoIcon from './assets/info.svg?jsx';

import {deleteUser} from '../../../../api/users';

const DeleteUserForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        mode: 'all',
        defaultValues: {
            key: '',
        },
    });

    const fieldDescription = {
        key: 'Уникальный ключ пользователя',
    };

    const onSubmit = (data) => {
        deleteUser(data).then(() => reset());
    };

    return (
        <>
            <div className="delete-user-form">
                <div className="delete-user-form__row">
                    <div className="delete-user-form__header">Удаление пользователя</div>
                    <div className="delete-user-form__body">
                        <form
                            className="delete-user-form__body default-form"
                            method="post"
                            encType="multipart/form-data"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="default-form__input-wrapper delete-user-form__input">
                                <div
                                    className="delete-user-form__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.key, {
                                            icon: 'ℹ️',
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <input
                                    className="default-form__input"
                                    placeholder="key"
                                    {...register('key')}
                                />
                                {errors.key && (
                                    <span className="default-form__error-message">
                                        {errors.key?.message}
                                        обязательное поле
                                    </span>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="default-form__submit-btn delete-user-form__submit-btn"
                            >
                                Удалить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteUserForm;
