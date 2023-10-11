import React from 'react';
import { useField } from 'formik';

interface FormFieldProps {
    id: string,
    name: string,
    label: string,
    as?: 'input' | 'textarea'
}

const textareaRE = /textarea/i;

function FormField({ id, name, label, as = 'input' }: FormFieldProps) {
    const [field, meta] = useField(name);

    let control;
    if (textareaRE.test(as)) {
        control = <textarea id={id} rows={10} className='form-control' {...field} {...meta} />;
    } else {
        control = <input id={id} className='form-control' {...field} {...meta} />;
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