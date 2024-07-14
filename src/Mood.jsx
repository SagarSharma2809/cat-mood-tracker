import { useState } from 'react';

import propTypes from 'prop-types';
import Rating from "@mui/material/Rating";
import { styled } from '@mui/material/styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const StyleRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
    '& .MuiRating-iconFilled, & .MuiRating-iconHover, & .MuiSvgIcon-root': {
        fontSize: '4rem',
        transition: 'all 2s',
    },
}));

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

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: propTypes.number.isRequired,
};

export default function Mood({ mood, onMoodChange }) {
    
    const [hover, setHover] = useState(-1);

    

    const changeMood = (event, newValue) => {
        onMoodChange(newValue);
    }

    return (
        <>
        <Box sx={{ p: 3, textAlign: 'center' }}>
            <StyleRating
                name="highlight-selected-only"
                value={mood}
                precision={0.5}
                onChange={changeMood}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                IconContainerComponent={IconContainer}
                getLabelText={(value) => customIcons[value].label}
                highlightSelectedOnly
                sx={{ mb: 4 }}
            />

            {mood !== null && (
                <Box sx={{ ml: 2 }}>
                    <Typography variant="h6">
                        {customIcons[hover !== -1 ? hover : mood].label}
                    </Typography>
                </Box>
            )}
        </Box>

        
        
        </>
    );
}
