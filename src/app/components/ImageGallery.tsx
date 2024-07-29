import React from 'react';

const images = [
    '/assets/gallery/g1.jpg',
    '/assets/gallery/g2.jpg',
    '/assets/gallery/g3.jpg',
    '/assets/gallery/g4.jpg',
    '/assets/gallery/g5.jpg',
    '/assets/gallery/g6.jpg',
    '/assets/gallery/g7.jpg',
    '/assets/gallery/g8.jpg',
    '/assets/gallery/g13.jpg',
    '/assets/gallery/g10.jpg',
    '/assets/gallery/g11.jpg',
    '/assets/gallery/g12.jpg',
];

const Gallery: React.FC = () => {
  return (
      <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                  <div key={index} className="relative overflow-hidden">
                      <img 
                          className="w-full h-64 object-cover rounded-lg" 
                          src={image} 
                          alt={`Gallery image ${index + 1}`} 
                      />
                  </div>
              ))}
          </div>
      </div>
  );
};

export default Gallery;
