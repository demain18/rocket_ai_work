"use client";

export interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children, ...rest }: Props) {
  return <div className="max-w-md flex-row m-auto">{children}</div>;
}
