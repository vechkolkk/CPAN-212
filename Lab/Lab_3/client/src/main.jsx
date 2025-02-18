import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/* <div style={{margin: "0  40%" }}>
      <p>{message}</p>
      <h2 style={{color:"red"}}>Fetch Single Random Image</h2>
      <button onClick={fetchSingleFile}>Fetch Single File</button>
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
        <h2 style={{color:"green"}}>Upload Single File</h2>
        <input type="file" onChange={handleSingleFileChange} />
        <br/>
        <br/>
        <button type="submit">Upload Single File</button>
      </form>
      <h2 style={{color:"red"}}>Fetch Multiple Random Image</h2>
      <button onClick={fetchMultipleFiles}>Fetch Multiple Files </button>
      {displayImages.length > 0 ? (
        displayImages.map((imageUrl, index) => (
          <div key={index}>
            <img
              src={imageUrl}
              style={{ width: "200px" }}
            />
          </div>
        ))
      ) : (
        <p style={{color:"red"}}>No Images to display</p>
      )}

      <button onClick={fetchDogImage}>Fetch Dog Image</button>
      {displayDogImage && (
        <div>
          <img
            src={displayDogImage}
            style={{ width: "200px" }}
          />
          <br />
          <button onClick={saveDogImage}>Save it</button>
        </div>
      )}
    </div> */