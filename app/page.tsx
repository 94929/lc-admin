import { redirect } from "next/navigation";
import { PATH } from "@/app/const/path";

export default function Home() {
  redirect(PATH.DASHBOARD);

  return <div>{/** 기본 페이지로 리다이렉트 */}</div>;
}
