"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useBottomSheetController } from "@/store/useBottomSheetController";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const bottomSheetController = useBottomSheetController();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  return (
    <header>
      <div className="header-inner">
        <div className="header-top">
          <div
            className="header-data-wrap"
            onClick={() => router.push("/list")}
          >
            <div className="header-data-img">
              <Image
                src="/assets/images/common/avatar_icon.svg"
                alt="header-data-img"
                fill
              />
            </div>
            <ul className="header-data-list">
              <li className="header-data-item">
                <span>홍길동</span> 과장
              </li>
              <li className="header-data-item">매장 매니저</li>
            </ul>
          </div>
          <div className="header-menu-btn">
            <button
              className="menu-btn"
              onClick={() => setIsSideNavOpen(true)}
            ></button>
          </div>
        </div>
        <div className="header-body">
          <div className="header-store-btn">
            <button
              className="select-btn"
              onClick={() => bottomSheetController.setStoreSheet(true)}
            >
              <span>힘이 나는 커피생활 을지로3가점</span>
            </button>
          </div>
        </div>
      </div>
      <div className={`side-nav-wrap ${isSideNavOpen ? "act" : ""}`}>
        <div className="side-nav-inner">
          <div className="side-nav-header">
            <div className="side-nav-header-inner">
              <div className="side-nav-header-icon">
                <Image
                  src="/assets/images/common/avatar_icon.svg"
                  alt="side-nav-header-icon"
                  fill
                />
              </div>
              <div className="side-nav-header-info">
                <div className="side-nav-header-name">
                  <span>홍길동</span>님 환영 합니다.
                </div>
                <div className="side-nav-header-company">Interplug corp.</div>
              </div>
            </div>
            <button
              className="side-close-btn"
              onClick={() => setIsSideNavOpen(false)}
            ></button>
          </div>
          <div className="side-nav-logout-wrap">
            <button className="btn-form black block">로그아웃</button>
          </div>
          <div className="side-nav-body">
            <ul className="side-nav-body-list">
              <li className="side-nav-body-item">
                <Link href="/" onClick={() => setIsSideNavOpen(false)}>
                  회원 정보 수정
                </Link>
              </li>
              <li className="side-nav-body-item">
                <Link href="/" onClick={() => setIsSideNavOpen(false)}>
                  비밀번호 변경
                </Link>
              </li>
              <li className="side-nav-body-item">
                <Link href="/" onClick={() => setIsSideNavOpen(false)}>
                  근무 시간 조회 및 출퇴근 체크
                </Link>
              </li>
              <li className="side-nav-body-item">
                <Link href="/" onClick={() => setIsSideNavOpen(false)}>
                  근로계약서
                </Link>
              </li>
              <li className="side-nav-body-item">
                <Link href="/salary" onClick={() => setIsSideNavOpen(false)}>
                  급여명세서
                </Link>
              </li>
              <li className="side-nav-body-item">
                <Link href="/" onClick={() => setIsSideNavOpen(false)}>
                  TO-DO LIST
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
