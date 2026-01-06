"use client";

import { useEffect } from "react";

import { usePopupController } from "@/store/usePopupController";
import QrCodePopup from "../popup/QrCodePopup";

export default function PopupController() {
  // 필요한 상태만 선택적으로 구독
  const isQrCodePopupOpen = usePopupController((state) => state.QrCodePopup);

  useEffect(() => {
    // body 클래스 토글
    if (isQrCodePopupOpen) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }

    // 컴포넌트 언마운트 시 클래스 제거
    return () => {
      document.body.classList.remove("open");
    };
  }, [isQrCodePopupOpen]);

  return <>{isQrCodePopupOpen && <QrCodePopup />}</>;
}
