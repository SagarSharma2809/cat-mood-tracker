
import { useState, useEffect } from 'react';

import NavBar from './NavBar';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Button from '@mui/material/Button';

import LineChart from './LineChart';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";


Chart.register(CategoryScale);


const bgColorCard = {
    0.5: "#4682B4", // steel blue, scared angry (bluish coral)
    1: "#5F9EA0",  // cadet blue, scared (bluish coral)
    1.5: "#6495ED", // cornflower blue, nervous (bluish coral)
    2: "#FF4040", // coral red, angry (reddish coral)
    2.5: "#FF6347", // tomato, irritated (reddish coral)
    3: "#FFD700", // gold, neutral (yellowish coral)
    3.5: "#FFFFFF", // dark gray, satisfied (greyish coral)
    4: "#90EE90", // light green, happy (greenish coral)
    4.5: "#32CD32", // lime green, happy and friendly (greenish coral)
    5: "#00FF7F", // spring green, happiest (greenish coral)
}



export default function TrackPage({ catData, deleteData, clearAll }) {

    const [chartData, setChartData] = useState({
        labels: catData.map((data) => data.date),
        datasets: [
            {
                label: "mood",
                data: catData.map((data) => data.moodNum),
                backgroundColor: [
                    "rgba(75, 192, 192, 1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    })

    useEffect(() => {
        setChartData({
            labels: catData.map((data) => data.date),
            datasets: [
                {
                    label: "mood",
                    data: catData.map((data) => data.moodNum),
                    backgroundColor: [
                        "rgba(75, 192, 192, 1)",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0"
                    ],
                    borderColor: "black",
                    borderWidth: 2
                }
            ]
        });
    }, [catData]);

    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    const handleClick = (id) => {
        deleteData(id);
    }



    return (
        <Box sx={{ backgroundColor: "rgba(254, 232, 156, 255)", height: { xs: '100%', md: '100%' } }}>
            <NavBar />

            <Box sx={{ display: 'flex' }}>
                {/* 1st box, notes */}
                <Box sx={{ width: '50%' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 2 }}>
                        {catData.map((data) => {
                            return (
                                // <div style={{ backgroundColor: 'lightblue', marginBottom: '1rem' }} key={data.id}>
                                //     <p> {data.date} </p>
                                //     <p>Mood: {data.mood}</p>
                                //     <p>{data.note}</p>

                                // </div>
                                <Card sx={{ m: 0.5, minWidth: 150, maxWidth: 400, borderRadius: '0', backgroundColor: bgColorCard[data.moodNum] }} key={data.id}>
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
                    <Box sx={{ m: 1, p: 2 }}><Button variant="contained" onClick={clearAll}>Clear All</Button></Box>

                </Box>

                {/* 2nd box, graph + cat */}
                <Box sx={{ width: '50%', position: 'relative', m: 2 }}>
                    <Box>
                        <h1 style={{ color: '#3187bb' }}>GRAPH</h1>
                        <LineChart chartData={chartData} />
                    </Box>

                    <Box sx={{ position: 'fixed', right: '0px', bottom: '0px', width: '300px' }}>
                        <ClickAwayListener onClickAway={handleTooltipClose}>
                            <div>
                                <Tooltip
                                    PopperProps={{
                                        disablePortal: true,
                                    }}
                                    onClose={handleTooltipClose}
                                    open={open}
                                    disableFocusListener
                                    // disableHoverListener
                                    disableTouchListener
                                    title="meow"
                                    sx={{ fontSize: 5 }}
                                >
                                    <img src="https://i.pinimg.com/originals/93/bb/15/93bb15fc20dfe3be424647b78c187f78.gif" width="100%" alt="cat" onClick={handleTooltipOpen} style={{ cursor: 'pointer' }} />
                                </Tooltip>
                            </div>
                        </ClickAwayListener>

                    </Box>
                </Box>
                {/* { xs: '50%', md: '20%' } */}

            </Box>


        </Box>
    )
}