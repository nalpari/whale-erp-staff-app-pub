"use client";
import { usePathname } from "next/navigation";

export default function SubHeader() {
  const pathname = usePathname();
  if(pathname === "/login") {
    return null
  }
  return (
    <div className="sub-header">
      <div className="sub-header-inner">
        <div className="sub-header-back">
          <button></button>
        </div>
        <h1 className="sub-header-title">Title</h1>
      </div>
    </div>
  );
}