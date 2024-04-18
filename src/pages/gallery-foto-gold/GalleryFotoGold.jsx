import { ThemeProvider } from '@emotion/react';
import {
  Breadcrumbs,
  Container,
  ImageList,
  ImageListItem,
  Link,
  Typography,
  createTheme,
} from '@mui/material';

const itemData = [
  {
    img: '/img/gallery/slide6.jpg',
    title: 'foto1',
  },
  {
    img: '/img/gallery/slide3.jpg',
    title: 'foto2',
  },
  {
    img: '/img/gallery/slide8.jpg',
    title: 'foto3',
  },
  {
    img: '/img/gallery/slide11.jpg',
    title: 'foto4',
  },
  {
    img: '/img/gallery/slide12.jpg',
    title: 'foto5',
  },
  {
    img: '/img/gallery/slide20.jpg',
    title: 'foto6',
  },
  {
    img: '/img/gallery/slide20.jpg',
    title: 'foto7',
  },
  {
    img: '/img/gallery/slide23.jpg',
    title: 'foto8',
  },
];

export const GalleryFotoGold = () => {
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
          <Link underline="hover" color="inherit" href="/">
            Галерея
          </Link>
          <Typography color="inherit">Фото работ по золочению</Typography>
        </Breadcrumbs>
        <Typography variant="h2" color="inherit" sx={{ mb: 2 }}>
          Фото работ по золочению
        </Typography>
        <ImageList sx={{ height: 450 }} cols={4}  gap={20}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </ThemeProvider>
  );
};
