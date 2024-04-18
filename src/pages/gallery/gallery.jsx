import { ThemeProvider } from '@emotion/react';
import {
  Breadcrumbs,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
  createTheme,
} from '@mui/material';

const galleryFoto = [
  {
    id: 1,
    name: 'Фото работ по золочению',
    url: '/img/gallery/slide6.jpg',
  },
  {
    id: 2,
    name: 'Фото работ по серебрению',
    url: '/img/gallery/slide3.jpg',
  },
  {
    id: 3,
    name: 'Фото работ по меднению',
    url: '/img/gallery/slide8.jpg',
  },
  {
    id: 4,
    name: 'Фото работ по хромированию',
    url: '/img/gallery/slide11.jpg',
  },
  {
    id: 5,
    name: 'Фото работ по оловянированию',
    url: '/img/gallery/slide12.jpg',
  },
  {
    id: 6,
    name: 'Фото работ по обработке пескоструйкой',
    url: '/img/gallery/slide20.jpg',
  },
];

export const Gallery = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: 2 }}>
        <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mb: 2 }}>
          <Link underline="hover" color="inherit" href="/">
            Главная
          </Link>
          <Typography color="inherit">Галерея</Typography>
        </Breadcrumbs>
        <Typography variant="h2" color="inherit" sx={{ mb: 2 }}>
          Галерея
        </Typography>
        <Grid container spacing={2}>
          {galleryFoto.map((elem) => (
            <Grid key={elem.id} item xs={12} md={3}>
              <Card sx={{ height: '100%' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={elem.url}
                    alt="foto"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {elem.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    underline="hover"
                    color="inherit"
                    href="/"
                  >
                    Подробнее
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
