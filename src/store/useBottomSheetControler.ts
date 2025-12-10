import { create } from "zustand";

type BottomSheetControlerState = {
  storeSheet: boolean;
  setStoreSheet: (isOpen: boolean) => void;
};

type InitialStateType = {
  storeSheet: boolean;
};

const initialState: InitialStateType = {
  storeSheet: false,
};

export const useBottomSheetControler = create<BottomSheetControlerState>(
  (set) => ({
    ...initialState,
    setStoreSheet: (isOpen: boolean) =>
      set((state) => ({ ...state, storeSheet: isOpen })),
  })
);
