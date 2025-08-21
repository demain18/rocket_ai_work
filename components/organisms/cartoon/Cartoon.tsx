"use client";

import Image from "next/image";
import mainImage from "/img/Frame1410141630.png";
import Chatbox from "@/components/atoms/chatbox/Chatbox";

export interface Props {
  children?: React.ReactNode;
}

export default function Cartoon({ children, ...rest }: Props) {
  return (
    <div className="relative w-full">
      <div className="section-1 relative w-full">
        <img
          src={"/img/Rectangle 45.png" as string}
          className="w-full absolute inset-x-0 top-0"
        />
        <img
          src={"/img/Rectangle 47.png" as string}
          className="w-full absolute inset-x-0 bottom-0"
        />

        <img
          src={"/img/Frame 1410141499.png" as string}
          className="absolute m-auto left-0 right-0 top-30 max-[400px]:top-20 w-45"
        />
        <img
          src={"/img/Frame 1410141630.png" as string}
          alt="img"
          className="w-full"
        />
        <img
          src={"/img/Frame 1410141499.png" as string}
          className="absolute m-auto left-0 right-0 top-30 max-[400px]:top-20 w-45"
        />
        <Chatbox
          text="이제 본격적으로 OO님의 사주팔자를 분석해볼 차례네요."
          arrow="top"
        />
      </div>
      <div className="section-2 relative w-full bg-stone-100">
        <img
          src={"/img/Group 1410141673.png" as string}
          alt="img"
          className="w-full pt-32"
        />
      </div>
      <div className="section-3 relative w-full bg-stone-100">
        <img
          src={"/img/00637-3702098316 1.png" as string}
          alt="img"
          className="w-full pt-40"
        />
        <img
          src={"/img/Rectangle 218.png" as string}
          className="w-full absolute inset-x-0 bottom-0"
        />
        <Chatbox
          text="제가 oo님의 사주를 보기 쉽게 표로 정리했어요"
          arrow="bottom"
        />
      </div>
    </div>
  );
}
