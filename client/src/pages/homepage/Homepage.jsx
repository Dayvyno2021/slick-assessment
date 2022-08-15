import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import myTestApp from '../../img/MyTestApp.png';
import myTestAppPro11 from '../../img/MyTestAppPro11.png';
import myTestAppIphone from '../../img/MyTestAppIphone11.png';
import watchSomething from '../../img/WatchSomething.png';
import watchSomethingPro11 from '../../img/WatchSomethingPro11.png';
import watchSomethingIphone from '../../img/WatchSomethingIphoneSE.png';
import { theme } from '../../components/Theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import { homepage } from './homepageUi';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Progress from '../../components/Progress';

const Homepage = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  //The Search input
  const [searchField, setSearchField] = useState('')

  //Different screen sizes
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      //For a full stack I ushsally hide the API key in the dotenv file
      try {
        let { data } = await axios.get(
              `http://www.omdbapi.com/?t=${searchField}&apikey=${process.env.REACT_APP_OMDB}`
            );
            setMovies(values=>([...values, data]))
            setLoading(false);
        
      } catch (error) {
        alert(error)
      }
      
    }
    fetchData()
  },[searchField])

  const onTextInput = e => {
    setSearchField(e.target.value);
    if (searchField.length === 0) {
      setMovies([])
    }
  }

  return (
    <Box sx={homepage}>
      {loading && <Progress/>}
      <Grid container direction='column'>
        <Grid item xs={12} >
          <Paper sx={homepage.rectangle1} >
            <Box sx={homepage.rectangle2} >
              <img src={
                matchesSM ? myTestAppIphone :
                matches? myTestAppPro11 : myTestApp
              }
                alt="" />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper sx={homepage.rectangle5} >
            <img src={
              matchesSM ? watchSomethingIphone :
              matches? watchSomethingPro11 : watchSomething
            }
              alt="" />
          </Paper>
        </Grid>
        <Grid item sx={homepage.textCover} container direction='column'>
          <label htmlFor="outlined-basic" sx={homepage.label}>Search</label>
          <TextField
            id="outlined-basic"
            size='small' variant='outlined' sx={homepage.text}
            onChange={onTextInput}
          />
        </Grid>
        {
          searchField.length === 0 ? '' : (
          <Box  sx={{overflowX: 'scroll', width: '90vw',display: 'block', mx:'auto', mb:'2rem'}}>
            <Container sx={homepage.cardCover}>
              {
                movies && movies.map((movie, i) => (
                  <Card key={`key${i}`} sx={homepage.card}>
                    <CardContent>
                      <Typography variant='body1'>{movie.Title} </Typography>
                    </CardContent>
                  </Card>
                ))
              }
            </Container>
            <Container sx={homepage.cardCover}>
              {
                movies && movies.map((movie, i) => (
                  <Card key={`key${i}`} sx={homepage.card}>
                    <CardContent>
                      <Typography variant='body1'>{movie.Title}</Typography>
                    </CardContent>
                  </Card>
                ))
              }
            </Container>
          </Box>
            
          )
        }
      </Grid>
    </Box>
  )
}

export default Homepage