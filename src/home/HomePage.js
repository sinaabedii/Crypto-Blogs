import { Container, Grid2, Typography } from "@mui/material";
import Authors from "../components/author/Authors";
import Blogs from "../components/blog/Blogs";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid2 container spacing={2} padding={2}>
        <Grid2 item xs={12} md={3} mt={3}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            Authors
          </Typography>
          <Authors />
        </Grid2>
        <Grid2 item xs={12} md={9} mt={3}>
          {" "}
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            Blogs
          </Typography>
          <Blogs />
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default HomePage;
