import { useState } from "react";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="image-uploader-wrapper">
      <p>thumbnail image</p>
      {selectedImage && (
        <>
        <img width={"250px"} src={URL.createObjectURL(selectedImage)}/>
        <button onClick={() => setSelectedImage(null)}>Remove</button>
        </>
      )}
      <input type="file" name="thumbnail-image" onChange={(event) => {setSelectedImage(event.target.files[0])}}/>
    </div>
  );
};

export default UploadImage;