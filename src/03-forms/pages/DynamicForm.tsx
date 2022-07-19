import { Formik, Form } from 'formik';
import { MySelectInput, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: {[x:string]: any} = {};
const requiredField:{[x:string]: any} = {};

for (const input of formJson) {
  initialValues[input.name] = input.value 

  if( !input.validation) continue;

  let schema = Yup.string();


  for (const rule of input.validation) {
    if(rule.type === 'required') {
        schema = schema.required(rule.message);
    }

    if(rule.type === 'minLength') {
        schema = schema.min( (rule as any).type, rule.message);
    }

    if(rule.type === 'email') {
        schema = schema.email(rule.message)
    }

    if(rule.type === 'maxLength') {
        schema = schema.max( (rule as any).type, rule.message);
    }
    

    // Otras reglas
  }

  requiredField[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredField });

export const DynamicForm = () => {
    return (
        <div>
            <h1>Forms Dinámicos</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema = {validationSchema}
            >
                { (formik) => (
                    <Form>
                        {formJson.map(({ type, name, placeholder, label, options }) => {
                            if (type === 'input' || type === 'password' || type === 'email'){
                                return <MyTextInput 
                                            type={ (type as any) } 
                                            name={ name} 
                                            label={ label } 
                                            placeholder={ placeholder } 
                                            key={ name }
                                        />
                            } else if( type === 'select'){
                                return (
                                    <MySelectInput 
                                        key={ name }
                                        name={ name }
                                        label={ label }
                                    >
                                        {
                                            options?.map(( { id, label } ) => (
                                                <option key={ id } value={ id }>{ label }</option>
                                            ))

                                        }
                                    </MySelectInput>
                                )
                            }


                            throw new Error(`El type: ${type} no está soportado`);
                        })}

                        <button type='submit' >Crear</button>
                        <button type='button' onClick={formik.handleReset} > Reset </button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}
