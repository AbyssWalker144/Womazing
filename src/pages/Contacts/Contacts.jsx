import React, {useState} from 'react';
import Caption from "../../components/UI/Caption";
import {useFormik} from "formik";
import schemas from "../../schemas/schemas";
import {Transition} from 'react-transition-group';

const Contacts = () => {
    const [modal, setModal] = useState(false);
    const {values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm} = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        onSubmit: () => {
            setModal(true);
            setTimeout(() => setModal(false), 5000)
            resetForm();
        },
        validationSchema: schemas,
    });

    const isFormFieldValid = (name) => !!(touched[name] && errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <p className="error-label">{errors[name]}</p>;
    };

    return (
        <div className="contacts">
            <Caption caption="Контакты"/>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2148.2875921700984!2d30.624896731218108!3d50.44201217310198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9177ad8af800b79!2zTWNEb25hbGTigJlz!5e0!3m2!1sru!2sru!4v1664378588063!5m2!1sru!2sru" width="100%" height="475"></iframe>
            </div>
            <div className="contacts-block flex">
                <div className="contacts-block__item">
                    <p className="title">Телефон</p>
                    <a href='tel:+380934455666' className="phone flex">+380934455666</a>
                </div>
                <div className="contacts-block__item">
                    <p className="title">E-mail</p>
                    <a href='mailto:info@sitename.com' className="phone flex">info@sitename.com</a>
                </div>
                <div className="contacts-block__item">
                    <p className="title">Адрес</p>
                    <a href='#' className="phone flex">проспект Юрия Гагарина, 2-а, Киев, Украина</a>
                </div>
            </div>
            <div className="feedback">
                <h3 className="headline">Напишите нам</h3>
                <form className="feedback__form form flex-column" onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        <input type="text" name="name" id="name" className={(isFormFieldValid('name')) ? 'error' : ''} onChange={handleChange} onBlur={handleBlur} placeholder='Марина *' value={values.name}/>
                        {getFormErrorMessage('name')}
                    </label>
                    <label htmlFor="email">
                        <input type="email" name="email" id="email" className={(isFormFieldValid('email')) ? 'error' : ''} onChange={handleChange} onBlur={handleBlur} placeholder='email@gmail.com *' value={values.email}/>
                        {getFormErrorMessage('email')}
                    </label>
                    <label htmlFor="phone">
                        <input type="text" name="phone" id="phone" className={(isFormFieldValid('phone')) ? 'error' : ''} onChange={handleChange} onBlur={handleBlur} placeholder='+380934455666 *' value={values.phone}/>
                        {getFormErrorMessage('phone')}
                    </label>
                    <label htmlFor="message">
                        <textarea name="message" id="message" className={(isFormFieldValid('message')) ? 'error' : ''} onChange={handleChange} onBlur={handleBlur} placeholder='Сообщение *' value={values.message}/>
                        {getFormErrorMessage('message')}
                    </label>
                    <button type="submit" className="button">Отправить</button>
                    <Transition in={modal} timeout={500} unmountOnExit mountOnEnter>
                        {state => (
                            <div className={`message-sent ${state}`}>Сообщение успешно отправлено</div>
                        )}
                    </Transition>
                </form>
            </div>
        </div>
    );
};

export default Contacts;