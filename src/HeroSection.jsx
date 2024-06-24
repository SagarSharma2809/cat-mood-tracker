import HeroSectionHeading from "./HeroSectionHeading"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <>

            <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', p: 4, m: 5, borderRadius: 3 }}>
                <HeroSectionHeading />

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" component={Link} to="/Mood" sx={{ maxWidth: 200, mt: 3, borderRadius: '1em', fontWeight: 'bold' }}> Start Now!</Button>
                </Box>

            </Box>
        </>
    )
}