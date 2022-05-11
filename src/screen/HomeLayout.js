import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Grid item xs={12}><Box sx={{ bgcolor: "#cfe8fc", height: "30vh" }} /></Grid>
            <br/>
            <Grid item xs={12}><Box sx={{ bgcolor: "#cfe8fc", height: "60vh" }} /></Grid>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
