import { create } from "zustand";

type PopupControllerState = {
  QrCodePopup: boolean;
  setQrCodePopup: (isOpen: boolean) => void;
};

type InitialStateType = {
  QrCodePopup: boolean;
};

const initialState: InitialStateType = {
  QrCodePopup: false,
};

export const usePopupController = create<PopupControllerState>((set) => ({
  ...initialState,
  setQrCodePopup: (isOpen: boolean) =>
    set((state) => ({ ...state, QrCodePopup: isOpen })),
}));
