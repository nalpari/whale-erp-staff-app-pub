"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/main");
  }, [router]);
  
  return null; // 또는 로딩 스피너
}