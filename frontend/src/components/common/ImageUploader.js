import React from 'react'

const ImageUpload = ({ handleChange, handleUpload, image }) => {
  return (
    <>
      {image ? <label className="label">Change Your Profile Picture</label>
        : <label className="label">Upload A Profile Picure</label> }
        <>
          <input 
            className="input"
            type="file"
            onChange={handleUpload}
          />
        </>
    </>
  )
}
export default ImageUpload