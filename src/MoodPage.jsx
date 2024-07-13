
import Mood from "./Mood"
import Note from "./Note"

import { Box } from "@mui/material"


export default function MoodPage(){
    return (
        <>
        <h1>Cat's Mood Today?</h1>

        <Mood/>
        <Box sx={{m:2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Note/>
        </Box>
        </>
    )
}