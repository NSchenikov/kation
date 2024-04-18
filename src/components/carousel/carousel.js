import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
// import { makeStyles } from '@material-ui/styles';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const images = [
  {
    label: 'Никелирование',
    imgPath:
      'https://ekb.hrom-prom.ru//wp-content/uploads/sites/5/2016/02/%D0%9D%D0%B8%D0%BA%D0%B5%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5.jpg',
  },
  {
    label: 'Хромирование',
    imgPath:
      'https://prom-met.ru/images/Main/hrm.jpg',
  },
  {
    label: 'Золочение',
    imgPath:
      'https://avatars.dzeninfra.ru/get-zen_doc/1668923/pub_5cadff77ee4f6d00b268e7f7_5cadff8f06ced300b29048f6/scale_1200'
  },
  {
    label: 'Оловянирование',
    imgPath:
      'https://www.elhim-doc.ru/images/olov2.jpg'
  },
];

// const useStyles = makeStyles(() => ({
//     root: {
//       maxWidth: 1000,
//       flexGrow: 1
//     },
//     dot: {
//       '&.MuiMobileStepper-dot': {
//         backgroundColor: '#899D9D',
//       },
//       '&.MuiMobileStepper-dotActive': {
//         backgroundColor: '#2C3531',
//       }
//     }
//   }));

export const Carousel = () => {

// const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1000, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        style={{color: "#116466"}}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 40,
          pl: 2,
          bgcolor: '#FFFFFF',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      {/* <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: 'block',
                  maxWidth: 1000,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews> */}
      <MobileStepper
        // style={{fill: "#116466"}}
        // className={classes.root} 
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        // classes={{
        //     root: classes.root,
        //     dot: classes.dot,
        //     dotActive: classes.dotActive
        //   }}
        nextButton={
          <Button
            size="small"
            style={{color: "#116466"}}
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft/>
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" style={{color: "#116466"}} onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

