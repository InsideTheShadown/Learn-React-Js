import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form : PropTypes.object.isRequired,
    name : PropTypes.string.isRequired,

    label : PropTypes.string,
    disabled : PropTypes.bool,
};

function InputField(props) {
    const {form, name, label, disabled} = props;
    const {formState} = form;
    const {errors} = formState;
    const hasError =  errors[name];

    return (
        <Controller
            render={({ field }) => 
            <TextField fullWidth margin = 'normal' variant='outlined' disabled={disabled} label={label} error={!!hasError} helperText={errors[name]?.message} {...field} />}
            name={name}
            control={form.control}
        />
    );
    // "as" b sử dụng UI lib nào trong TH này ta sử dụng TextField 
    // thì fullWidth , lable và disable sẽ đc truyền cho vào TextField luông...
}

export default InputField;