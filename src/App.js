import React from "react";
import {
  Container,
  useTheme,
  Box,
  Stack,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Shoe from "./shoe.png";
import Ellipse from "./ellipse.png";
import LogoShoe from "./logoShoe.png";

const Document = styled(Box)(({ theme }) => ({
  background: "white",
  minHeight: "100vh",
  width: "100vw",
  overflowX: "hidden",
  zIndex: 0,
}));

const Body = styled(Box)(({ theme }) => ({
  background: "linear-gradient(to left , #F9DEF8 , #E3F5F9)",
  width: "100vw",
  marginTop: "60px",
  minHeight: "calc(100vh - 60px)",
  borderRadius: "50px 50px 0 0",
  zIndex: 0,
}));

const BodyContainer = styled(Container)(({ theme }) => ({
  borderRadius: "50px 50px 0px 0px",
  height: "100%",
  zIndex: 0,
}));

const PurchaseButton = styled(Button)(({ theme }) => ({
  textTransform: "uppercase",
  width: "250px",
  height: "50px",
  backgroundColor: "#E35C85",
  color: "white",
  boxShadow: "2px 5px 10px  #E35C85",
  "&:hover": {
    backgroundColor: "#C32C88",
    color: "white",
  },
}));

const InfoButton = styled(Button)(({ theme }) => ({
  textTransform: "uppercase",
  width: "250px",
  height: "50px",
  backgroundColor: "white",
  color: "#E35C85",
  position: "absolute",
  bottom: "60px",
  left: "50%",
  boxShadow: "3px 5px 10px  #E35C85",
}));

const App = () => {
  const theme = useTheme();
  return (
    <Document>
      <AppBar
        sx={{
          height: "60px",
          bgcolor: "transparent",
          boxShadow: "none",
          color: "black",
        }}
      >
        <Toolbar>
          <Stack
            sx={{ marginInline: "120px", width: "100%" }}
            direction={"row"}
            alignItems={"center"}
          >
            <IconButton>
              <Box sx={{ width: "60px", height: "40px" }}>
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={LogoShoe}
                  alt=""
                />
              </Box>
            </IconButton>
            <Typography>Logo</Typography>

            <Stack direction={"row"} sx={{ marginLeft: "auto" }} gap="20px">
              <Button sx={{ color: "#E35C85" }}>Home</Button>
              <Button sx={{ fontSize: "12px", color: "#707070" }}>About</Button>
              <Button sx={{ fontSize: "12px", color: "#707070" }}>
                Products
              </Button>
              <Button sx={{ fontSize: "12px", color: "#707070" }}>
                Contact
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Body>
        <BodyContainer>
          <Stack direction={"row"}>
            <Box
              sx={{
                paddingTop: "120px",
                width: "50%",
              }}
            >
              <Stack direction="column" gap="35px" sx={{ zIndex: 2 }}>
                <Typography fontSize={"70px"} sx={{ zIndex: 2 }}>
                  Are you ready to <br /> lead the way
                </Typography>
                <Typography fontSize="1rem">
                  Track: Lost Sky - Where We Started (feat. Jex) [NCS Release]{" "}
                  <br />
                  Music provided by NoCopyrightSounds.Track: Lost Sky <br />
                  Where We Started (feat. Jex) [NCS Release]
                </Typography>
                <PurchaseButton>buy now</PurchaseButton>
              </Stack>
            </Box>
            <Box sx={{ width: "50%", paddingTop: "120px" }}>
              <img
                src={Shoe}
                alt="shoe.png"
                style={{
                  width: "120%",
                  height: "120%",
                  position: "relative",
                  left: "-100px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Stack>
        </BodyContainer>

        <Box
          sx={{ position: "absolute", top: "60px", left: "-50px", zIndex: 1 }}
        >
          <img src={Ellipse} alt="ellipse.png" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: "-50px",
            zIndex: 1,
          }}
        >
          <img src={Ellipse} alt="ellipse.png" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "30px",
            left: "250px",
            zIndex: 1,
            width: "100px",
            height: "100px",
          }}
        >
          <img
            src={Ellipse}
            alt="ellipse.png"
            style={{ width: "100px", height: "100px" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "80px",
            left: "600px",
            zIndex: 1,
            width: "100px",
            height: "100px",
          }}
        >
          <img
            src={Ellipse}
            alt="ellipse.png"
            style={{ width: "100px", height: "100px" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "400px",
            left: "880px",
            zIndex: 1,
            width: "200px",
            height: "200px",
          }}
        >
          <img
            src={Ellipse}
            alt="ellipse.png"
            style={{ width: "200px", height: "200px" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "530px",
            left: "1020px",
            zIndex: 0,
            width: "100px",
            height: "100px",
          }}
        >
          <img
            src={Ellipse}
            alt="ellipse.png"
            style={{ width: "100px", height: "100px" }}
          />
        </Box>

        <InfoButton>Mauritius chisti</InfoButton>
      </Body>
    </Document>
  );
};

export default App;
