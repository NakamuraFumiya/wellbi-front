import React, {useState, useCallback, ChangeEvent} from 'react'
import Cropper, {Area} from 'react-easy-crop'
import styled from "styled-components";
import getCroppedImg from "./getCroppedImg";


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

const StyleSaveButton = styled.div`
  color: white;
  background-color: #FF6C6C;
  font-size: 0.8rem;
  border: none;
  padding: 0.5rem 1rem;
  margin-left: 3rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

type Props = {
  imageURL: string;
  setCroppedRoadmapImage: (promise: string) => void;
  setIsModalOpen: (open: boolean) => void;
}
export const ImageCropper = ({imageURL, setCroppedRoadmapImage, setIsModalOpen}: Props) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    if (!croppedAreaPixels) return;
    try {
      const croppedImage = await getCroppedImg(imageURL, croppedAreaPixels);
      setCroppedRoadmapImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, imageURL]);

  return (
    <>
      <StyledCropContainer>
        <Cropper
          image={imageURL}
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
        <StyleSaveButton onClick={() => {
          setIsModalOpen(false);
          showCroppedImage();
        }}>
          保存
        </StyleSaveButton>
        {/*<button onClick={() => {*/}
        {/*  setIsModalOpen(false);*/}
        {/*  showCroppedImage();*/}
        {/*}*/}
        {/*}>保存</button>*/}
      </StyledControls>
    </>
  )
};

