import {
  Breadcrumbs,
  // ImageList,
  ImageListItem,
  Link,
  Typography,
} from '@mui/material';
import * as S from './ServiceFoto.styles';
import { Container, TitleH1 } from '../../App.styles';

import { useParams } from 'react-router-dom';

export const ServiceFoto = () => {
  const { id } = useParams();
  const itemCountMap = {
    1: 30,
    2: 30,
    3: 20,
    4: 10,
    5: 4,
    6: 4,
  };

  const itemCount = itemCountMap[Number(id)] || 0;

  const itemData = Array.from({ length: itemCount }, (_, index) => ({
    img: `/img/gallery/${id}/${index + 1}.jpg`,
    title: `foto${index + 1}`,
  }));

  const titles = [
    'оловянированию',
    'золочению',
    'серебрению',
    'никелированию',
    'меднению',
    'палладированию',
  ];

  const titlePage = titles[Number(id)] || titles[0];

  return (
    <Container>
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        color="#ffffff"
        sx={{ mt: 2 }}
      >
        <Link underline="hover" color="#ffffff" href="/">
          Главная
        </Link>
        <Link underline="hover" color="#ffffff" href="/gallery">
          Галерея
        </Link>
        <Typography color="#ffffff">Фото работ по золочению</Typography>
      </Breadcrumbs>
      <TitleH1>Фото работ по {titlePage}</TitleH1>
      <S.FotoContainer>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ height: '25vh', width: '100%' }}
            />
          </ImageListItem>
        ))}
      </S.FotoContainer>
    </Container>
  );
};
