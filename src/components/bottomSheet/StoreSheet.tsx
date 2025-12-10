import { Sheet } from "react-modal-sheet";
import { useBottomSheetControler } from "@/store/useBottomSheetControler";

export default function StoreSheet() {
  const bottomSheetControler = useBottomSheetControler();

  return (
    <Sheet
      isOpen={bottomSheetControler.storeSheet}
      onClose={() => bottomSheetControler.setStoreSheet(false)}
      detent="content"
      disableScrollLocking={true}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="bottom-sheet">
            <div className="bottom-sheet-header">
              <h3>점포선택</h3>
            </div>
            <div className=" bottom-sheet-body">
              <ul className="array-list">
                <li className="array-item">
                  <button className="array-btn">
                    힘이나는커피생활 을지로3가점
                  </button>
                </li>
                <li className="array-item">
                  <button className="array-btn">메가커피 종로점</button>
                </li>
                <li className="array-item">
                  <button className="array-btn">바나프레소무교점</button>
                </li>
              </ul>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => bottomSheetControler.setStoreSheet(false)} />
    </Sheet>
  );
}
