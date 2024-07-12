import Head from "next/head";
import {
  Container,
  Typography,
  Box,
  Button,
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  CardActions,
  Avatar,
} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {

  function helloWorld() {
alert('HELLO!')
  }

  return (
    <div>
      <Head>
        <title>Thorin Pickard - Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Thorin Pickard</Typography>
        </Toolbar>
      </AppBar>

      <div className="flex section">
        <div className="wrapper">
        <Box sx={{ my: 4 }}>
          <Header title="Welcome to my portfolio!" />
          <Typography variant="h5" component="p" gutterBottom>
            Hi, I'm Thorin Pickard. I specialize in Python and backend
            development.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            // href="https://www.linkedin.com/in/thorinpickard"
            sx={{ mt: 2, mr: 2 }}
            onClick={helloWorld}
          >
            Connect with me on LinkedIn
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href="https://github.com/thorinpickard"
            sx={{ mt: 2 }}
          >
            Check out my GitHub
          </Button>
        </Box>
      </div></div>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            About Me
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Professional Experience
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    I have extensive experience in developing backend systems
                    using Python, Django, and Flask. I also have a strong
                    background in database design and optimization.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href="/resume.pdf">
                    Download Resume
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Projects
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Check out some of my recent projects on GitHub. I work on
                    open-source projects and love to contribute to the developer
                    community.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href="https://github.com/thorinpickard">
                    View Projects
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Contact Me
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                startIcon={<LinkedIn />}
                href="https://www.linkedin.com/in/thorinpickard"
                sx={{ mr: 2 }}
              >
                LinkedIn
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<GitHub />}
                href="https://github.com/thorinpickard"
                sx={{ mr: 2 }}
              >
                GitHub
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<Email />}
                href="mailto:thorin@example.com"
              >
                Email
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Footer />
    </div>
  );
}
