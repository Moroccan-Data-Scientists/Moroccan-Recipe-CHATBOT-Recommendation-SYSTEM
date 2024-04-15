import { FunctionComponent } from "react";
import CreateAccount from "../components/CreateAccount";

const LogInPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-center pt-[34px] px-5 pb-[62px] box-border leading-[normal] tracking-[normal] text-left text-lg text-white font-inter">
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-2@2x.png"
      />
      <div className="w-[618px] flex flex-col items-start justify-start relative max-w-full">
        <CreateAccount />
        <div className="w-[407px] h-[179px] absolute !m-[0] bottom-[142px] left-[99px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-xl w-full h-full z-[3]"
            loading="lazy"
            alt=""
            src="/rectangle-7.svg"
          />
          <div className="absolute top-[8px] left-[184px] flex items-center w-[140px] h-[53px] [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] z-[4]">{`Log in `}</div>
        </div>
        <div className="!m-[0] absolute top-[642px] left-[169.8px] flex flex-row items-start justify-start">
          <button className="cursor-pointer pt-[14.300000000000011px] pb-[14.399999999999975px] pr-[71px] pl-[70px] bg-gainsboro-300 w-[290px] !m-[0] absolute top-[2.7px] right-[-215.5px] rounded-17xl box-border flex flex-row items-start justify-end whitespace-nowrap z-[3] border-[5px] border-solid border-gray-100 hover:bg-silver hover:box-border hover:border-[5px] hover:border-solid hover:border-dimgray-100">
            <div className="h-[51.7px] w-[290px] relative rounded-17xl bg-gainsboro-300 box-border hidden border-[5px] border-solid border-gray-100" />
            <div className="w-[139px] relative text-mini font-knewave text-black text-center inline-block shrink-0 z-[4]">
              Login with Google
            </div>
          </button>
          <img
            className="h-[57.7px] w-[67.7px] relative object-cover z-[4]"
            loading="lazy"
            alt=""
            src="/image-11@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
