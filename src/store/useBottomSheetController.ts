import { create } from 'zustand'

type BottomSheetControllerState = {
  storeSheet: boolean
  setStoreSheet: (isOpen: boolean) => void
  bankSelectSheet: boolean
  setBankSelectSheet: (isOpen: boolean) => void
}

type InitialStateType = {
  storeSheet: boolean
  bankSelectSheet: boolean
}

const initialState: InitialStateType = {
  storeSheet: false,
  bankSelectSheet: false,
}

export const useBottomSheetController = create<BottomSheetControllerState>((set) => ({
  ...initialState,
  setStoreSheet: (isOpen: boolean) => set((state) => ({ ...state, storeSheet: isOpen })),
  setBankSelectSheet: (isOpen: boolean) => set((state) => ({ ...state, bankSelectSheet: isOpen })),
}))
