import Image from "next/image";

export default function Login() {
  return (
    <div className="login-contents">
      <div className="login-header">
        <div className="logo">
          <Image src="/assets/images/layout/login_logo.svg" alt="logo" width={60} height={60} />
        </div>
        <div className="login-b-tit">WHALE ERP</div>
        <div className="login-s-tit">FOR RESTAURANT&CAFE</div>
      </div>
      <div className="login-form">
        <div className="login-form-tit">직원 전용 Smart Application</div>
        <div className="block mb8">
          <input type="text" className="input-frame" />
        </div>
        <div className="block mb8">
          <div className="input-icon-frame">
            <input type="text" />
            <button className="input-icon-btn hide"></button>
          </div>
        </div>
        <div className="login-form-btn">
          <button className="btn-form outline-g">회원가입</button>
          <button className="btn-form login">로그인</button>
        </div>
      </div>
    </div>
  );
} 