import { create } from 'zustand'

type BottomSheetControllerState = {
  storeSheet: boolean
  setStoreSheet: (isOpen: boolean) => void
  bankSelectSheet: boolean
  setBankSelectSheet: (isOpen: boolean) => void
  workPlaceAddSheet: boolean
  setWorkPlaceAddSheet: (isOpen: boolean) => void
  accountSelectSheet: boolean
  setAccountSelectSheet: (isOpen: boolean) => void
  employmentNotificationSheet: boolean
  setEmploymentNotificationSheet: (isOpen: boolean) => void
}

type InitialStateType = {
  storeSheet: boolean
  bankSelectSheet: boolean
  workPlaceAddSheet: boolean
  accountSelectSheet: boolean
  employmentNotificationSheet: boolean
}

const initialState: InitialStateType = {
  storeSheet: false,
  bankSelectSheet: false,
  workPlaceAddSheet: false,
  accountSelectSheet: false,
  employmentNotificationSheet: false,
}

export const useBottomSheetController = create<BottomSheetControllerState>((set) => ({
  ...initialState,
  setStoreSheet: (isOpen: boolean) => set((state) => ({ ...state, storeSheet: isOpen })),
  setBankSelectSheet: (isOpen: boolean) => set((state) => ({ ...state, bankSelectSheet: isOpen })),
  setWorkPlaceAddSheet: (isOpen: boolean) => set((state) => ({ ...state, workPlaceAddSheet: isOpen })),
  setAccountSelectSheet: (isOpen: boolean) => set((state) => ({ ...state, accountSelectSheet: isOpen })),
  setEmploymentNotificationSheet: (isOpen: boolean) => set((state) => ({ ...state, employmentNotificationSheet: isOpen })),
}))
