import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";

export default function Login (){
    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            passowrd: data.get("password"),
        })
    }
    return (
        <Container componet="main" maxWidth="xs">
            <Box sx={{
                boxShadow:3,
                borderRadius: 2,
                px: 4,
                py: 6,
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Typography component ="h1" variant="h5">Log in</Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField margin="normal" 
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus/>

                    <TextField margin="normal"
                     required
                     fullWidth
                     name="password"
                     label = "password"
                     type="password"
                     id="password"
                     />

                    <FormControlLabel
                        control= {<Checkbox value="remember" color="primary"/>}
                        label = "Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt:3, mb:2}}
                    >
                        Log In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">Forgot Password?</Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" vairant="body2">{"Don't have an account? Sign Up"}</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}