"use client";

import { useEffect } from "react";
import { useBottomSheetController } from "@/store/useBottomSheetController";
import StoreSheet from "../bottomSheet/StoreSheet";

export default function BottomSheetController() {
  // 필요한 상태만 선택적으로 구독
  const storeSheet = useBottomSheetController((state) => state.storeSheet);

  useEffect(() => {
    // body 클래스 토글
    if (storeSheet) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }

    // 컴포넌트 언마운트 시 클래스 제거
    return () => {
      document.body.classList.remove("open");
    };
  }, [storeSheet]);

  return <>{storeSheet && <StoreSheet />}</>;
}
