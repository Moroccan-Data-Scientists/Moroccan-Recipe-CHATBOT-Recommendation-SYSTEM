import { FunctionComponent } from "react";

const SignUp: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 bg-darkgray overflow-hidden flex flex-row items-end justify-start py-0 pr-0 pl-10 box-border gap-[40px] max-w-full text-center text-xl text-black font-knewave mq750:gap-[40px_20px] mq1125:flex-wrap mq1125:p-5 mq1125:box-border">
        <div className="h-[100px] w-[100px] relative overflow-hidden shrink-0 hidden" />
        <div className="w-[487px] flex flex-col items-start justify-start pt-0 px-0 pb-[51px] box-border min-w-[487px] min-h-[773px] max-w-full mq750:min-w-full mq1025:pb-[21px] mq1025:box-border mq450:pb-[33px] mq450:box-border mq1125:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full">
            <div className="self-stretch h-[78px] relative inline-block shrink-0 mq1025:text-base">
              <p className="m-0">Hi There !</p>
              <p className="m-0">Welcome to Moroccan Recipe CHATBOT</p>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-11 pl-10 box-border max-w-full mq750:pr-[22px] mq750:box-border">
              <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq1025:gap-[16px_32px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16.5px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="w-[247px] h-[39px] flex flex-row items-start justify-start py-0 px-[15px] box-border">
                      <div className="h-[50px] flex-1 relative text-base font-inter text-black text-left flex items-center [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] shrink-0 [debug_commit:f6aba90]">
                        Nom complete
                      </div>
                    </div>
                    <div className="self-stretch h-[45px] relative rounded-mini bg-whitesmoke-500 box-border shrink-0 [debug_commit:f6aba90] border-[1px] border-solid border-gray-400" />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="w-[247px] h-[41px] flex flex-row items-start justify-start py-0 px-[15px] box-border">
                      <div className="h-[49px] flex-1 relative text-base font-inter text-black text-left flex items-center [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] shrink-0 [debug_commit:f6aba90]">
                        Email
                      </div>
                    </div>
                    <div className="self-stretch h-[45px] relative rounded-mini bg-whitesmoke-500 box-border shrink-0 [debug_commit:f6aba90] border-[1px] border-solid border-gray-400" />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="w-[254px] flex flex-row items-start justify-start py-0 px-[18px] box-border">
                        <div className="h-[50px] flex-1 relative text-base font-inter text-black text-left flex items-center [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
                          password
                        </div>
                      </div>
                      <div className="self-stretch h-[45px] relative rounded-mini bg-whitesmoke-500 box-border border-[1px] border-solid border-gray-400" />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="w-[242px] h-[43px] flex flex-row items-start justify-start py-0 px-3 box-border">
                        <div className="h-[50px] flex-1 relative text-base font-inter text-black text-left flex items-center [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] shrink-0 [debug_commit:f6aba90]">
                          Confirm password
                        </div>
                      </div>
                      <div className="self-stretch h-[45px] relative rounded-mini bg-whitesmoke-500 box-border shrink-0 [debug_commit:f6aba90] border-[1px] border-solid border-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[29.399999999999977px] max-w-full">
                  <div className="self-stretch flex flex-col items-end justify-start gap-[14.100000000000025px] max-w-full">
                    <div className="w-[389px] flex flex-row items-start justify-end py-0 px-[59px] box-border max-w-full mq1025:pl-5 mq1025:pr-5 mq1025:box-border">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[8.300000000000011px]">
                        <div className="w-[258.1px] flex flex-row items-start justify-start py-0 pr-[5px] pl-[4.899999999999977px] box-border">
                          <button className="cursor-pointer pt-[13.099999999999994px] pb-[12.699999999999989px] pr-[42.40000000000009px] pl-[47.30000000000007px] bg-gray-200 flex-1 rounded-17xl flex flex-row items-start justify-start shrink-0 [debug_commit:f6aba90] border-[5px] border-solid border-gray-500 hover:bg-darkslategray hover:box-border hover:border-[5px] hover:border-solid hover:border-dimgray-200">
                            <div className="h-[46.7px] w-[248.3px] relative rounded-17xl bg-gray-200 box-border hidden border-[5px] border-solid border-gray-500" />
                            <div className="flex-1 relative text-sm font-knewave text-white text-center z-[1]">
                              SIGN UP
                            </div>
                          </button>
                        </div>
                        <div className="self-stretch h-[29px] relative font-knewave text-center inline-block shrink-0 [debug_commit:f6aba90] z-[1]">
                          <span className="text-mini text-black">{`Already have an account ? `}</span>
                          <span className="text-base text-indianred-100">
                            Login
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq1025:flex-wrap">
                      <div className="w-[143.1px] flex flex-col items-start justify-start pt-[14.899999999999975px] px-0 pb-0 box-border">
                        <div className="w-[148.3px] h-px relative box-border border-t-[1px] border-solid border-black" />
                      </div>
                      <div className="w-[112.6px] flex flex-col items-start justify-start py-0 pr-[6.2999999999999545px] pl-0 box-border">
                        <div className="self-stretch h-[14.9px] relative text-sm font-knewave text-black text-center inline-block shrink-0">
                          or
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[14.899999999999975px] px-0 pb-0 box-border min-w-[96px]">
                        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-black" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-20 pl-[73.79999999999995px] mq1025:pl-5 mq1025:pr-5 mq1025:box-border">
                    <button className="cursor-pointer pt-[12.100000000000025px] px-[23.200000000000045px] pb-[11.199999999999989px] bg-gainsboro-300 flex-1 rounded-17xl flex flex-row items-start justify-start gap-[18.90000000000009px] border-[5px] border-solid border-gray-100 mq1025:flex-wrap">
                      <div className="h-[47.6px] w-[249.4px] relative rounded-17xl bg-gainsboro-300 box-border hidden border-[5px] border-solid border-gray-100" />
                      <img
                        className="self-stretch w-[35.8px] relative max-h-full object-cover min-h-[24px] z-[1]"
                        alt=""
                        src="/image-11@2x.png"
                      />
                      <div className="w-[132.6px] flex flex-col items-start justify-start pt-[1.8999999999999773px] px-0 pb-0 box-border">
                        <div className="self-stretch relative text-xs font-knewave text-black text-center z-[1]">
                          sign up with Google
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img
          className="h-[832px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[463px] z-[1] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
      </main>
    </div>
  );
};

export default SignUp;
