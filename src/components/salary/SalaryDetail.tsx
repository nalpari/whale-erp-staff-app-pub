export default function SalaryDetail() {
  return (
    <div className="salary-detail-wrap">
      <div className="salary-detail-bx">
        <div className="data-list-wrap">
          <div className="data-list-tit">
            <span>2025년 1월 급여명세서</span>
            <button className="download-btn black">파일 다운로드</button>
          </div>
          <div className="salary-detail-table-wrap">
            <table className="salary-detail-table">
              <tbody>
                <tr>
                  <th>점포명</th>
                  <td>힘이나는커피생활 을지로3가점</td>
                </tr>
                <tr>
                  <th>직원명</th>
                  <td>홍길동</td>
                </tr>
                <tr>
                  <th>급여지급월</th>
                  <td>2025년 01월</td>
                </tr>
                <tr>
                  <th>급여일</th>
                  <td>2025.02.05</td>
                </tr>
                <tr>
                  <th>정산 기간</th>
                  <td>2025.01.01~2025.01.31</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="salary-detail-bx">
        <div className="data-list-wrap">
          <div className="data-list-tit">
            <span>공제 상세 정보</span>
          </div>
          <ul className="data-list-cont">
            <li className="data-list-item">
              <div className="data-list-item-data">
                <div className="data-list-item-data-name">국민연금 공제</div>
                <div className="data-list-item-data-value">26,000원</div>
              </div>
            </li>
            <li className="data-list-item">
              <div className="data-list-item-data">
                <div className="data-list-item-data-name">건강보험 공제</div>
                <div className="data-list-item-data-value">26,000원</div>
              </div>
            </li>
            <li className="data-list-item">
              <div className="data-list-item-data">
                <div className="data-list-item-data-name">고용보험 공제</div>
                <div className="data-list-item-data-value">26,000원</div>
              </div>
            </li>
            <li className="data-list-item">
              <div className="data-list-item-data">
                <div className="data-list-item-data-name">
                  장기요양보험 공제
                </div>
                <div className="data-list-item-data-value">26,000원</div>
              </div>
            </li>
            <li className="data-list-item">
              <div className="data-list-item-data">
                <div className="data-list-item-data-name">산재보험 공제</div>
                <div className="data-list-item-data-value">26,000원</div>
              </div>
            </li>
            <li className="data-list-item">
              <div className="data-list-item-data">
                <div className="data-list-item-data-name">소득세</div>
                <div className="data-list-item-data-value">26,000원</div>
              </div>
            </li>
            <li className="data-list-item">
              <div className="data-list-item-data">
                <div className="data-list-item-data-name">지방소득세</div>
                <div className="data-list-item-data-value">26,000원</div>
              </div>
            </li>
          </ul>
          <div className="data-list-total">
            <div className="data-list-total-name">공제금액</div>
            <div className="data-list-total-value">366,610원</div>
          </div>
        </div>
        <div className="data-list-wrap">
          <div className="data-list-tit">
            <span>지급 상세 정보</span>
          </div>
          <ul className="data-list-cont">
            <li className="data-list-item">
              <div className="data-list-item-data">
                <div className="data-list-item-data-name">기본급</div>
                <div className="data-list-item-data-value">26,000원</div>
              </div>
            </li>
            <li className="data-list-item">
              <div className="data-list-item-data">
                <div className="data-list-item-data-name">식대</div>
                <div className="data-list-item-data-value">26,000원</div>
              </div>
            </li>
            <li className="data-list-item">
              <div className="data-list-item-data">
                <div className="data-list-item-data-name">자가운전보조금</div>
                <div className="data-list-item-data-value">26,000원</div>
              </div>
            </li>
            <li className="data-list-item">
              <div className="data-list-item-data">
                <div className="data-list-item-data-name">육아수당</div>
                <div className="data-list-item-data-value">26,000원</div>
              </div>
            </li>
            <li className="data-list-item">
              <div className="data-list-item-data">
                <div className="data-list-item-data-name">야간수당</div>
                <div className="data-list-item-data-value">26,000원</div>
              </div>
            </li>
            <li className="data-list-item">
              <div className="data-list-item-data">
                <div className="data-list-item-data-name">
                  월간 휴일근무 수당
                </div>
                <div className="data-list-item-data-value">26,000원</div>
              </div>
            </li>
            <li className="data-list-item">
              <div className="data-list-item-data">
                <div className="data-list-item-data-name">추가 근무수당</div>
                <div className="data-list-item-data-value">26,000원</div>
              </div>
            </li>
            <li className="data-list-item">
              <div className="data-list-item-data">
                <div className="data-list-item-data-name">직책 상여</div>
                <div className="data-list-item-data-value">26,000원</div>
              </div>
            </li>
            <li className="data-list-item">
              <div className="data-list-item-data">
                <div className="data-list-item-data-name">인센티브</div>
                <div className="data-list-item-data-value">26,000원</div>
              </div>
            </li>
          </ul>
          <div className="data-list-total">
            <div className="data-list-total-name">지급액계</div>
            <div className="data-list-total-value">3,333,333원</div>
          </div>
        </div>
        <div className="salary-detail-total-bx">
          <div className="salary-detail-total-name">실지급액</div>
          <div className="salary-detail-total-value">
            <div className="salary-detail-total-value-name">실지급액</div>
            <div className="salary-detail-total-value-value">2,966,724원</div>
          </div>
        </div>
      </div>
    </div>
  );
}
