import { useField } from 'formik';

const textareaRE = /textarea/i;

function FormField({ id, name, label, as = 'input' }) {
    const [field, meta] = useField(name);

    let control;
    if (textareaRE.test(as)) {
        control = <textarea id={id} name={name} rows={10} className='form-control' {...field} {...meta} />;
    } else {
        control = <input id={id} name={name} className='form-control' {...field} {...meta} />;
    }

    return (
        <div className='mb-3'>
            <label htmlFor={id} className='form-label'>{label}</label>
            {control}
            {meta.touched && meta.error ? (
                <div className='form-text'>{meta.error}</div>
            ) : null}
        </div>
    )
}

export default FormField;