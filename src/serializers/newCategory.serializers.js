import * as yup from 'yup';

export const createNewCategorySchema = yup.object().shape({
    name: yup.string().min(2).required()
});