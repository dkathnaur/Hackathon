import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import myImage from "../Image/image6.jpg";
const defaultTheme = createTheme();
const styles = {
  background: {
    backgroundImage: `url('https://i.scdn.co/image/2a243084d0f2536b5e3e0c581a8cd97c5fb114b3')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
const SignIn = () => {
  const navigate = useNavigate();
  const [signinSuccess, setSigninSuccess] = useState(false);
  const [signinError, setSigninError] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    axios.post("http://localhost:8081/auth/v1/Login", {
      email: values.email,
      password: values.password,
    })
      .then((response) => {
        const data = response.data;
        const token = data.token;
        localStorage.setItem("token", token);
        navigate("/Dashboard");
        if (!data.data.email) {
          setSigninError(true);
        } else if (data.data.password !== values.password) {
          setSigninError(true);
        } else {
          setSigninSuccess(true);
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setSigninError(true);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div style={styles.background}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "seagreen" }}>
              <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              User Login
            </Typography>
            <img src={myImage} alt="Description of the image" style={{ maxWidth: "80%", height: "30vh" }} />
            <Box noValidate sx={{ mt: 4 }}>
              {signinSuccess && (
                <Alert variant="filled" severity="success" sx={{ mb: 2 }}>
                  Login Successful
                </Alert>
              )}
              {signinError && (
                <Alert variant="filled" severity="error" sx={{ mb: 2 }}>
                  Login Failed
                </Alert>
              )}
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          autoComplete="email"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                          size="small"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, bgcolor: "seagreen" }}
                      disabled={isSubmitting}
                    >
                      Login
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Typography
                          color="black"
                          sx={{ fontSize: 14, cursor: "pointer" }}
                          // onClick={OnSubmit}
                        >
                          Are you new here? Sign up
                        </Typography>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </Formik>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
};
export default SignIn;