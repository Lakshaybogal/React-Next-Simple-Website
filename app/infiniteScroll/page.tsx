
"use client"
import React, { useState, useEffect } from 'react';
import '@utils/infiniteScroll.css'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FaGithubSquare } from 'react-icons/fa';
import Link from 'next/link';

type Image = {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  }
};
const Gallery = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);

  const fetchImages = () => {
    const accessKey = 'LVYZcVNB7n6y11iemN9L_0tLFnHK3WLH6SlSGBDIIyo';
    const perPage = 10;

    axios
      .get(`https://api.unsplash.com/photos/?client_id=${accessKey}&page=${page}&per_page=${perPage}`)
      .then((response) => {
        setImages([...images, ...response.data]);
        setPage(page + 1);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []); // Initial fetch when the component mounts

  return (
    <section className='flex flex-col justify-center'>
      <h1 className='font-mono lg:text-6xl font-bold flex justify-center '>Infinite Scrolling Gallery</h1>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="gallery ">
          {images.map((image) => (
            <div className='flex flex-col justify-center p-2 '>
              <img key={image.id} src={image.urls.regular} alt={image.alt_description} />
              <h3 className='md:text-3xl'>{image.alt_description}</h3>
            </div>

          ))}
        </div>
      </InfiniteScroll>
      <h2 className="flex justify-center font-medium">
        <Link rel="stylesheet" href="https://github.com/Lakshaybogal" >
          <span className="flex justify-center items-center text-5xl font-normal pb-2">
            <FaGithubSquare />
          </span>
          Github Link
        </Link>
      </h2>
    </section>
  );
};

export default Gallery;
