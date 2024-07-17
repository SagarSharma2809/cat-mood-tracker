
import NavBar from './NavBar';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function HistoryPage({ catData, deleteData, clearAll }) {

    const handleClick = (id) => {
        deleteData(id);
    }



    return (
        <Box sx={{ backgroundColor: "rgba(254, 232, 156, 255)", height: { xs: '100%', md: '100%' } }}>
            <NavBar />

            <Box sx={{ display: 'flex' }}>
                {/* 1st box, notes */}
                <Box sx={{ width: '50%' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {catData.map((data) => {
                            return (
                                // <div style={{ backgroundColor: 'lightblue', marginBottom: '1rem' }} key={data.id}>
                                //     <p> {data.date} </p>
                                //     <p>Mood: {data.mood}</p>
                                //     <p>{data.note}</p>

                                // </div>
                                <Card sx={{ m: 1, minWidth: 200, maxWidth: 250, borderRadius: '0', }} key={data.id}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                                            {data.date}
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            {data.mood}
                                        </Typography>
                                        <Typography variant="body2">
                                            {data.note}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <DeleteOutlineIcon onClick={() => handleClick(data.id)} sx={{
                                            cursor: 'pointer',
                                            // position: 'absolute',
                                            // bottom: 8,
                                            // left: 8
                                        }} />
                                    </CardActions>
                                </Card>
                            )
                        })}
                    </Box>
                    <Box sx={{ m: 1 }}><button onClick={clearAll}>Clear All</button></Box>

                </Box>

                {/* 2nd box, graph + cat */}
                <Box>
                    <Box>
                        <h1>graph</h1>
                    </Box>

                    <Box sx={{ width: { xs: '70%', md: '40%' } }}>
                        <img src="https://i.pinimg.com/originals/93/bb/15/93bb15fc20dfe3be424647b78c187f78.gif" width="100%" alt="" />
                    </Box>


                </Box>

            </Box>


        </Box>
    )
}