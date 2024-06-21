import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function HeroSectionHeading() {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Box sx={{ maxWidth: 1100, mt: 2, mx: 'auto', color: '#444444' }}>
                <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: '800', mb: 3, fontSize: isSmallScreen ? '2.5rem' : '3.125rem' }} gutterBottom>
                    Elevate Your Cat's Emotional Well-being with our kittyCat Mood Tracker
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: 'center', maxWidth: 500, mx: 'auto' }} gutterBottom>
                    Empower Yourself with Self-awareness. Track Your Cat's Emotions and Unleash a Happier Cat.
                </Typography>


            </Box>
        </>
    )
}