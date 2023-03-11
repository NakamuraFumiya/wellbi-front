import React, {useState, useCallback, ChangeEvent} from 'react'
import ReactDOM from 'react-dom'
import Cropper, {Area} from 'react-easy-crop'
// import './styles.css'

export const ImageCropper = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    console.log(croppedArea, croppedAreaPixels)
  }, []);

  return (
    <>
      <Cropper
        image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
        crop={crop}
        zoom={zoom}
        aspect={4 / 3}
        cropSize={{width: 400, height: 210}}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
      <input
        type="range"
        value={zoom}
        min={1}
        max={3}
        step={0.1}
        aria-labelledby="Zoom"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setZoom(Number(e.target.value));
        }}
        // className="zoom-range"
      />
    </>
  )
};
