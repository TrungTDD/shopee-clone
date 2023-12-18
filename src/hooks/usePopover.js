import { useState } from 'react';

export default function usePopover() {
  const [showPopover, setShowPopover] = useState(false);
  const handleShowPopover = () => {
    setShowPopover(true);
  };
  const handleHidePopover = () => {
    setShowPopover(false);
  };

  return { showPopover, handleShowPopover, handleHidePopover };
}
