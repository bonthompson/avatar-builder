import { useRef, useState } from "react";
import html2canvas from "html2canvas";

import AvatarContainer from '../AvatarContainer/index'
import DefaultAvatars from '../DefaultAvatars/index'
import { StyledContainer, DownloadButton, Loader } from './styles/index'
import ItemCarousel from '../ItemCarousel/index'
import CategoryButtons from '../CategoryButtons/index'

const Container = () => {
  const [loading, setLoading] = useState(false);

  const componentRef = useRef(null);

  const handleDownloadImage = async () => {
    setLoading(true)
    const element = componentRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoading(false)
    } else {
      window.open(data);
      setLoading(false)
    }
  };

  return (
    <StyledContainer className="layout-container">
      <AvatarContainer ref={componentRef} />
      <CategoryButtons />
      <ItemCarousel />
      <DefaultAvatars />
      {loading ?
        <Loader /> :
        <DownloadButton onClick={handleDownloadImage}>
          Download & Share!
        </DownloadButton>
      }
    </StyledContainer>

  );
}

export default Container;
