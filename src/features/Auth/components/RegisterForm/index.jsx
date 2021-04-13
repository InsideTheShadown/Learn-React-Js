import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PasswordField from '../../../../components/form-controls/PasswordField';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

function RegisterForm(props) {
    const classes = useStyles();
    const schema = yup.object().shape({
        fullName : yup.string()
            .required("Please enter full mame")
            .test('minWord', "Please enter at least two words", (value) => {
                console.log('Value: ', value);
                return value.split(" ").length >= 2;
            }),
        email: yup.string()
            .required("Please enter an email")
            .email("Please enter a valid email"),
        password: yup.string()
            .required("Please enter password")
            .min(6, "Please enter at least 6 characters"),
        retypePassword: yup.string()
            .required("Please retype your password")
            .oneOf([yup.ref('password'), null], 'Passwords does not match'),
            // nên đặt trong này để có thể sử dụng đa ngôn ngữ(vì mình cần dùng hàm mà)
    });

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmitForm = (data) => {
        console.log(data);
        const {onSubmit} = props;
        if(!onSubmit) return;
        onSubmit(data);
        form.reset();
    }

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Create an account
                    </Typography>
                    <form className={classes.form}  onSubmit={form.handleSubmit(handleSubmitForm)}>
                    
                    <InputField name = "fullName" label = "Full Name" form = {form}/>   
                    <InputField name = "email" label = "Email" form = {form}/> 
                    <PasswordField name = "password" label = "Password" form = {form}/>
                    <PasswordField name = "retypePassword" label = "Retype Password" form = {form}/>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Link href="#" variant="body2">
                            Already have an account? Sign in
                        </Link>
                        </Grid>
                    </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
}

export default RegisterForm;