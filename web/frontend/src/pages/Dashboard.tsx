import { FunctionComponent } from "react";
import Pagination from "../components/Pagination";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border gap-[27px] leading-[normal] tracking-[normal]">
      <header className="self-stretch flex flex-row items-start justify-start py-0 pr-[25px] pl-[511px] box-border gap-[148px] max-w-full text-center text-xs text-black font-knewave lg:gap-[148px_74px] lg:pl-[255px] lg:box-border mq750:gap-[148px_37px] mq750:pl-[127px] mq750:box-border mq1025:gap-[148px_18px] mq1025:pl-5 mq1025:box-border">
        <div className="ml-[-563px] w-[415px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border max-w-full mq750:w-0 mq450:hidden">
          <div className="self-stretch h-[27px] relative inline-block shrink-0 whitespace-nowrap mq750:hidden">
            Bonjoure Johne Donne bienvenue au votre compte
          </div>
        </div>
        <div className="h-[54px] w-[377px] flex flex-col items-start justify-start max-w-full">
          <img
            className="w-[153px] flex-1 relative max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/image-16@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <div className="flex flex-row items-start justify-start gap-[15px]">
            <div className="flex flex-col items-start justify-start pt-[11px] pb-0 pr-[33px] pl-0">
              <img
                className="w-[27px] h-[27px] relative object-cover"
                loading="lazy"
                alt=""
                src="/image-13@2x.png"
              />
            </div>
            <div className="w-8 flex flex-row items-start justify-start relative">
              <div className="h-[23px] flex-1 relative inline-block">12</div>
              <img
                className="h-[30px] w-[30px] absolute !m-[0] bottom-[-16px] left-[-15px] object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-17@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-2 pb-0 pr-[18px] pl-0">
              <img
                className="w-[30px] h-[30px] relative object-cover"
                loading="lazy"
                alt=""
                src="/image-141@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
              <img
                className="w-[34px] h-[34px] relative object-cover"
                loading="lazy"
                alt=""
                src="/image-15@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="self-stretch h-[13px] flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full">
        <div className="self-stretch flex-1 relative box-border max-w-full border-t-[6px] border-solid border-black" />
      </div>
      <main className="w-[1165px] flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full">
        <section className="flex-1 flex flex-col items-end justify-start gap-[5px] max-w-full text-center text-xl text-black font-knewave">
          <div className="w-[996px] flex flex-row items-start justify-end py-0 px-16 box-border max-w-full mq450:pl-8 mq450:pr-8 mq450:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
              <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit whitespace-pre-wrap mq1025:text-base">{`Bienvenue au Moroccan Recipe CHATBOT & Recommendation System👩🏻‍🍳🧑🏻‍🍳 -  DATAFTOUR OFF`}</h2>
              <div className="w-[852px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-base">
                <div className="h-[103px] w-[538px] relative inline-block shrink-0 max-w-full">
                  C'est ici que vous découvrirez le trésor caché des recettes
                  marocaines et emmenerez votre langue dans un vaste voyage que
                  vous n'avez jamais ressenti auparavant.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[35px] max-w-full text-lg mq750:gap-[35px_17px] mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[50px] max-w-full mq750:min-w-full mq1025:gap-[25px_50px]">
              <div className="self-stretch flex flex-col items-end justify-start gap-[57px] max-w-full mq1025:gap-[28px_57px]">
                <div className="w-[403px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1025:flex-wrap mq1025:justify-center">
                  <img
                    className="h-[49px] w-[49px] relative object-cover min-h-[49px]"
                    loading="lazy"
                    alt=""
                    src="/image-18@2x.png"
                  />
                  <img
                    className="h-[49px] w-[49px] relative object-cover min-h-[49px]"
                    loading="lazy"
                    alt=""
                    src="/image-19@2x.png"
                  />
                  <div className="w-[73px] flex flex-col items-start justify-start py-0 pr-6 pl-0 box-border">
                    <img
                      className="w-[49px] h-[49px] relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/image-201@2x.png"
                    />
                  </div>
                  <img
                    className="h-[49px] w-[49px] relative object-cover min-h-[49px]"
                    loading="lazy"
                    alt=""
                    src="/image-21@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[37px] pl-0 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                    <div className="w-[323px] flex flex-col items-start justify-start pt-[111px] px-0 pb-2.5 box-border relative gap-[16px] min-w-[323px] max-w-full mq750:flex-1">
                      <div className="w-[295px] h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px]">
                        <div className="absolute top-[0px] left-[0px] bg-white box-border w-full h-full z-[1] border-[6px] border-solid border-linen" />
                        <div className="absolute top-[2px] left-[6px] w-[284px] flex flex-row items-start justify-start">
                          <div className="h-[220px] w-[313px] absolute !m-[0] right-[-23px] bottom-[-136px] bg-gray-700 box-border border-[6px] border-solid border-gray-600" />
                          <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[109px] flex-1 relative bg-cover bg-no-repeat bg-[top] z-[2]">
                            <img
                              className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                              alt=""
                              src="/image-24@2x.png"
                            />
                            <div className="absolute top-[3px] left-[241px] rounded-140xl bg-white w-[39px] h-10 z-[3]">
                              <div className="absolute top-[0px] left-[0px] rounded-140xl bg-white w-full h-full hidden" />
                              <img
                                className="absolute top-[9px] left-[9px] w-[22px] h-[22px] object-cover z-[4]"
                                alt=""
                                src="/image-35@2x.png"
                              />
                            </div>
                          </button>
                        </div>
                      </div>
                      <h3 className="m-0 w-48 h-[21px] relative text-inherit font-normal font-inherit inline-block shrink-0 z-[3]">
                        Recipe Title
                      </h3>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-[5px] text-xs">
                        <div className="flex-1 flex flex-col items-end justify-start">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="h-[35px] w-[202px] relative inline-block shrink-0 z-[2]">
                              Recipe description
                            </div>
                          </div>
                          <button className="cursor-pointer [border:none] pt-1.5 px-[9px] pb-[2.8000000000000114px] bg-lightcoral-200 w-[134px] flex flex-row items-start justify-start box-border gap-[6px] z-[3] mt-[-9px]">
                            <div className="h-9 w-[134px] relative bg-lightcoral-200 hidden" />
                            <div className="h-3 w-[81px] relative text-xs font-knewave text-black text-center inline-block shrink-0 z-[4]">
                              Read more
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0">
                              <img
                                className="w-[23px] h-[14.7px] relative z-[4]"
                                alt=""
                                src="/line-4.svg"
                              />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="h-[220px] w-[318px] flex flex-col items-end justify-start min-w-[318px] mq750:flex-1">
                      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1 pl-0">
                        <div className="flex-1 flex flex-col items-start justify-start pt-[115px] px-0 pb-1.5 relative gap-[16px] mq750:flex-1">
                          <div className="w-72 h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] bg-white box-border z-[1] border-[6px] border-solid border-linen" />
                          <h3 className="m-0 w-48 h-[21px] relative text-inherit font-normal font-inherit inline-block shrink-0 z-[3]">
                            Recipe Title
                          </h3>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1 pl-[5px] text-xs">
                            <div className="flex-1 flex flex-col items-end justify-start">
                              <div className="self-stretch flex flex-row items-start justify-start">
                                <div className="h-[35px] w-[202px] relative inline-block shrink-0 z-[2]">
                                  Recipe description
                                </div>
                              </div>
                              <button className="cursor-pointer [border:none] pt-1.5 px-[9px] pb-[2.8000000000000114px] bg-lightcoral-200 w-[134px] flex flex-row items-start justify-start box-border gap-[6px] z-[3] mt-[-9px]">
                                <div className="h-9 w-[134px] relative bg-lightcoral-200 hidden" />
                                <div className="h-3 w-[81px] relative text-xs font-knewave text-black text-center inline-block shrink-0 z-[4]">
                                  Read more
                                </div>
                                <div className="flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0">
                                  <img
                                    className="w-[23px] h-[14.7px] relative z-[4]"
                                    alt=""
                                    src="/line-4.svg"
                                  />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[284px] flex flex-row items-start justify-start relative mt-[-214px]">
                        <div className="h-[220px] w-[305px] absolute !m-[0] right-[-13px] bottom-[-132px] bg-gray-700 box-border border-[6px] border-solid border-gray-600" />
                        <button className="cursor-pointer [border:none] pt-px px-[3px] pb-[68px] bg-[transparent] flex-1 flex flex-row items-start justify-end bg-cover bg-no-repeat bg-[top] z-[2]">
                          <img
                            className="h-[109px] w-[284px] relative object-cover hidden"
                            alt=""
                            src="/image-24@2x.png"
                          />
                          <div className="h-10 w-[39px] relative rounded-140xl bg-white z-[3]">
                            <div className="absolute top-[0px] left-[0px] rounded-140xl bg-white w-full h-full hidden" />
                            <img
                              className="absolute top-[9px] left-[9px] w-[22px] h-[22px] object-cover z-[4]"
                              alt=""
                              src="/image-35@2x.png"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[742px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-base">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                  <div className="w-[299px] flex flex-col items-end justify-start pt-[90px] px-5 pb-[66px] box-border relative min-w-[299px] mq750:flex-1">
                    <div className="w-[197px] h-[68px] relative inline-block shrink-0">
                      Décrivez ce que vous voulez
                    </div>
                    <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                      <img
                        className="absolute top-[147px] left-[0px] w-[54px] h-[54px] object-cover"
                        alt=""
                        src="/image-22@2x.png"
                      />
                      <img
                        className="absolute top-[0px] left-[46px] w-[253px] h-[253px] object-contain z-[1]"
                        loading="lazy"
                        alt=""
                        src="/image-23@2x.png"
                      />
                    </div>
                  </div>
                  <div className="w-[272px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[308px] flex flex-col items-start justify-start pt-[106px] px-0 pb-0 box-border min-w-[308px] mq450:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start pt-[116px] px-0 pb-[5px] relative gap-[16px]">
                <div className="w-[286px] h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px]">
                  <div className="absolute top-[0px] left-[0px] bg-white box-border w-full h-full z-[1] border-[6px] border-solid border-linen" />
                  <div className="absolute top-[7px] left-[10px] w-[270px] flex flex-row items-start justify-start">
                    <div className="h-[220px] w-[303px] absolute !m-[0] right-[-23px] bottom-[-131px] bg-gray-700 box-border border-[6px] border-solid border-gray-600" />
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[109px] flex-1 relative bg-cover bg-no-repeat bg-[top] z-[2]">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                        alt=""
                        src="/image-28@2x.png"
                      />
                      <div className="absolute top-[0px] left-[228px] rounded-140xl bg-white w-[39px] h-10 z-[3]">
                        <div className="absolute top-[0px] left-[0px] rounded-140xl bg-white w-full h-full hidden" />
                        <img
                          className="absolute top-[9px] left-[9px] w-[22px] h-[22px] object-cover z-[4]"
                          alt=""
                          src="/image-35@2x.png"
                        />
                      </div>
                    </button>
                  </div>
                </div>
                <h3 className="m-0 w-[182px] h-[21px] relative text-inherit font-normal font-inherit inline-block shrink-0 z-[3]">
                  Recipe Title
                </h3>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-[5px] text-xs">
                  <div className="flex-1 flex flex-col items-end justify-start">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="h-[35px] w-48 relative inline-block shrink-0 z-[2]">
                        Recipe description
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] pt-1.5 px-[9px] pb-[2.3000000000000114px] bg-lightcoral-200 w-[127px] flex flex-row items-start justify-start box-border gap-[6px] z-[3] mt-[-9px]">
                      <div className="h-9 w-[127px] relative bg-lightcoral-200 hidden" />
                      <div className="h-3 w-[77px] relative text-xs font-knewave text-black text-center inline-block shrink-0 z-[4]">
                        Read more
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
                        <img
                          className="w-[21px] h-[14.7px] relative z-[4]"
                          alt=""
                          src="/line-6.svg"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
