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

import { ISignInData } from '../../models/responseData';
import { loginUser } from '../../service/auth/loginUser';
import { useAppSelector } from '../../hooks/storeHooks';
import Spinner from '../../components/spinner/Spinner';

const SignInPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ISignInData>({
        mode: 'onBlur',
    });

    const { isLoading } = useAppSelector((state) => {
        return {
            isLoading: state.userSlice.isLoading,
        };
    });

    const onSubmit = (data: ISignInData) => {
        loginUser(data);
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
                            Sign in
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                            autoComplete="off"
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Entered value does not match email format',
                                    },
                                })}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                error={Boolean(errors.email)}
                                helperText={errors.email?.message?.toString()}
                                autoFocus
                            />
                            <TextField
                                {...register('password', { required: 'Password is required' })}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                error={Boolean(errors.password)}
                                helperText={errors.password?.message?.toString()}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Link href="/signUp" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </Container>
    );
};

export default SignInPage;
