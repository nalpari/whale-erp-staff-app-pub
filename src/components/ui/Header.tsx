import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="header-top">
          <div className="header-store-name">
            힘이 나는 커피생활 을지로3가점
          </div>
          <div className="header-menu-btn">
            <button className="menu-btn"></button>
          </div>
        </div>
        <div className="header-body">
          <div className="header-store-btn">
            <button className="select-btn">
              <span>힘이 나는 커피생활 을지로3가점</span>
            </button>
          </div>
          <div className="header-data-wrap">
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
        </div>
      </div>
      <div className="side-nav-wrap">
        <div className="side-nav-inner">sss</div>
      </div>
    </header>
  );
}
