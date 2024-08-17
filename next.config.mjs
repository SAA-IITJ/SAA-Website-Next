import path from 'path';

console.log('Current working directory:', process.cwd());


const nextConfig = {
    output:"export",
    images: {
        loader: 'custom',
        loaderFile: './my-loader.ts',
      },
};

export default nextConfig;
