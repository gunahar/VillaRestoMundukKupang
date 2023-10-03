import React, {useState, useEffect} from 'react';
export default function RestoCarousel(){
    const slides = [
        "resto-carousel-3.jpg", 
        "resto-carousel-4.jpg",
        ]
    
        const [currIndex, setCurrIndex] = useState(0);
        useEffect(() => {
            const interval = setInterval(() => {
            //   const isLastSlide = currIndex = slides.length - 1;
              setCurrIndex((prevIndex) => (prevIndex + 1) % slides.length);
            }, 3000); // Change images every 5 seconds
        
            return () => clearInterval(interval);
          }, []);
        return(
            <div className="max-w-[380px] h-[568px] w-full m-auto py-12 px-4">
                <div className="w-full h-full rounded-2xl bg-center bg-cover transition-all duration-300" style={{backgroundImage: `url(/src/assets/imgs/${slides[currIndex]})`}}></div>
            </div>
        )
}