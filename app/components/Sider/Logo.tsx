import React from "react";
import { useRouter } from "next/navigation";
import { PATH } from "@/app/const/path";

interface ILogo {}

function Logo({}: ILogo) {
  const router = useRouter();

  const onClick = (path: string) => {
    return () => {
      router.push(PATH.MAIN);
    };
  };

  return (
    <div className="text-[22px] flex-center h-[64px] text-gs_1">
      <button onClick={onClick("/")}>LunChat Admin</button>
    </div>
  );
}

export default Logo;
