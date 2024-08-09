import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';
import QRCode from 'react-qr-code';

import './CreateUserForm.scss';

import InfoIcon from './assets/info.svg?jsx';

import {createUser} from '../../../../api/users';

import {validateEmail, validateSimpleRequired} from '../../../../helpers/validation';

const CreateUserForm = () => {
    const [key, setKey] = useState(null);
    const [userLink, setUserLink] = useState(null);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: 'all',
        defaultValues: {
            password: '',
            name: '',
            surname: '',
            patronymic: '',
            email: '',
            phone: '',
            address: '',
            photos: null,
            videos: null,
        },
    });

    const fieldDescription = {
        password: 'Пароль пользователя',
        name: 'Имя пользователя',
        surname: 'Фамилия пользователя',
        patronymic: 'Отчество пользователя',
        email: 'Емейл должен быть написан в стандартном формате и содержать в себе символ "@"',
        phone: 'Телефон пользователя должен начинаться с +7',
        address: 'Адрес проживания',
        photos: 'Фотографии',
        videos: 'Видео',
    };

    const onSubmit = (data) => {
        const formData = new FormData();
        const {photos, videos} = data;

        // For simple fields
        Object.entries(data).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value);
            }
        });

        // For complex field
        if (photos && photos.length) {
            for (let i = 0; i < photos.length; i++) {
                formData.append('photos', photos[i]);
            }
        }

        // For complex field
        if (videos && videos.length) {
            for (let i = 0; i < videos.length; i++) {
                formData.append('videos', videos[i]);
            }
        }

        createUser(formData)
            .then((resp) => {
                // eslint-disable-next-line no-undef
                const clientHost = __CONFIG.connections.CLIENT_HOST;
                const totalLink = `${clientHost}/auth/${resp.data.data.key}?id=${resp.data.data.id}`;

                setKey(resp.data.data.key);
                setUserLink(totalLink);
            })
            .catch((err) => console.error(err));
    };

    return (
        <>
            <div className="create-user-form">
                <div
                    className="cheat"
                    onClick={() => {
                        onSubmit({
                            name: 'Ololo',
                            surname: 'LOL',
                            patronymic: 'Lolovich',
                            phone: '+79787787878',
                            email: 'ololo@lol.com',
                            address:
                                'Улица Ололовича Оловского, оголо магазина "Луковица", дом 500, квартира 700',
                        });
                    }}
                >
                    <InfoIcon />
                </div>
                <div className="create-user-form__row">
                    <div className="create-user-form__header">Создание нового пользователя</div>
                    <div className="create-user-form__body">
                        <form
                            className="create-user-form__body default-form"
                            method="post"
                            encType="multipart/form-data"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="default-form__input-wrapper update-user-form__input">
                                <div
                                    className="update-user-form__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.password, {
                                            icon: 'ℹ️',
                                            duration: 1500,
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <input
                                    className="default-form__input"
                                    placeholder="Пароль"
                                    {...register('password')}
                                />
                            </div>
                            <div className="default-form__input-wrapper create-user-form__input">
                                <div
                                    className="create-user-form__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.name, {
                                            icon: 'ℹ️',
                                            duration: 1500,
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <input
                                    className="default-form__input"
                                    placeholder="Имя"
                                    {...register('name', {
                                        validate: (value) => validateSimpleRequired(value, true),
                                    })}
                                />
                                {errors.name && (
                                    <span className="default-form__error-message">
                                        {/* {errors.name?.message} */}
                                        обязательное поле
                                    </span>
                                )}
                            </div>
                            <div className="default-form__input-wrapper create-user-form__input">
                                <div
                                    className="create-user-form__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.surname, {
                                            icon: 'ℹ️',
                                            duration: 1500,
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <input
                                    className="default-form__input"
                                    placeholder="Фамилия"
                                    {...register('surname', {
                                        validate: (value) => validateSimpleRequired(value, true),
                                    })}
                                />
                                {errors.surname && (
                                    <span className="default-form__error-message">
                                        {errors.surname?.message}
                                    </span>
                                )}
                            </div>
                            <div className="default-form__input-wrapper create-user-form__input">
                                <div
                                    className="create-user-form__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.patronymic, {
                                            icon: 'ℹ️',
                                            duration: 1500,
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <input
                                    className="default-form__input"
                                    placeholder="Отчество"
                                    {...register('patronymic', {
                                        validate: (value) => validateSimpleRequired(value, true),
                                    })}
                                />
                                {errors.patronymic && (
                                    <span className="default-form__error-message">
                                        {errors.patronymic?.message}
                                    </span>
                                )}
                            </div>
                            <div className="default-form__input-wrapper create-user-form__input">
                                <div
                                    className="create-user-form__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.phone, {
                                            icon: 'ℹ️',
                                            duration: 1500,
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <input
                                    className="default-form__input"
                                    placeholder="Телефон"
                                    {...register('phone', {
                                        validate: (value) => validateSimpleRequired(value, true),
                                    })}
                                />
                                {errors.phone && (
                                    <span className="default-form__error-message">
                                        {errors.phone?.message}
                                    </span>
                                )}
                            </div>
                            <div className="default-form__input-wrapper create-user-form__input">
                                <div
                                    className="create-user-form__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.email, {
                                            icon: 'ℹ️',
                                            duration: 1500,
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <input
                                    className="default-form__input"
                                    placeholder="Почта"
                                    {...register('email', {
                                        validate: (value) => validateEmail(value, true),
                                    })}
                                />
                                {errors.email && (
                                    <span className="default-form__error-message">
                                        {errors.email?.message}
                                    </span>
                                )}
                            </div>
                            <div className="default-form__input-wrapper create-user-form__input">
                                <div
                                    className="create-user-form__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.address, {
                                            icon: 'ℹ️',
                                            duration: 1500,
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <input
                                    className="default-form__input"
                                    placeholder="Адрес"
                                    {...register('address', {
                                        validate: (value) => validateSimpleRequired(value, true),
                                    })}
                                />
                                {errors.email && (
                                    <span className="default-form__error-message">
                                        {errors.address?.message}
                                    </span>
                                )}
                            </div>
                            <div className="default-form__input-wrapper create-user-form__input">
                                <div
                                    className="create-user-form__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.photos, {
                                            icon: 'ℹ️',
                                            duration: 1500,
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <input
                                    type="file"
                                    id="photos"
                                    multiple
                                    accept=".jpg, .jpeg, .png"
                                    className="default-form__input"
                                    placeholder="Фотографии"
                                    {...register('photos')}
                                />
                                {errors.photos && (
                                    <span className="default-form__error-message">
                                        {errors.photos?.message}
                                    </span>
                                )}
                            </div>
                            <div className="default-form__input-wrapper create-user-form__input">
                                <div
                                    className="create-user-form__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.videos, {
                                            icon: 'ℹ️',
                                            duration: 1500,
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <input
                                    type="file"
                                    id="videos"
                                    accept=".mp4"
                                    multiple
                                    className="default-form__input"
                                    placeholder="Видео"
                                    {...register('videos')}
                                />
                                {errors.videos && (
                                    <span className="default-form__error-message">
                                        {errors.videos?.message}
                                    </span>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="default-form__submit-btn create-user-form__submit-btn"
                            >
                                Создать
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {userLink && (
                <div className="create-user-form__qr">
                    <QRCode
                        size={256}
                        style={{height: 'auto', maxWidth: '100%', width: '100%'}}
                        value={userLink}
                        viewBox={`0 0 256 256`}
                    />
                </div>
            )}
            {key && (
                <div className="create-user-form__key">
                    <p>Ваш уникальный ключ:</p>
                    <span>{key}</span>
                </div>
            )}
        </>
    );
};

export default CreateUserForm;
