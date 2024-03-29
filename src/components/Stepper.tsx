'use client'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import { database } from "@/db/database";
import Link from 'next/link';



export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const curPart = database.find(item => item.name === "esquadreta");

  if (!curPart) {
    return <h1>deu erro</h1>
  }
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {curPart.checklist.map((data, index) => (
          <Step key={data.title} sx={{
            "& .Mui-active": {
              "&.MuiStepIcon-root": {
                color: "#0d9488",
              }
            },

            "& .Mui-completed": {
              "&.MuiStepIcon-root": {
                color: "#14b8a6",
              }
            },

            "& .Mui-disabled .MuiStepIcon-root": { color: "" }
        }}>
            <StepLabel
              optional={
                index === curPart.checklist.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {data.title}
            </StepLabel>
            <StepContent TransitionProps={{ unmountOnExit: false }} >
              <Typography>{data.desc}</Typography>
              <Box sx={{ mb: 2 }}>
                <div> 
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    className='bg-teal-600 text-white font-semibold hover:bg-teal-400'
                  >
                  {/* <Link href={`/checklist/${urlPart.name}-${id+1}`}> */}
                  <Link href={`/checklist/esquadreta-02`}>
                    {index === database.length - 1 ? 'Finish' : 'Next'}
                  </Link>
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                    className='text-teal-700 font-semibold hover:bg-teal-50'
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === curPart.checklist.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Divider 
          className='mb-4 -mt-3'
          />
          <Typography>All database completed!!</Typography>
          <Button 
            onClick={handleReset} 
            sx={{ mt: 1, mr: 1 }}
            className='text-teal-600 hover:bg-teal-100'
          >
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}


/* sx={{
  '& .MuiStepLabel-root .Mui-completed': {
    color: 'secondary.dark', // circle color (COMPLETED)
  },
  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
    {
      color: 'grey.500', // Just text label (COMPLETED)
    },
  '& .MuiStepLabel-root .Mui-active': {
    color: 'secondary.main', // circle color (ACTIVE)
  },
  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
    {
      color: 'common.white', // Just text label (ACTIVE)
    },
  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
    fill: 'black', // circle's number (ACTIVE)
  },
}}> */