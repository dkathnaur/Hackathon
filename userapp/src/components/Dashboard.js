import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import carouselImage1 from "../Image/image12.png";
import carouselImage2 from "../Image/image10.jpg";
import carouselImage3 from "../Image/image11.jpg";

const tiers = [
  {
    title: "Entertainment",
    description: "Enjoy your favorite shows",
    imageUrl:
      "https://th.bing.com/th/id/R.802f3aedb83a13be01250e37e5d91dd3?rik=L3z%2boXloRRHiWg&riu=http%3a%2f%2fmiabaga.com%2fwp-content%2fuploads%2f2020%2f12%2fOTT-Industry-768x505.jpg&ehk=EjigfcgLer3kMkhpZrL%2fUQdilB2rZJFCmD5prSoQ5Fc%3d&risl=&pid=ImgRaw&r=0",
    buttonText: "Select",
    buttonVariant: "outlined",
  },
  {
    title: "Pay Through",
    description: "Upgrade for premium features",
    imageUrl:
      "https://www.indianera.com/wp-content/uploads/2019/10/upi-transactions-touch-1-billion-global-expansion-in-plans.jpg",
    buttonText: "Select",
    buttonVariant: "contained",
  },
  {
    title: "Travel",
    description: "Best for business",
    imageUrl: "https://th.bing.com/th/id/OIP.J7agP4LvUyt5meFSKNaVSwHaEo?w=249&h=180&c=7&r=0&o=5&pid=1.7",
    buttonText: "Select",
    buttonVariant: "outlined",
  },
  {
    title: "Shopping",
    description: "Best for business",
    imageUrl: "https://t3.ftcdn.net/jpg/02/41/43/18/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg",
    buttonText: "Select",
    buttonVariant: "outlined",
  },
  {
    title: "Food",
    description: "Best for business",
    imageUrl: "https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/foodbusiness1.jpg",
    buttonText: "Select",
    buttonVariant: "outlined",
  },
  {
    title: "Other Services",
    description: "Best for business",
    imageUrl: "https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/11/UP-Metro-Card.png",
    buttonText: "Select",
    buttonVariant: "outlined",
  },
  // Add more items here if needed
];

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

const defaultTheme = createTheme();

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const _logout = () => {
    navigate("/login");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <div style={{ backgroundColor: "dustyrose", minHeight: "100vh" }}>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar
            sx={{ flexWrap: "wrap", backgroundColor: "darkseagreen" }}
          >
            <Typography variant="h6" color="white" noWrap sx={{ flexGrow: 1 }}>
              NatWest Group
            </Typography>
            <Button
              variant="contained"
              endIcon={<LogoutIcon />}
              onClick={_logout}
              sx={{ ml: 3, backgroundColor: 'white', color: 'black' }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
    
        <Container
          Black
          maxWidth="sm"
          component="main"
          sx={{ pt: 8, pb: 6 }}
    
        >
          {/* <Typography
            component="h1"
            variant="h2"
            align="center"
            color="seagreen"
          >
            Welcome {location?.state?.firstName + " " + location?.state?.lastName}!
          </Typography> */}
          <Typography
            variant="h5"
            align="center"
            color="black"
            component="p"
          >
            Welcome to NatWest Group
          </Typography>
        </Container>
      
        <Carousel infiniteLoop autoPlay>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Carousel infiniteLoop autoPlay>
              <div>
                <img src={carouselImage1} alt="Image12" style={{ maxWidth: "100%", maxHeight: "400px", width: "auto", height: "auto" }}/>
              </div>
              <div>
                <img src={carouselImage2} alt="Image10" style={{ maxWidth: "100%", maxHeight: "400px", width: "auto", height: "auto" }} />
              </div>
              <div>
                <img src={carouselImage3} alt="Image11" style={{ maxWidth: "100%", maxHeight: "400px", width: "auto", height: "auto" }}/>
              </div>
            </Carousel>
          </div>
        </Carousel>

        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    titleTypographyProps={{ align: "center" }}
                    action={tier.title === "Pro" ? <StarIcon /> : null}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <img
                    src={tier.imageUrl}
                    alt={tier.title}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      align="center"
                    >
                      {tier.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      onClick={() => alert(`You selected the ${tier.title}`)}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Footer */}
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            py: [3, 6],
          }}
        >
          <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map((footer, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Typography
                  variant="h6"
                  color="text.primary"
                  sx={{ color: "Darkseagreen" }}
                >
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item, index) => (
                    <li key={index}>
                      <Link href="#" variant="subtitle1" color="text.secondary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* End footer */}
      </div>
    </ThemeProvider>
  );
}
