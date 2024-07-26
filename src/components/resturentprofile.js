import React, { useState, useEffect } from 'react';
import Profileheader from './profileheader';
import './resturenthome.css';
import { FaUserAlt } from "react-icons/fa";
import axios from 'axios';

const Resturentprofile = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [resturentid, setResturentid] = useState(null);



  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = () => {
    const resturentid = sessionStorage.getItem('id');
    setResturentid(sessionStorage.getItem('id'))
    axios
    .get('https://zomato-clone-e1o1.onrender.com/students/food/images')
    .then((response) => {
      const imageMap = {};
      response.data.forEach(image => {
        const match = image.name.match(resturentid);
        if (match) {
          const imageName = image.name.replace('.blob', '.jpeg');
          imageMap[imageName] = image.url;
        }
      });
      setUploadedImage(imageMap);
    })
    .catch((error) => {
      console.error("Error fetching images:", error);
    });
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error("No file selected for upload.");
      return;
    }

    const resturentid = sessionStorage.getItem('id');
    if (!resturentid) {
      console.error("Restaurant ID is missing.");
      return;
    }

    // Image resizing logic
    const MAX_FILE_SIZE_BYTES = 50 * 1024; // 50kb
    const resizedImage = await resizeImage(file, MAX_FILE_SIZE_BYTES);
    if (!resizedImage) {
      console.error("Image size is too large.");
      return;
    }

    const formData = new FormData();
    formData.append('filename', resizedImage);
    formData.append('resturentid', resturentid);

    try {
      const response = await axios.post('https://zomato-clone-e1o1.onrender.com/students/upload-image/resturentprofile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("File uploaded successfully:", response.data);
      setUploadedImage(response.data.imageUrl); // Update the state with the new image URL
      setShowPopup(false); // Close the popup after upload
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  // Function to resize image
  const resizeImage = (file, maxSize) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const maxSizeRatio = Math.sqrt(maxSize / file.size);
          const width = img.width * maxSizeRatio;
          const height = img.height * maxSizeRatio;
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
          canvas.toBlob((blob) => {
            resolve(blob);
          }, 'image/jpeg', 0.7); // Adjust compression quality as needed
        };
      };
    });
  };

  return (
    <div className='resturentprofile'>
      <Profileheader />
      <div className='resturent-prof-page'>
        <div className='prof-page'>
          {uploadedImage ? (
            <img
              src={uploadedImage[`${resturentid}.jpeg`]} 
              alt="Restaurant Profile"
              className='res-pro-img'
              onClick={() => setShowPopup(true)}
            />
          ) : (
            <FaUserAlt className='res-pro-img' onClick={() => setShowPopup(true)} />
          )}
          <h3 className='rest-username'>
            {sessionStorage.getItem('resturentname')}
          </h3>
          <h4 className='rest-id'>
            {sessionStorage.getItem('id')}
          </h4>
        </div>
      </div>

      {showPopup && (
        <div className='popup'>
          <div className='popup-inner'>
            <h2 style={{ color: 'pink', fontSize: '25px' }}>Upload Image</h2>
            <input type='file' onChange={handleFileUpload} />
            <button onClick={() => setShowPopup(false)} style={{ backgroundColor: '#526d82', borderRadius: '10px', padding: '10px' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resturentprofile;
