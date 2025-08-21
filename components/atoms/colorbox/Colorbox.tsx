"use client";

export interface Props {
  children?: React.ReactNode;
  first?: string;
  second?: string;
  third?: string;
  color?: string;
  borderBox?: boolean;
}

export default function Colorbox({
  children,
  first,
  second,
  third,
  color,
  borderBox,
  ...rest
}: Props) {
  return borderBox ? (
    <div className="px-2 py-1 rounded-[13px] bg-[#fff] border-1 border-[#000]">
      <p className="text-[10px]">{first}</p>
      <p className="text-[20px]">{second}</p>
      <p className="block text-[12px] mt-0">{third}</p>
    </div>
  ) : (
    <div
      className="px-2 py-1 rounded-[13px]"
      style={{ backgroundColor: `#${color}` }}
    >
      <p className="text-[10px] text-[#fff]">{first}</p>
      <p className="text-[20px] text-[#fff]">{second}</p>
      <p className="block text-[12px] mt-0 text-[#fff]">{third}</p>
    </div>
  );
}
