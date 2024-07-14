import Mood from "./Mood"
import Note from "./Note"

import { Box } from "@mui/material"
import Button from '@mui/material/Button';

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const todayDate = `${day}/${month}/${year}`;


export default function MoodPage(){

    
    return (
        <Box sx={{display: 'flex', flexDirection: { xs: 'column', md: 'row' }}}>  

            <Box sx={{p:4, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: 'url("https://wallpaperaccess.com/full/9460702.png")', backgroundPosition: 'center', backgroundSize: 'cover',width: { xs: '100%', md: '50%' }, overflow: 'hidden'}}>
                <h1 style={{color:'black', marginTop: '1.5em'}}>Cat's Mood Today, {todayDate}?</h1>

                <Box sx={{backgroundColor: 'rgb(255, 255, 255, 0.6)', m: 2, borderRadius: '0.4em'}}>
                    <Mood/>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Note/>
                        <Button variant="contained" sx={{m:4}}>Submit</Button>
                    </Box>
                </Box>
            </Box>

            <Box sx={{p: 2, width: { xs: '100%', md: '50%', overflow: 'hidden' }, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src="http://i0.wp.com/themindcircle.com/wp-content/uploads/2016/02/Cat-Moods-Explained-1.jpg?fit=630%2C583" alt="" />
            </Box>

        </Box>
    )
}
