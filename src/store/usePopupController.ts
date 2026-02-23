import { create } from 'zustand'

type PopupControllerState = {
  QrCodePopup: boolean
  setQrCodePopup: (isOpen: boolean) => void
  AlertPopup: boolean
  setAlertPopup: (isOpen: boolean) => void
  PasswordChangePopup: boolean
  setPasswordChangePopup: (isOpen: boolean) => void
  AIChatPopup: boolean
  setAIChatPopup: (isOpen: boolean) => void
}

type InitialStateType = {
  QrCodePopup: boolean
  AlertPopup: boolean
  PasswordChangePopup: boolean
  AIChatPopup: boolean
}

const initialState: InitialStateType = {
  QrCodePopup: false,
  AlertPopup: false,
  PasswordChangePopup: false,
  AIChatPopup: false,
}

export const usePopupController = create<PopupControllerState>((set) => ({
  ...initialState,
  setQrCodePopup: (isOpen: boolean) => set((state) => ({ ...state, QrCodePopup: isOpen })),
  setAlertPopup: (isOpen: boolean) => set((state) => ({ ...state, AlertPopup: isOpen })),
  setPasswordChangePopup: (isOpen: boolean) => set((state) => ({ ...state, PasswordChangePopup: isOpen })),
  setAIChatPopup: (isOpen: boolean) => set((state) => ({ ...state, AIChatPopup: isOpen })),
}))
