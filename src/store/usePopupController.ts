import { create } from 'zustand'

type PopupControllerState = {
  QrCodePopup: boolean
  setQrCodePopup: (isOpen: boolean) => void
  AlertPopup: boolean
  setAlertPopup: (isOpen: boolean) => void
}

type InitialStateType = {
  QrCodePopup: boolean
  AlertPopup: boolean
}

const initialState: InitialStateType = {
  QrCodePopup: false,
  AlertPopup: false,
}

export const usePopupController = create<PopupControllerState>((set) => ({
  ...initialState,
  setQrCodePopup: (isOpen: boolean) => set((state) => ({ ...state, QrCodePopup: isOpen })),
  setAlertPopup: (isOpen: boolean) => set((state) => ({ ...state, AlertPopup: isOpen })),
}))
