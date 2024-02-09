import { useCallback, useState } from "react";

type UseModalOutput = {
  isVisible: boolean;
  toggleModal: (newIsVisible?: boolean) => void;
};

export const useModal = (initialState: boolean = false): UseModalOutput => {
  const [isVisible, setIsVisible] = useState<boolean>(initialState);

  const toggleModal = useCallback(
    (newIsVisible?: boolean) => setIsVisible(newIsVisible ?? !isVisible),
    [isVisible]
  );

  return { isVisible, toggleModal };
};
