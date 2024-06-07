import portfolio from "./assets/portfolio.json";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Stack,
  Typography
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

interface IPortfolio {
  [locale: string]: {
    id: string;
    screenshot: string;
    title: string;
    position: string;
    description: string;
    skills: string[];
    links: {
      anchor: string;
      url: string;
    }[];
  }[];
}

function Portfolio({ locale }: { locale: string }) {
  return (
    <Container fixed sx={{ paddingY: 4 }}>
      <Grid container spacing={2}>
        {(portfolio as IPortfolio)[locale].map((work) => (
          <Grid
            key={work.id}
            xs={12}
            md={6}
            lg={4}
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Card variant="elevation" sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                sx={{ height: 150 }}
                image={"/images/" + work.screenshot}
                alt=""
              />
              <CardContent>
                <Typography variant="h5" component="h3">
                  {work.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant="subtitle1" color="text.secondary">
                  {work.position}
                </Typography>
                <Typography sx={{ mb: 2 }} variant="body2" color="text.secondary">
                  {work.description}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {work.skills.map((skill) => (
                    <Chip key={skill} label={skill} size="small" />
                  ))}
                </Stack>
              </CardContent>
              <CardActions>
                {work.links.map((link) => (
                  <Button
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    key={link.anchor}
                    size="small"
                  >
                    {link.anchor}
                  </Button>
                ))}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Portfolio;
