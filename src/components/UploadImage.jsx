import { useState, useEffect } from "react";
import  PropTypes from "prop-types";

const UploadImage = ({ setBlogThumbnailImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const Base64Converter = (file) => {  
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.onerror = (error) => reject(error)
    });
  }

  useEffect(() => {
    setBlogThumbnailImage(selectedImage)
  }, [selectedImage])

  return (
    <div className="image-uploader-wrapper">
      <p>thumbnail image</p>
      {selectedImage && (
        <>
        <img width={"400px"} src={selectedImage}/>
        <button onClick={() => setSelectedImage(null)}>Remove</button>
        </>
      )}
      <input type="file" name="thumbnail-image" onChange={(event) => {
        Base64Converter(event.target.files[0]).then(res => setSelectedImage(res))
        }}/>
    </div>
  );
};

export default UploadImage;

UploadImage.propTypes = {
  setBlogThumbnailImage: PropTypes.func
}