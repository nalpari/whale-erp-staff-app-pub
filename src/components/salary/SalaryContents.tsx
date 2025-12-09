"use client";
import { useRouter } from "next/navigation";

export default function SalaryContents() {
  const router = useRouter();
  const salaryListData = 11;
  return (
    <div className="data-list-wrap">
      <div className="data-list-tit">급여명세서</div>
      {salaryListData > 0 ? (
        <ul className="data-list-cont">
          {Array.from({ length: salaryListData }).map((_, index) => (
            <li className="data-list-item" key={index}>
              <button
                className="salary-info"
                onClick={() => router.push(`/salary/${index + 1}`)}
              >
                <div className="salary-info-tit">2025년 10월 급여</div>
                <div className="salary-info-inner">
                  <div className="salary-info-name">
                    힘이나는커피생활 을지로3가점
                  </div>
                  <div className="salary-info-time">2025.11.05</div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="data-list-empty">급여명세서가 없습니다.</div>
      )}
    </div>
  );
}
