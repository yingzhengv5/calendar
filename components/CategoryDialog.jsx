import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CategoryDialog = ({ open, onClose, categories, onSelectCategory }) => {
  return (
    <Dialog open={open} onClose={onClose} sx={{ borderRadius: 2 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}>
        <DialogTitle sx={{ m: 0, p: 0, flexGrow: 1 }}>
          Select a Category
        </DialogTitle>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent>
        {categories.map((category) => (
          <Button
            key={category}
            variant="contained"
            sx={{
              margin: 1,
              backgroundColor: "#a8dadc",
              color: "#000000",
              borderRadius: "20px",
              padding: "8px 16px",
              boxShadow: "0 3px 5px 2px rgba(66, 165, 245, .3)",
              "&:hover": {
                backgroundColor: "#1e88e5",
              },
            }}
            onClick={() => onSelectCategory(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default CategoryDialog;
