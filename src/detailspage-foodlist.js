import React, { useState, useEffect } from 'react';
import './components/resturenthome.css';
import { IoFastFood } from "react-icons/io5";
import axios from 'axios';
import offerimage from './components/assets/star.png';
import app from './components/assets/app.jpg'

const Detailsfoodlist = () => {
  const [foodList, setFoodList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [resturentid, setResturentid] = useState(null);
  const [uploadedImages, setUploadedImages] = useState({});

  useEffect(() => {
    const resturentid = sessionStorage.getItem('resturentid');

    setResturentid(resturentid);
    fetchFoodList(resturentid);

  }, []);

  const fetchFoodList = (resturentid) => {
    axios
      .get(`https://zomato-clone-e1o1.onrender.com/food/${resturentid}`)
      .then((response) => {
        setFoodList(response.data);
        fetchImages(resturentid);
      })
      .catch((error) => {
        console.error("Error fetching food list:", error);
      });
  };

  const fetchImages = (resturentid) => {
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
        setUploadedImages(imageMap);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  };

  const updateFoodItemImage = (foodid, imageUrl) => {
    console.log(foodid)
    const update = { image: imageUrl };
    axios
      .put(`https://zomato-clone-e1o1.onrender.com/food/${foodid}`, update)
      .then((response) => {
        console.log("Image update success");
      })
      .catch((error) => {
        console.error("Error updating food item:", error);
      });
  };

  const handleIconClick = (food) => {
    setSelectedFood(food);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedFood(null);
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error("No file selected for upload.");
      return;
    }

    const resturentid = sessionStorage.getItem('id');
    const foodid = selectedFood ? selectedFood.foodid : null;

    if (!resturentid || !foodid) {
      console.error("Restaurant ID or Food ID is missing.");
      return;
    }

    const resizedImage = await resizeImage(file, 50 * 1024);
    if (!resizedImage) {
      console.error("Image size is too large.");
      return;
    }

    const formData = new FormData();
    formData.append('filename', resizedImage);
    formData.append('resturentid', resturentid);
    formData.append('foodid', foodid);

    try {
      const response = await axios.post('https://zomato-clone-e1o1.onrender.com/students/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("File uploaded successfully:", response.data);
      fetchImages(resturentid);
      updateFoodItemImage(foodid, response.data.url);
    } catch (error) {
      console.error("Error uploading file:", error);
    }

    handleClosePopup();
  };

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
          }, 'image/jpeg', 0.7);
        };
      };
    });
  };

  return (
    <div className='food--list'>
      <div className='list--headers'>
        <h2 style={{ fontSize: 20, fontWeight: 600 }}>Fooditems</h2>
        <div>
          <ul>
            {foodList.map((food, index) => (
              <li key={index} className='list-containers'>
                <div className='lists'>
                  <div className='food--details'>
                    {uploadedImages[`${resturentid}${food.foodid}.jpeg`] ? (
                      <img
                        src={uploadedImages[`${resturentid}${food.foodid}.jpeg`]}
                        alt={food.name}
                        className='food-image'
                        onClick={() => handleIconClick(food)}
                      />
                    ) : (
                      <IoFastFood
                        className='food-image'
                        onClick={() => handleIconClick(food)}
                      />
                    )}
                    <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 10, width: 200 }}>
                      {food.name}
                    </h2>
                    <div>
                      <span 
                        style={{ 
                          display: 'inline-block',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          width: 'auto',
                          marginRight: '20px',
                          padding: '10px'
                        }}
                      >
                        {food.price}
                      </span>
                      <span 
                        style={{ 
                          display: 'inline-block',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          width: '170px',
                          height: '80px', // Adjust height to change background image size
                          backgroundImage: `url(${offerimage})`,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          color: 'red',
                          fontWeight:'bold',
                          padding: '20px',
                          fontSize:'20px'
                        }}
                      >
                        {food.offer}/-
                      </span>
                    </div>
                  </div> 
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {showPopup && (
        <div className='popup'>
          <div className='popup-inner'>
          
           
           
           <button
              onClick={handleClosePopup}
              style={{ backgroundColor: '#fff', borderRadius: '50%', padding: '5px',marginRight:'200px'}}
            >
              X
            </button>
          
          </div>
          <span style={{marginTop:'400px',position:'absolute',marginRight:'200px',color:'white',fontWeight:'bold'}}>Download Now</span>
        </div>
      )}
    </div>
  );
};

export default Detailsfoodlist;

