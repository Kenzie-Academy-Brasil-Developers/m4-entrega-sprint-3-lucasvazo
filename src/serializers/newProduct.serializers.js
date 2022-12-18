import * as yup from 'yup';

export const createNewProductSchema = yup.object().shape({
    price: yup.number().min(1).required(),
    name: yup.string().required(),
    category_id : yup.number().min(1).required()
});