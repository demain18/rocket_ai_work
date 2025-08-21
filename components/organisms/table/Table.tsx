"use client";

import Colorbox from "@/components/atoms/colorbox/Colorbox";

export interface Props {
  children?: React.ReactNode;
}

export default function Table({ children, ...rest }: Props) {
  return (
    <div className="p-3">
      <div className="relative bg-[#f5f3ec] w-full border-3 border-[#1B2F49]">
        <img
          src={"/img/장식1.png" as string}
          className="absolute left-[0px] top-[45px] w-20"
        />
        <img
          src={"/img/장식2.png" as string}
          className="absolute right-[0px] top-[25px] w-20"
        />
        <div className="absolute top-0 left-0 w-full h-[8px] border-b-1 border-b-[#2B557E] z-2"></div>
        <div className="absolute bottom-0 left-0 w-full h-[8px] border-t-1 border-t-[#2B557E] z-2"></div>
        <div className="absolute top-0 left-0 w-[8px] h-full border-r-1 border-r-[#2B557E] z-2"></div>
        <div className="absolute top-0 right-0 w-[8px] h-full border-l-1 border-l-[#2B557E] z-2"></div>
        <div>
          <p className="text-center font-normal text-[#424242] pt-10">
            김로켓님의 사주
          </p>
          <p className="text-center font-bold text-xl text-[#424242] mt-3">
            1980년 8월27일 08:10
          </p>
        </div>
        <div className="p-5">
          <table className="w-full text-center table-fixed">
            <thead>
              <tr className="font-bold">
                <th className="border border-black p-2 align-middle min-w-18"></th>
                <th className="border border-black p-2 align-middle">
                  時<span className="block mt-1 text-xs">(시)</span>
                </th>
                <th className="border border-black p-2 align-middle">
                  日<span className="block mt-1 text-xs">(일)</span>
                </th>
                <th className="border border-black p-2 align-middle">
                  月<span className="block mt-1 text-xs">(월)</span>
                </th>
                <th className="border border-black p-2 align-middle">
                  年<span className="block mt-1 text-xs">(년)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#fff]">
                <td className="border border-black p-2 align-middle font-bold  w-[10%] bg-[#f5f3ec]">
                  十星<span className="block text-xs mt-1">(십성)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  傷官<span className="block text-xs mt-1">(상관)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  比肩<span className="block text-xs mt-1">(비견)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  傷官<span className="block text-xs mt-1">(상관)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  傷官<span className="block text-xs mt-1">(상관)</span>
                </td>
              </tr>
              <tr className="bg-[#fff]">
                <td className="border border-black p-2 align-middle font-bold bg-[#f5f3ec]">
                  天干<span className="block text-xs mt-1">(천간)</span>
                </td>
                <td className="border border-black p-1">
                  <Colorbox
                    first="임"
                    second="壬"
                    third="陽水"
                    color="2F2F2F"
                  />
                </td>
                <td className="border border-black p-1">
                  <Colorbox
                    first="정"
                    second="丁"
                    third="陰火"
                    color="C23030"
                  />
                </td>
                <td className="border border-black p-1">
                  <Colorbox
                    first="계"
                    second="癸"
                    third="陰水"
                    color="2F2F2F"
                  />
                </td>
                <td className="border border-black p-1">
                  <Colorbox
                    first="계"
                    second="癸"
                    third="陰水"
                    color="2F2F2F"
                  />
                </td>
              </tr>
              <tr className="bg-[#fff]">
                <td className="border border-black p-2 align-middle font-bold bg-[#f5f3ec]">
                  地支<span className="block text-xs mt-1">(지지)</span>
                </td>
                <td className="border border-black p-1">
                  <Colorbox
                    first="인"
                    second="寅"
                    third="陽木"
                    color="18868C"
                  />
                </td>
                <td className="border border-black p-1">
                  <Colorbox
                    first="사"
                    second="巳"
                    third="陰火"
                    color="C23030"
                  />
                </td>
                <td className="border border-black p-1">
                  <Colorbox
                    first="해"
                    second="亥"
                    third="陰水"
                    color="2F2F2F"
                  />
                </td>
                <td className="border border-black p-1">
                  <Colorbox first="해" second="酉" third="陰金" borderBox />
                </td>
              </tr>
              <tr className="bg-[#fff]">
                <td className="border border-black p-2 align-middle font-bold bg-[#f5f3ec]">
                  十星<span className="block text-xs mt-1">(십이운성)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  比肩<span className="block text-xs mt-1">(비견)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  劫財<span className="block text-xs mt-1">(겁재)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  食神<span className="block text-xs mt-1">(식신)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  偏財<span className="block text-xs mt-1">(편재)</span>
                </td>
              </tr>
              <tr className="bg-[#fff]">
                <td className="border border-black p-2 align-middle font-bold bg-[#f5f3ec]">
                  十二運星<span className="block text-xs mt-1">(십이운성)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  死<span className="block text-xs mt-1">(사)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  帝旺<span className="block text-xs mt-1">(제왕)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  胎<span className="block text-xs mt-1">(태)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  長生<span className="block text-xs mt-1">(장생)</span>
                </td>
              </tr>
              <tr className="bg-[#fff]">
                <td className="border border-black p-2 align-middle font-bold bg-[#f5f3ec]">
                  十二神殺<span className="block text-xs mt-1">(십이신살)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  劫殺<span className="block text-xs mt-1">(겁살)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  地殺<span className="block text-xs mt-1">(지살)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  驛馬殺<span className="block text-xs mt-1">(역마살)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  將星殺<span className="block text-xs mt-1">(장성살)</span>
                </td>
              </tr>
              <tr className="bg-[#fff]">
                <td className="border border-black p-2 align-middle font-bold bg-[#f5f3ec]">
                  貴人<span className="block text-xs mt-1">(귀인)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  <span className="block text-xs mt-1">(없음)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  <span className="block text-xs mt-1">(없음)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  天乙<span className="block text-xs mt-1">(천을귀인)</span>
                </td>
                <td className="border border-black p-2 align-middle">
                  天乙<span className="block text-xs mt-1">(천을귀인)</span>
                  <br />
                  太極<span className="block text-xs mt-1">(태극귀인)</span>
                  <br />
                  文昌<span className="block text-xs mt-1">(문창귀인)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
