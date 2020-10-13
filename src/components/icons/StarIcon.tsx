import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import GradeTwoToneIcon from "@material-ui/icons/GradeTwoTone";

const useStyles = makeStyles(() =>
  createStyles({
    defaultColor: {
      color: "#ebc634",
    },
  }),
);

type OwnProps = {
  className?: string;
};

/**
 * Material-UI: Warning icon (with orange as default color).
 */
export const StarIcon: React.FC<OwnProps> = () => {
  const { defaultColor } = useStyles();
  return <GradeTwoToneIcon className={defaultColor} />;
};