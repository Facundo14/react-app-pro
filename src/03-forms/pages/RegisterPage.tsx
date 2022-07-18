import '../styles/styles.css'
import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

interface FormData {
    name: string;
    email: string;
    password1: string;
    password2: string;
}

const initialData: FormData = {
    name: '',
    email: '',
    password1: '',
    password2: ''
}

export const RegisterPage = () => {

    const { formData , onChange, resetForm, isValidEmail, name, email, password1, password2 } = useForm<FormData>(initialData);


    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={ onSubmit }>
                <input 
                    type="text" 
                    placeholder="Name"
                    value={ name }
                    onChange={ onChange }
                    name="name"
                    className={`${name.trim().length <= 0 && 'has-error' }`}
                />
                { name.trim().length <= 0 && <span>Este campo es obligatorio</span>}

                <input 
                    type="email" 
                    placeholder="Email"
                    value={ email }
                    onChange={ onChange }
                    name="email"
                    className={`${!isValidEmail(email) && 'has-error' }`}
                />  
                { !isValidEmail(email) && <span>Debe ser un email valido</span>}

                <input 
                    type="password" 
                    placeholder="Password"
                    value={ password1 }
                    onChange={ onChange }
                    name="password1"
                    className={`${password1.trim().length <= 0 && 'has-error' }`}
                />
                { password1.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe tener al menos 6 caracteres</span>}

                <input 
                    type="password" 
                    placeholder="Repetir password"
                    value={ password2 }
                    onChange={ onChange }
                    name="password2"
                    className={`${password2.trim().length <= 0 && 'has-error' }`}
                />
                { password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                { password2.trim().length < 6 && password2.trim().length > 0 && <span>La contraseña debe tener al menos 6 caracteres</span>}
                { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben coincidir</span>}

                <button type="submit">Crear</button>
                <button onClick={ resetForm }>Resetear</button>
            </form>
        </div>
    )
}
