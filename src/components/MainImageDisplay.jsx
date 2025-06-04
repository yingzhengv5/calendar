import { Box, IconButton } from "@mui/material";
import { CategoryOutlined } from "@mui/icons-material";

const MainImageDisplay = ({ mainImage, onOpenModal }) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "20px",
        width: "100%",
        height: "100%",
      }}>
      {mainImage && (
        <img
          src={mainImage}
          alt="Main"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
      <IconButton
        onClick={onOpenModal}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          bgcolor: "rgba(255, 255, 255, 0.7)",
        }}>
        <CategoryOutlined />
      </IconButton>
    </Box>
  );
};

export default MainImageDisplay;
