import Image from "next/image";

const BackgroundImage = ({ imagePath, altText }) => {
  return (
    <>
      <Image
        src={imagePath}
        fill
        priority={true}
        sizes="(max-width: 1140px) 100vw"
        alt={altText}
        className="fixed object-cover"
      />
    </>
  );
};
export default BackgroundImage;
