import { useState } from "react";

const App = () => {
  // what do we need to track
  const [singleFile, setSingleFile] = useState(null);
  // const [multipleFiles, setMultipleFiles] = useState([]);
  const [displayImage, setDisplayImage] = useState(null);
  const [displayImages, setDisplayImages] = useState([]);
  const [displayDogImage, setDisplayDogImage] = useState("");
  const [message, setMessage] = useState("");

  // Handlers
  const handleSingleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSingleFile(e.target.files[0]);
    }
  };

  // fetch functions -> fetch a random single image
  const fetchSingleFile = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/single`);

      const blob = await response.blob(); // we made a blob - Binary Large Object
      // but thats not an image, so we need to make an image element

      // using createObjectURL
      const imageUrl = URL.createObjectURL(blob);
      setDisplayImage(imageUrl);
    } catch (error) {
      console.error("Error fetching single file:", error);
    }
  };

  // fetch functions -> save single
  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      setMessage("Please select a file before uploading.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", singleFile);

      const response = await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Image upload failed");
      }
      setMessage("File uploaded successfully!");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // fetch functions -> save multiple [TODO]
  const handleSubmitMultipleFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    multipleFiles.forEach((file) => {
      formData.append("files", file);
    });
    try {
      const response = await fetch(`http://localhost:8000/save/multiple`, {
        method: "POST",
        body: formData,
      });

      const data = response.json();
      setMessage("File has been uploaded");
    } catch (error) {
      console.log(error);
    }
  };
  // fetch functions -> fetch multiple [TODO]
  const fetchMultipleFiles = async () => {
    try {
      // fetch the /fetch/multple => that gets the list of names [01, 02, 03]
      const response = await fetch(`http://localhost:8000/fetch/multiple`);
      const data = await response.json();
      console.log(data);
      // fetch - /fetch/fil/filename variable
      const filePromises = data.map(async (filename) => {
        const fileResponse = await fetch(
          `http://localhost:8000/fetch/file/${filename}`
        );

        const fileBlob = await fileResponse.blob();
        const imageURL = URL.createObjectURL(fileBlob);
        return imageURL;
      });

      const imageUrls = await Promise.all(filePromises);
      setDisplayImages(imageUrls);
    } catch (error) {
      console.log(error);
      // the answer is in the same repository in github of professor
    }
  };
  // fetch functions -> fetch dog image [TODO]
  const fetchDogImage = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await response.json();
      setDisplayDogImage(data.message);
    } catch (error) {
      console.log(error);
    }
  };
  // fetch functions -> save dog image [TODO]
  const saveDogImage = async () => {
    try {
      const fileResponse = await fetch(displayDogImage);
      const blob = await fileResponse.blob();

      //
      const formData = new FormData();
      formData.append("file", blob, "dog-image.jpg");

      const response = await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ margin: "0 40% ", backgroundColor: "grey" }}>
      <p>{message}</p>
      <h2 style={{ color: "black" }}>Fetch Single Random Image</h2>
      <button onClick={fetchSingleFile} style={buttonStyle}>Fetch Single File</button>
      {displayImage && (
        <div>
          <h3>Single File</h3>
          <img
            src={displayImage}
            alt="Display Image"
            style={{ width: "200px", marginTop: "10px" }}
          />
        </div>
      )}
      <form onSubmit={handleSubmitSingleFile}>
        <h2 style={{ color: "green" }}>Upload Single File</h2>
        <input type="file" onChange={handleSingleFileChange} />
        <br />
        <br />
        <button type="submit">Upload Single File</button>
      </form>
      <h2 style={{ color: "black" }}>Fetch Multiple Random Image</h2>
      <button onClick={fetchMultipleFiles} style={buttonStyle}>Fetch Multiple Files </button>
      {displayImages.length > 0 ? (
        displayImages.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} style={{ width: "200px" }} />
          </div>
        ))
      ) : (
        <p style={{ color: "red" }}>No Images to display</p>
      )}

      <button onClick={fetchDogImage} style={buttonStyle}>Fetch Dog Image</button>
      {displayDogImage && (
        <div>
          <img src={displayDogImage} style={{ width: "200px" }} />
          <br />
          <button onClick={saveDogImage} style={buttonStyle}>Save it</button>
        </div>
      )}
    </div>
  );
};

const buttonStyle = {
  padding: "10px 15px",
  margin: "10px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#007bff",
}

export default App;
