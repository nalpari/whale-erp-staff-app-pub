export default function MainContents() {
  return (
    <div className="main-contents">
      <div className="date-list-wrap">
        <div className="date-list-tit">12월 7일 금요일</div>
        <ul className="date-cont-list">
          <li className="date-cont-item">
            <div className="date-cont-bx">
              <div
                className="date-cont-ring"
                style={{ backgroundColor: "#88BDD4" }}
              ></div>
              <div className="date-cont-info">
                <div className="date-cont-info-name">힘이나는커피생활</div>
                <div className="date-cont-info-time">10:00-18:00</div>
              </div>
              <div className="date-check-btn-wrap">
                <button className="date-check-btn black">출근</button>
                <button className="date-check-btn outline">퇴근</button>
              </div>
            </div>
          </li>
          <li className="date-cont-item">
            <div className="date-cont-bx">
              <div
                className="date-cont-ring"
                style={{ backgroundColor: "#B1D488" }}
              ></div>
              <div className="date-cont-info">
                <div className="date-cont-info-name">힘이나는커피생활</div>
                <div className="date-cont-todo">
                  <span className="badge todo">TO-DO</span>
                  <span>머신 청소 확인(홍길동 님과 함께)</span>
                </div>
              </div>
            </div>
          </li>
          <li className="date-cont-item">
            <div className="date-cont-bx">
              <div
                className="date-cont-ring"
                style={{ backgroundColor: "#D4C588" }}
              ></div>
              <div className="date-cont-info">
                <div className="date-cont-info-name">바나프레소</div>
                <div className="date-cont-break">
                  <span className="badge break">공휴일</span>
                  <span>한글날</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
