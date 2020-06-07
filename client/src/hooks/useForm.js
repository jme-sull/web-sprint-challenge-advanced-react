// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage';

export const useForm = (key, initalValue) => {
    const [ values, setValues ] = useLocalStorage(key, initalValue)

    const handleChanges = e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
    };

    const clearForm = e => {
        e.preventDefault();
        setValues(initalValue);
    }

    return [ values, handleChanges, clearForm]
}