import Slider from "react-slick";
import { Box } from "@mui/material";

const ImageSlider = ({ images, onImageClick, sliderRef }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: false,
    variableWidth: true,
  };

  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <Slider ref={sliderRef} {...sliderSettings}>
        {images.map((image) => (
          <Box
            key={image.id}
            sx={{ cursor: "pointer" }}
            onClick={() => onImageClick(image.urls.regular)}>
            <img
              src={image.urls.small}
              alt={image.alt_description}
              style={{
                width: 150,
                height: 100,
                objectFit: "cover",
                borderRadius: 3,
                margin: 1,
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
