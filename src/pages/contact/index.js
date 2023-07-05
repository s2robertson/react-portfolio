import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormField from '../../components/FormField';

const initialValues = {
    name: '',
    email: '',
    message: ''
};
const validationSchema = Yup.object({
    name: Yup.string()
        .trim()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    message: Yup.string()
        .trim()
        .required('Message is required')
});

function ContactPage() {
    return (
        <main>
            <h2>Contact Me</h2>
            <p>Still in development...</p>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    alert(`Submitting ${JSON.stringify(values)}`);
                    setSubmitting(false);
                }}
            >
                {props => 
                    <Form>
                        <FormField id='name' name='name' label='Name' />
                        <FormField id='email' name='email' label='Email' />
                        <FormField id='message' name='message' label='Message' as='textarea' />
                        <button
                            type='submit'
                            className='btn'
                            disabled={props.isSubmitting}
                        >
                            Submit
                        </button>
                    </Form>
                }
            </Formik>
        </main>
    )
}

export default ContactPage;