import { FunctionComponent } from "react";

const Pagination: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-center text-sm text-dark-grey-400 font-inter">
      <img
        className="h-8 w-8 relative rounded min-h-[32px]"
        loading="lazy"
        alt=""
        src="/page.svg"
      />
      <div className="flex-1 flex flex-row items-start justify-start text-blue-200 font-abeezee">
        <div className="flex-1 rounded bg-white overflow-hidden flex flex-row items-start justify-start py-[5px] px-[3px] border-[1px] border-solid border-blue-200">
          <img className="h-6 w-6 relative hidden" alt="" />
          <b className="w-6 relative leading-[22px] inline-block shrink-0">1</b>
        </div>
      </div>
      <div className="flex-[0.75] rounded bg-white flex flex-row items-start justify-start py-[5px] px-[3px] border-[1px] border-solid border-gainsboro-100">
        <b className="w-6 relative leading-[22px] inline-block shrink-0">2</b>
      </div>
      <div className="flex-[0.75] rounded bg-white flex flex-row items-start justify-start py-[5px] px-[3px] border-[1px] border-solid border-gainsboro-100">
        <b className="w-6 relative leading-[22px] inline-block shrink-0">...</b>
      </div>
      <div className="flex-[0.75] rounded bg-white flex flex-row items-start justify-start py-[5px] px-[3px] border-[1px] border-solid border-gainsboro-100">
        <b className="w-6 relative leading-[22px] inline-block shrink-0">9</b>
      </div>
      <div className="flex-[0.75] rounded bg-white flex flex-row items-start justify-start py-[5px] px-[3px] border-[1px] border-solid border-gainsboro-100">
        <b className="w-6 relative leading-[22px] inline-block shrink-0">10</b>
      </div>
      <img
        className="h-8 w-8 relative rounded min-h-[32px]"
        alt=""
        src="/page-1.svg"
      />
    </div>
  );
};

export default Pagination;
