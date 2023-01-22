import * as React from 'react';
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
import { useForm } from 'react-hook-form';
import { authorizationSwitch, loginUserThunk } from '../../store/userSlice/userSlice';
import { useAppDispatch } from '../../hooks/hooks';
import { ISignInData } from '../../models/responseData';

const SignInPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
    });
    const dispatch = useAppDispatch();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data: ISignInData) => {
        // eslint-disable-next-line no-console
        console.log(data);
        dispatch(loginUserThunk(data));
        dispatch(authorizationSwitch());
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
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Link href="/signUp" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default SignInPage;
