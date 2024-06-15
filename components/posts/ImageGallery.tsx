import React from "react";

const ImageGallery = ({ images }: { images: string[] }) => {
  const MAX_IMAGES_PER_ROW = 3;
  const MAX_TOTAL_IMAGES = 9;
  const SHOW_MORE_THRESHOLD = 9;

  const renderImage = (image: string, index: number) => {
    const isLastRow =
      index >= images.length - (images.length % MAX_IMAGES_PER_ROW);
    const isLastImageInRow = (index + 1) % MAX_IMAGES_PER_ROW === 0;
    const isSingleImageRow = index % MAX_IMAGES_PER_ROW === 0 && !isLastRow;
    const maxWidth = images.length == 1 ? "full" : images.length == 2 ? "1/2" : "1/3";
      

    return (
      <div
        key={index}
        className={`flex items-center justify-center relative w-${maxWidth} `}
      >
        <img src={image} alt="" className="object-cover w-full h-full p-1" />
      </div>
    );
  };

  const renderMoreButton = () => {
    if (images.length > SHOW_MORE_THRESHOLD) {
      return <button className="btn btn-primary mt-8">查看更多</button>;
    }
    return null;
  };

  return (
    <div className="flex flex-wrap p-x-1 py-2">
      {images.slice(0, MAX_TOTAL_IMAGES).map(renderImage)}
      {renderMoreButton()}
    </div>
  );
};

export default ImageGallery;
