import { createStyles, makeStyles, Theme } from "@material-ui/core";

/**
 * JSS styles.
 */
const styles = (theme: Theme) =>
  createStyles({
    background: {
      position: "fixed",
      width: "100%",
      height: "100%",
      backgroundImage: `url(${"../src/components/images/main1.jpg"})`,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
      paper: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        padding: theme.spacing(2),
        width: "85%",
        maxWidth: 300,
        opacity: 0.85,
      },
});

/**
 * MUI styles hook.
 */
export const useStyles = makeStyles(styles);