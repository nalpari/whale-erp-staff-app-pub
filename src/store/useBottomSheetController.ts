import { create } from "zustand";

type BottomSheetControllerState = {
  storeSheet: boolean;
  setStoreSheet: (isOpen: boolean) => void;
};

type InitialStateType = {
  storeSheet: boolean;
};

const initialState: InitialStateType = {
  storeSheet: false,
};

export const useBottomSheetController = create<BottomSheetControllerState>(
  (set) => ({
    ...initialState,
    setStoreSheet: (isOpen: boolean) =>
      set((state) => ({ ...state, storeSheet: isOpen })),
  })
);
