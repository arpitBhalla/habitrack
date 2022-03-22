import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import MailIcon from "@mui/icons-material/MailOutline";

interface CardIconProps {
  Icon?: typeof MailIcon;
  color?: string;
}
export const CardIcon = ({
  Icon = MailIcon,
  color = "#00A98F",
}: CardIconProps) => {
  return (
    <Box
      sx={{
        backgroundColor: color + "34",
        p: "6px",
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Icon sx={{ color }} color="action" fontSize="small" />
    </Box>
  );
};

export const CardWrapper = ({ children }: any) => (
  <Card
    sx={{
      boxShadow: `rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px`,
    }}
  >
    {children}
  </Card>
);

export default function ActionAreaCard() {
  return (
    <CardWrapper>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            <b>Title</b>
          </Typography>
          <CardIcon />
        </Box>
        <Typography
          gutterBottom
          variant="h5"
          color="text.primary"
          component="div"
        >
          <b>{Number(1999).toLocaleString()}</b>
        </Typography>
        <Typography variant="caption" color="text.secondary">
          31.2% more than average users
        </Typography>
      </CardContent>
    </CardWrapper>
  );
}
