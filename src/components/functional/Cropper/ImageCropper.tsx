import React, {useState, useCallback, ChangeEvent} from 'react'
import Cropper, {Area} from 'react-easy-crop'
import styled from "styled-components";

const StyledCropContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 80px;
`;

const StyledControls = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  width: 50%;
  transform: translateX(-50%);
  height: 40px;
  display: flex;
  align-items: center;
`;

const StyledButton = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  width: 50%;
  transform: translateX(-50%);
  height: 40px;
  display: flex;
  align-items: center;
`;

export const ImageCropper = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    console.log("おせてる？")
    console.log(croppedArea, croppedAreaPixels)
  };

  return (
    <>
      <StyledCropContainer>
        <Cropper
          image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          cropSize={{width: 400, height: 200}}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
      </StyledCropContainer>
      <StyledControls>
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
        />
        <button onClick={() => onCropComplete}>ボタンです</button>
      </StyledControls>
    </>
  )
};
