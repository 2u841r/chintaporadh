import { useState } from 'react';

export const useCopyLinkPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 1000); 
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return { showPopup, copyLinkToClipboard };
};
