import { createTheme } from '@material-ui/core/styles';
import { createStyles } from '@mui/material';

const theme = createTheme({
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          fontSize: 'smaller',
          
        },
      },
    },
  },
});
export default theme;