import * as React from "react";
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
import myImage from "../Image/Image4.webp";

const defaultTheme = createTheme();

const styles = {
  background: {
    backgroundImage: `url('https://nivafollower-app.com/img/turkpanelim6.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function SignUp() {
  const navigate = useNavigate();
  const [signupSuccess, setSignupSuccess] = React.useState(false);
  const [signupError, setSignupError] = React.useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    address: "",
    pincode: "",
    email: "",
    phone: "",
    password: "",
  };

  const gotoLoginPage = () => {
    navigate("/login");
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
            <Avatar sx={{ m: 1, bgcolor: "darkseagreen" }}>
              <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              User Registration
            </Typography>
            <img
              src={myImage}
              alt="Description of the image"
              style={{ maxWidth: "50%", height: "10vh" }}
            />

            {signupSuccess && (
              <Alert variant="filled" severity="success" sx={{ mb: 2 }}>
                Registration Successful
              </Alert>
            )}
            {signupError && (
              <Alert variant="filled" severity="error" sx={{ mb: 2 }}>
                Registration Failed
              </Alert>
            )}

            <Formik
              initialValues={initialValues}
              validate={(values) => {
                const errors = {};
                // Check email
                if (!values.email) {
                  errors.email = "Email is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    values.email
                  )
                ) {
                  errors.email = "Invalid email address";
                }
                // Check phone
                if (!values.phone) {
                  errors.phone = "Phone number is required";
                } else if (!/^[0-9]{10}$/i.test(values.phone)) {
                  errors.phone = "Please enter a valid phone number";
                }
                // Check pincode
                if (!values.pincode) {
                  errors.pincode = "Pincode is required";
                } else if (!/^[0-9]{6}$/i.test(values.pincode)) {
                  errors.pincode = "Please enter a valid pincode";
                }
                // Check password
                if (!values.password) {
                  errors.password = "Password is required";
                } else if (
                  !/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/i.test(values.password)
                ) {
                  errors.password =
                    "Password should be alphanumeric (min- 8 chars)";
                }

                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const response = await axios.post(
                    "http://localhost:8081/capi/v1/customer",
                    values
                  );
                  console.log(response.data);

                  // Redirect to login page after successful registration
                  setSignupError(false);
                  setSignupSuccess(true);

                  setTimeout(() => {
                    navigate("/login");
                  }, 2000);
                } catch (error) {
                  setSignupError(true);
                  console.error("Registration failed", error);
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        onChange={handleChange}
                        size="small"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                        onChange={handleChange}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        onChange={handleChange}
                        autoComplete="username"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        autoComplete="address"
                        onChange={handleChange}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="pincode"
                        label="Pincode"
                        name="pincode"
                        autoComplete="pincode"
                        size="small"
                        type="number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.pincode}
                      />
                      <Typography color="error" sx={{ fontSize: 14 }}>
                        {errors.pincode && touched.pincode && errors.pincode}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        size="small"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <Typography color="error" sx={{ fontSize: 14 }}>
                        {errors.email && touched.email && errors.email}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        type="number"
                        fullWidth
                        id="phone"
                        label="Phone number"
                        name="phone"
                        autoComplete="phone"
                        size="small"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                      />
                      <Typography color="error" sx={{ fontSize: 14 }}>
                        {errors.phone && touched.phone && errors.phone}
                      </Typography>
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
                      <Typography color="error" sx={{ fontSize: 14 }}>
                        {errors.password && touched.password && errors.password}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: "darkseagreen" }}
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Typography
                        color="black"
                        sx={{ fontSize: 14, cursor: "pointer" }}
                        onClick={gotoLoginPage}
                      >
                        Already have an account? Sign in
                      </Typography>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}
