import { Box, Typography } from "@mui/material";

const DateDisplay = () => {
  const today = new Date();
  const date = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const day = today.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" align="center">
        {date}
      </Typography>
      <Typography variant="h5">{day}</Typography>
    </Box>
  );
};

export default DateDisplay;
