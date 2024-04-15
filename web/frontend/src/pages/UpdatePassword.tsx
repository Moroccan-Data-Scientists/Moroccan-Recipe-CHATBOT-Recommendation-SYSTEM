import { FunctionComponent } from "react";

const UpdatePassword: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-end justify-start gap-[40px] leading-[normal] tracking-[normal] text-left text-5xl text-black font-inter mq750:gap-[40px_20px] mq1125:flex-wrap">
      <div className="h-[832px] w-[717px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border relative min-w-[717px] max-w-full mq1025:min-w-full mq1125:flex-1">
        <div className="self-stretch flex flex-col items-start justify-end pt-[619.2px] pb-[151.39999999999998px] pr-[92.80000000000018px] pl-[124.60000000000036px] relative shrink-0 [debug_commit:f6aba90] mq750:pt-[402px] mq750:pb-[98px] mq750:pr-[46px] mq750:pl-[62px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="w-[687.3px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[-23.2px] rounded-27xl bg-whitesmoke-100" />
          <img
            className="w-[97.7px] h-[104.4px] relative object-cover hidden z-[2]"
            alt=""
            src="/image-2@2x.png"
          />
          <img
            className="w-[89.2px] h-[95.2px] relative object-cover hidden z-[3]"
            alt=""
            src="/image-3@2x.png"
          />
          <div className="w-[308.2px] relative hidden items-center h-[71.6px] shrink-0 [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] z-[4] mq450:text-lgi">
            nom complete
          </div>
          <div className="w-[108.7px] relative hidden items-center h-[71.1px] shrink-0 [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] z-[5] mq450:text-lgi">
            Admin
          </div>
          <div className="w-[308.2px] relative hidden items-center h-[71.6px] shrink-0 [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] z-[6] mq450:text-lgi">
            Password
          </div>
          <div className="w-[570.5px] h-[90px] relative rounded-18xl bg-whitesmoke-500 box-border hidden max-w-full z-[7] border-[1px] border-solid border-gray-400" />
          <div className="w-[570.5px] h-[90px] relative rounded-18xl bg-whitesmoke-500 box-border hidden max-w-full z-[8] border-[1px] border-solid border-gray-400" />
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-[26px] text-gray-300">
            <div className="h-[75.7px] w-[243.1px] absolute !m-[0] bottom-[-2.3px] left-[-58.6px] rounded-xl bg-white box-border z-[1] border-[1px] border-solid border-black" />
            <div className="h-[75.7px] w-[243.1px] absolute !m-[0] right-[-15.1px] bottom-[-2.3px] rounded-xl bg-antiquewhite z-[1]" />
            <div className="flex-1 flex flex-row items-start justify-end max-w-full">
              <div className="h-[73.4px] w-[163.7px] relative flex items-center shrink-0 [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] z-[2] mq450:text-[21px]">
                continue
              </div>
            </div>
          </div>
          <div className="w-[146.6px] h-[59.6px] relative flex items-center shrink-0 [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] z-[2] mt-[-65.3px] mq450:text-lgi">
            Retourner
          </div>
          <div className="w-[183.2px] relative hidden items-center h-[36.7px] shrink-0 [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] z-[13] mq450:text-lgi">
            Employeurs
          </div>
        </div>
        <img
          className="w-[91px] h-[88px] absolute !m-[0] top-[32px] left-[289px] object-cover z-[3]"
          loading="lazy"
          alt=""
          src="/image-14@2x.png"
        />
        <div className="w-[310.8px] !m-[0] absolute top-[160px] left-[66.2px] flex flex-row items-start justify-start">
          <div className="h-[69.6px] flex-1 relative flex items-center [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] box-border pr-0 z-[3] mq450:text-lgi">
            Mot de passe actuel
          </div>
          <div className="h-[87.5px] w-[575.3px] absolute !m-[0] right-[-243.3px] bottom-[-72.6px] rounded-18xl bg-whitesmoke-500 box-border z-[3] border-[1px] border-solid border-gray-400" />
        </div>
        <div className="w-[310.8px] !m-[0] absolute top-[302px] left-[66.2px] flex flex-row items-start justify-start">
          <div className="h-[69.6px] flex-1 relative flex items-center [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] box-border pr-0 z-[3] mq450:text-lgi">
            nouveau mot de passe
          </div>
          <input
            className="[outline:none] bg-whitesmoke-500 h-[87.5px] w-[575.3px] absolute !m-[0] right-[-243.3px] bottom-[-72.6px] rounded-18xl box-border z-[3] border-[1px] border-solid border-gray-400"
            type="text"
          />
        </div>
        <div className="!m-[0] absolute top-[444px] left-[71px] flex flex-row items-start justify-start">
          <div className="h-[70px] relative flex items-center [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] z-[3] mq450:text-lgi">
            confirmer le nouveau mot de passe
          </div>
          <div className="h-[87.5px] w-[575.3px] absolute !m-[0] right-[-151.3px] bottom-[-72.2px] rounded-18xl bg-whitesmoke-500 box-border z-[3] border-[1px] border-solid border-gray-400" />
        </div>
      </div>
      <div className="h-[626px] w-[431px] flex flex-col items-start justify-start min-w-[431px] max-w-full mq750:min-w-full mq1125:flex-1">
        <img
          className="self-stretch h-[431px] relative max-w-full overflow-hidden shrink-0 object-cover mq1125:self-stretch mq1125:w-auto"
          loading="lazy"
          alt=""
          src="/image-20@2x.png"
        />
      </div>
    </div>
  );
};

export default UpdatePassword;
