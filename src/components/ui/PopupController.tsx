"use client";

import { useEffect } from "react";

import { usePopupController } from "@/store/usePopupController";
import QrCodePopup from "../popup/QrCodePopup";

export default function PopupController() {
  const popupController = usePopupController();

  useEffect(() => {
    // 모든 팝업 상태를 배열로 확인
    const isAnyPopupOpen = popupController.QrCodePopup;

    // body 클래스 토글
    if (isAnyPopupOpen) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }

    // 컴포넌트 언마운트 시 클래스 제거
    return () => {
      document.body.classList.remove("open");
    };
  }, [popupController.QrCodePopup]);

  return <>{popupController.QrCodePopup && <QrCodePopup />}</>;
}
