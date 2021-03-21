import { useState } from 'react';

type UseClick = [isButtonFocused: boolean, updateButtonState: () => void];

export function useClick(timeout: number): UseClick {
  const [isClicked, setIsClicked] = useState(false);

  function onClick() {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), timeout);
  }

  return [isClicked, onClick];
}
