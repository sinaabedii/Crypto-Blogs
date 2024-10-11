import { AppBar, Container, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
            crypto-blogs
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
