import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { FormHelperText, TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';

PasswordField.propTypes = {
    form : PropTypes.object.isRequired,
    name : PropTypes.string.isRequired,

    label : PropTypes.string,
    disabled : PropTypes.bool,
};

function PasswordField(props) {
    const {form, name, label, disabled} = props;
    const {formState} = form;
    const {errors} = formState;
    const hasError = errors[name];
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(x => !x);
    }

    return (
        <div>
            <FormControl error={!!hasError} fullWidth margin = 'normal' variant="outlined">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
                render={({ field }) => 
                    <OutlinedInput fullWidth variant='outlined' disabled={disabled} label={label} {...field} 
                        name={name}
                        id={name}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                                >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    /> }
                name={name}
                control={form.control}
            />

            <FormHelperText error={!!hasError}>{errors[name]?.message}</FormHelperText>
            </FormControl>
        </div>
    );
    // "as" b sử dụng UI lib nào trong TH này ta sử dụng TextField 
    // thì fullWidth , lable và disable sẽ đc truyền cho vào TextField luông...
}

export default PasswordField;