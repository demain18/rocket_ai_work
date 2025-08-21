"use client";

export interface Props {
  children?: React.ReactNode;
  text?: string;
  arrow?: string;
}

export default function Chatbox({ children, text, arrow, ...rest }: Props) {
  return (
    <div>
      {arrow === "top" ? (
        <div className="absolute left-5 -bottom-[130px] z-2">
          <img src={"/img/Group 1410141556.png" as string} className="w-70" />{" "}
          <p className="absolute m-auto left-0 right-0 top-18 w-35 !text-wrap">
            {text}
          </p>
        </div>
      ) : arrow === "bottom" ? (
        <div className="absolute left-5 top-9 z-2">
          <img src={"/img/Group 1410141534.png" as string} className="w-70" />
          <p className="absolute m-auto left-0 right-0 top-12 w-35 !text-wrap">
            {text}
          </p>
        </div>
      ) : null}
    </div>
  );
}
