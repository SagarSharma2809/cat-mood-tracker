import Mood from "./Mood"
import Note from "./Note"
import NavBar from "./NavBar";
import { useState } from "react";

import { Box } from "@mui/material"
import Button from '@mui/material/Button';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const todayDate = `${day}/${month}/${year}`;

const customIcons = {
    0.5: {
        icon: <SentimentVeryDissatisfiedIcon color="error" />,
        label: "Scared Angry",
    },
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error" />,
        label: "Scared",
    },
    1.5: {
        icon: <SentimentDissatisfiedIcon color="error" />,
        label: 'Nervous',
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error" />,
        label: 'Angry',
    },
    2.5: {
        icon: <SentimentSatisfiedIcon color="warning" />,
        label: "Irritated",
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning" />,
        label: "Neutral",
    },
    3.5: {
        icon: <SentimentSatisfiedAltIcon color="success" />,
        label: 'Satisfied',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="success" />,
        label: 'Happy',
    },
    4.5: {
        icon: <SentimentVerySatisfiedIcon color="success" />,
        label: 'Very Happy and friendly',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success" />,
        label: 'Happiest',
    }
}


export default function MoodPage({ changeData }) {


    const [mood, setMood] = useState(3.5);
    const [note, setNote] = useState("");
    const [noteError, setNoteError] = useState(false);


    const handleMoodChange = (newMood) => {
        setMood(newMood);
    };

    const noteChange = (newNote) => {
        setNoteError(false);
        setNote(newNote);
    }


    const handleClick = () => {
        if (note.length > 50) {
            setNoteError(true);
            return;
        }
        changeData(customIcons[mood].label, note, todayDate, mood);
        // alert("Data saved successfully")
        setMood(3.5);
        setNote("");
    }


    return (
        <Box sx={{ height: { xs: '100%', md: '100vh' }, backgroundImage: 'url("https://wallpaperaccess.com/full/9460702.png")', backgroundPosition: 'center', backgroundSize: 'cover' }}>

            <NavBar />
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center' }}>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: { xs: '100%', md: '50%' }, overflow: 'hidden' }}>
                    <h1 style={{ color: 'white', marginTop: '1.5em' }}>Cat's Mood Today, <span style={{ color: "black", fontStyle: 'italic' }}>{todayDate}</span></h1>

                    <Box sx={{ backgroundColor: 'rgb(255, 255, 255, 0.6)', m: 2, borderRadius: '0.4em' }}>
                        <Mood mood={mood} onMoodChange={handleMoodChange} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Note note={note} handleNoteChange={noteChange} />
                            <Button variant="contained" sx={{ m: 4 }} onClick={handleClick}>Submit</Button>
                        </Box>
                        {noteError && <p style={{ color: 'maroon', fontSize: '1.1em', fontWeight: 'bold', textAlign: 'center' }}>Please enter less than 50 characters</p>}
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { xs: 4, md: -2 } }} >
                    <img src="https://i.pinimg.com/736x/df/ab/80/dfab80fcc845ba13c08659bd2defb3e5--cat-tails-cats.jpg" alt="" style={{
                        width: "60%"
                    }} />
                </Box>

            </Box>
        </Box>
    )
}
