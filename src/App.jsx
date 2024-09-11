import "./index.css";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import DateDisplay from "../components/DateDisplay";
import MainImageDisplay from "../components/MainImageDisplay";
import ImageSlider from "../components/ImageSlider";
import CategoryDialog from "../components/CategoryDialog";
import { Container, Grid } from "@mui/material";
import { useColor } from "color-thief-react";

const API_URL = "https://api.unsplash.com/search/photos";
const CATEGORIES = ["dog", "cat", "sheep", "cow", "deer", "rabbit"];

function App() {
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("dog");
  const [sliderRef, setSliderRef] = useState(null);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");

  const { data: color } = useColor(mainImage, "hex", {
    crossOrigin: "anonymous",
  });

  useEffect(() => {
    if (color) {
      setBgColor(color);
      // Calculate text color based on background brightness
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      setTextColor(brightness > 128 ? "#000000" : "#ffffff");
    }
  }, [color]);

  const fetchImages = useCallback(async (category) => {
    try {
      const { data } = await axios.get(
        `${API_URL}?query=${category}&page=1&per_page=30&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setImages(data.results);
      if (data.results.length > 0) {
        setMainImage(data.results[0].urls.regular);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchImages(selectedCategory);
  }, [fetchImages, selectedCategory]);

  const handleSelection = (category) => {
    setSelectedCategory(category);
    setOpen(false);
  };

  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        py: 1,
        bgcolor: bgColor,
        color: textColor,
        transition: "background-color 0.5s ease, color 0.5s ease",
      }}>
      <Grid container sx={{ flex: 1, mb: 1 }}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <DateDisplay />
        </Grid>
        <Grid item xs={6} sx={{ position: "relative", overflow: "hidden" }}>
          <MainImageDisplay
            mainImage={mainImage}
            onOpenModal={() => setOpen(true)}
          />
        </Grid>
      </Grid>

      <ImageSlider
        images={images}
        onImageClick={handleImageClick}
        sliderRef={setSliderRef}
      />
      <CategoryDialog
        open={open}
        onClose={() => setOpen(false)}
        categories={CATEGORIES}
        onSelectCategory={handleSelection}
      />
    </Container>
  );
}

export default App;
