import portfolio from "./assets/portfolio.json";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography
} from "@mui/material";

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
    <>
      {(portfolio as IPortfolio)[locale].map((work) => (
        <Box margin={1} key={work.id} sx={{ maxWidth: 300 }}>
          <Card variant="outlined">
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
        </Box>
      ))}
    </>
  );
}

export default Portfolio;
