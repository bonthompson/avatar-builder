import { useRef } from 'react';
import html2canvas from "html2canvas";

import AvatarContainer from '../AvatarContainer/index'
import StyledContainer from './styles/index'
import Download from '../Download/index'
import ItemCarousel from '../ItemCarousel/index'
import CategoryButtons from '../CategoryButtons/index'

const Container = () => {

    const componentRef = useRef(null);

    const handleDownloadImage = async () => {
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
        } else {
          window.open(data);
        }
      };
      
    return (
        <StyledContainer className="layout-container">
                        <button onClick={handleDownloadImage}>
        Export As JPEG
      </button>
            <AvatarContainer ref={componentRef}/>
            <CategoryButtons />
            <ItemCarousel />
            <Download />
        </StyledContainer>

    );
}

export default Container;

