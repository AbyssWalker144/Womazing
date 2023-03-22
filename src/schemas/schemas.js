import * as yup from 'yup';

const phoneRegExp = /^\+?3?8?(0\d{9})$/;

const schemas = yup.object().shape({
    name: yup.string().typeError('Должно содержать только буквы').required("Обязательно"),
    email: yup.string().email('Введите правильно email').required("Обязательно"),
    phone: yup.string().matches(phoneRegExp, 'Введите правильно телефон').required("Обязательно"),
    message: yup.string().required("Обязательно"),
});

export default schemas;