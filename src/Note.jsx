
// import { useState } from 'react';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';

export default function Note({ note, handleNoteChange }) {

  // const [input, setInput] = useState("");

  const handleChange = (event) => {

    handleNoteChange(event.target.value);
  }

  return (
    <>


      <TextField
        id="outlined-multiline-flexible"
        label="Add Note"
        multiline
        maxRows={4}
        value={note}
        onChange={handleChange}
        InputProps={{
          endAdornment: <InputAdornment position="end">
            <IconButton
              aria-label="toggle note"

              edge="end"
            >
              <CreateIcon></CreateIcon>
            </IconButton>
          </InputAdornment>,
        }}
      />



    </>
  )
}