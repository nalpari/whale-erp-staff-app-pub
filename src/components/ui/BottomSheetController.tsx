'use client'

import { useEffect } from 'react'
import { useBottomSheetController } from '@/store/useBottomSheetController'
import StoreSheet from '../bottomSheet/StoreSheet'
import BankSelectSheet from '../bottomSheet/BankSelect'
import WorkPlaceAddSheet from '../bottomSheet/WorkPlaceAdd'
import AccountSelect from '../bottomSheet/AccountSelect'
import EmploymentNotificationSheet from '../bottomSheet/EmploymentNotificationSheet'
import CommuteDaySelect from '../bottomSheet/CommuteDaySelect'
import AvatarSelect from '../bottomSheet/AvatarSelect'
import PhoneChangeSheet from '../bottomSheet/PhoneChangeSheet'

export default function BottomSheetController() {
  // 필요한 상태만 선택적으로 구독
  const storeSheet = useBottomSheetController((state) => state.storeSheet)
  const bankSelectSheet = useBottomSheetController((state) => state.bankSelectSheet)
  const workPlaceAddSheet = useBottomSheetController((state) => state.workPlaceAddSheet)
  const accountSelectSheet = useBottomSheetController((state) => state.accountSelectSheet)
  const employmentNotificationSheet = useBottomSheetController((state) => state.employmentNotificationSheet)
  const commuteDaySelectSheet = useBottomSheetController((state) => state.commuteDaySelectSheet)
  const avatarSelectSheet = useBottomSheetController((state) => state.avatarSelectSheet)
  const phoneChangeSheet = useBottomSheetController((state) => state.phoneChangeSheet)

  useEffect(() => {
    // body 클래스 토글
    if (storeSheet || bankSelectSheet || workPlaceAddSheet || accountSelectSheet || employmentNotificationSheet || commuteDaySelectSheet || avatarSelectSheet || phoneChangeSheet) {
      document.body.classList.add('open')
    } else {
      document.body.classList.remove('open')
    }

    // 컴포넌트 언마운트 시 클래스 제거
    return () => {
      document.body.classList.remove('open')
    }
  }, [storeSheet, bankSelectSheet, workPlaceAddSheet, accountSelectSheet, employmentNotificationSheet, commuteDaySelectSheet, avatarSelectSheet, phoneChangeSheet])

  return (
    <>
      {storeSheet && <StoreSheet />}
      {bankSelectSheet && <BankSelectSheet />}
      {workPlaceAddSheet && <WorkPlaceAddSheet />}
      {accountSelectSheet && <AccountSelect />}
      {employmentNotificationSheet && <EmploymentNotificationSheet />}
      {commuteDaySelectSheet && <CommuteDaySelect />}
      {avatarSelectSheet && <AvatarSelect />}
      {phoneChangeSheet && <PhoneChangeSheet />}
    </>
  )
}
