import * as yup from 'yup';
import { string, number, mixed } from 'yup';

export const ProfileShema = yup.object({
  name: string()
    .required('Name is required')
    .max(50, 'Name must be at most 50 characters'),
  age: number()
    .required('Age is required').min(1).max(110)
    .positive('Age must be a positive number').min(1)
    .integer('Age must be an integer'),
    height: number().required('Height is required').min(50).max(240).positive('Age must be a positive number'),
    weight: number().required('Weight is required').min(5).max(300).positive('Age must be a positive number'),
    file: mixed()
    
});