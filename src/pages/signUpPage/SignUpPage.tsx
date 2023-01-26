import * as React from 'react';
import { useForm } from 'react-hook-form';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { IRegistrationData } from '../../models/responseData';
import { createUser } from '../../service/auth/createUser';
import { useAppSelector } from '../../hooks/storeHooks';
import Spinner from '../../components/spinner/Spinner';

const SignUpPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegistrationData>({
        mode: 'onBlur',
    });

    const { isLoading } = useAppSelector((state) => {
        return {
            isLoading: state.userSlice.isLoading,
        };
    });

    const onSubmit = (data: IRegistrationData) => {
        createUser(data);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {isLoading ? (
                    <Spinner
                        message={
                            'Loading... Please wait, it may take some time if the server is sleeping'
                        }
                    />
                ) : (
                    <React.Fragment>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit(onSubmit)}
                            sx={{ mt: 3 }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        {...register('username', { required: 'Name is required' })}
                                        id="username"
                                        name="username"
                                        required
                                        fullWidth
                                        label="Name"
                                        autoFocus
                                        error={Boolean(errors.username)}
                                        helperText={errors.username?.message?.toString()}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message:
                                                    'Entered value does not match email format',
                                            },
                                        })}
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        error={Boolean(errors.email)}
                                        helperText={errors.email?.message?.toString()}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        {...register('password', {
                                            required: 'Password is required',
                                        })}
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        error={Boolean(errors.password)}
                                        helperText={errors.password?.message?.toString()}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Link href="/signIn" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </Container>
    );
};
export default SignUpPage;
