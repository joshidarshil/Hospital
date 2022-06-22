import React from 'react';
import { Formfeebackstyled, Inputboxstyled } from './inputbox.Style';

function InputBox(children,errorMsg='',errors=false, ...rest) {
    return (
        <>
            <Inputboxstyled {...rest}>
                {children}
            </Inputboxstyled>
            <Formfeebackstyled error={errors}>
                {errorMsg}
            </Formfeebackstyled>
        </>
    );
}

export default InputBox;