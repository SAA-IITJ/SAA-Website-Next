// components/common/ImageLoaderScript.js
import Script from 'next/script';

const ImageLoaderScript = () => {
  return (
    <Script
      id="image-loader-script"
      dangerouslySetInnerHTML={{
        __html: `
          function imageLoaded(img) {
            const wrapper = img.parentElement;
            const loader = wrapper.querySelector(".loader");
            
            // Hide the loader
            loader.style.display = "none";
        
            // Show the image
            img.classList.remove("hidden");
          }
        `,
      }}
      strategy="afterInteractive"
    />
  );
};

export default ImageLoaderScript;
