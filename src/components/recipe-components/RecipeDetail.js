import * as React from 'react';
import { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


export default function RecipeDetail({recipeEmoji,recipeName,recipeIngre,recipeSteps}) {
    const [ingre,setIngre] = useState([]);
    const [steps,setSteps] = useState([]);

  //Split out the data 
  useEffect(() => {
    const ingredients = recipeIngre.split("&");
    setIngre(ingredients);
  
    const steps = recipeSteps.split("&");
    setSteps(steps);
  }, [recipeIngre, recipeSteps]);
  return (
    <Card sx={{ml:1,mr:1}}>
      <CardHeader 
        avatar={
          <Avatar sx={{  bgcolor: '#FFCC00' }} aria-label="recipe"  >
            {recipeEmoji}
          </Avatar>
        }
        titleTypographyProps={{variant:'h6' }}
        title={recipeName}

      />

      <CardContent>
        <Typography variant="body2" >
            <Typography variant='subtitle2'>Ingredients</Typography>
            <ul>
                {ingre.slice(1).map((item, index) => (
                    <li key={index}>{item.trim()}</li>
                ))}
            </ul>
        </Typography>
        <Typography variant="body2" >
            <Typography variant='subtitle2'>Method</Typography>
            <ul>
                {steps.slice(1).map((item, index) => (
                    <li key={index}> Step {index + 1}: {item.trim()}</li>
                ))}
            </ul>
        </Typography>

      </CardContent>
      <CardContent>
        <Typography variant="body2" >
            Enjoy your meal 😋
        </Typography>

      </CardContent>

    </Card>
  );
}