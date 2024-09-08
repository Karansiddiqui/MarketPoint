import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";



export const HomeSectionCarousel = ({data, sectionName}) => {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        carouselRef.current.slidePrev();
        setActiveIndex(activeIndex - 1);
    };

    const handleNext = () => {
        carouselRef.current.slideNext();
        setActiveIndex(activeIndex + 1);
    };

    const syncActiveIndex = ({ item }) => {
        setActiveIndex(item);
    };

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = data.slice(0, 10).map((item, index) => (
        <HomeSectionCard key={index} product={item} />
    ));

    return (
        <div className="px-4 lg:px-8 border">
            <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                ref={carouselRef}
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    activeIndex={activeIndex}
                    onSlideChanged={syncActiveIndex}
                />

                {activeIndex > 0 && (
                    <Button
                        onClick={handlePrev}
                        variant="contained"
                        className="z-50 bg-white"
                        sx={{
                            position: "absolute",
                            left: 0,
                            top: "40%",
                            transform: "translateX(-50%) rotate(90deg)",
                            minWidth: "auto",
                            bgcolor: "white",
                        }}
                    >
                        <KeyboardArrowLeftIcon
                            sx={{ transform: "rotate(-90deg)", color: "black" }}
                        />
                    </Button>
                )}

                {activeIndex < items.length - 4 && (
                    <Button
                        onClick={handleNext}
                        variant="contained"
                        sx={{
                            position: "absolute",
                            right: 0,
                            top: "40%",
                            transform: "translateX(50%) rotate(270deg)",
                            minWidth: "auto",
                            bgcolor: "white",
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowRightIcon
                            sx={{ transform: "rotate(90deg)", color: "black" }}
                        />
                    </Button>
                )}
            </div>
        </div>
    );
};
