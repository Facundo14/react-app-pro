import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
     
    return (
        <div>
            <h1>Formik Abstraction</h1>
            <hr />

            <Formik
                initialValues={{ 
                    name: "", 
                    email: "",
                    password1:'',
                    password2:'',
                }}
                onSubmit={ (values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                .min(2,'Debe tener mas de 2 caracteres')
                                .max(15, 'Debe tener menos de 15 caracteres')
                                .required('Debe ingresar un nombre'),
                        email: Yup.string()
                                    .email('Debe ingresar un email válido')
                                    .required('Debe ingresar un email'),
                        password1: Yup.string()
                                    .min(6, 'Debe tener mas de 6 caracteres')
                                    .required('Debe ingresar una contraseña'),
                        password2: Yup.string()
                                        .oneOf([Yup.ref('password1'), null], 'Las contraseñas no coinciden')
                                        .required('Debe ingresar una contraseña'),
                    })
                }
            >
                {
                    ({ handleReset }) => (
                        <Form>
                            <MyTextInput 
                                label='Nombre'
                                name='name'
                                placeholder='Nombre'
                            />


                            <MyTextInput 
                                label='Email'
                                name='email'
                                type='email'
                                placeholder='Email'
                            />

                            <MyTextInput 
                                label='Contraseña'
                                name='password1'
                                type='password'
                                placeholder='Contraseña'
                            />

                            <MyTextInput 
                                label='Confirmar Contraseña'
                                name='password2'
                                type='password'
                                placeholder='Confirmar Contraseña'
                            />


                            <button type="submit">Crear</button>
                            <button type='button' onClick={handleReset}>Reset</button>
                        </Form>
                    )
                }

            </Formik>
            
        </div>
    )
}
