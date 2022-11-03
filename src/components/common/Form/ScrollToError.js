import { useFormikContext } from 'formik';
import React, { useEffect } from 'react';

export function ScrollToError() {
    const formik = useFormikContext();
    const submitting = formik?.isSubmitting;

    useEffect(() => {
        const el = document.querySelector('.errorMeddage, [data-error]');
        (el?.parentElement ?? el)?.scrollIntoView();
    }, [submitting]);
    return null;
}