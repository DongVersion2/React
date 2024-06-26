import React from 'react';

const NewComponent = ({ title }) => {
  return (
    <section className="log-in max-w-[1280px] xl:m-auto xl:mt-6.25rem pt-20 mx-2">
    <div className="flex xl:flex-row flex-col justify-end gap-8">
      <div className="xl:order-1 order-2">
        <div className="text-blue-900 text-[32px] font-bold font-['Inter'] text-center mb-0.37rem">Welcome back!</div>
        <div className="text-center text-black text-sm font-normal font-['Inter'] mb-1.56rem">Hello! welcome back to OZ
          VIETNAM</div>
        <div className="h-[50px] bg-white xl:rounded-[10px] rounded-[5px] border border-blue-900 flex items-center mb-6">
          <input className="pl-5 focus:outline-none" type="email" name id placeholder="Email" />
        </div>
        <div className="h-[50px] bg-white xl:rounded-[10px] rounded-[5px] border border-blue-900 flex items-center mb-1.62rem mb-6">
          <input className="ml-5 focus:outline-none" type="password" placeholder="Your password" />
        </div>
        <a className="block text-right text-neutral-400 text-sm font-normal font-['Inter'] underline mb-1.81rem">Forgot
          password?</a>
        <button type="submit" className="text-white xl:text-base text-xs font-semibold font-['Inter'] w-[497px] h-[50px] bg-blue-900 xl:rounded-[10px] rounded-[5px] flex items-center justify-center mb-6 cursor-pointer mt-5">Create
          Account</button>
        <div className="text-black text-sm font-normal font-['Inter'] text-center mb-6">Or Sign in with</div>
        <div className="flex items-center justify-center gap-8 mb-6">
          <button className="block w-[119px] h-[50px] bg-white xl:rounded-[10px] rounded-[5px] justify-center border border-blue-900 flex items-center gap-2 cursor-pointer ease-in-out duration-300 transform hover:scale-110">
            <div className="ml-0.88rem">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                <g clipPath="url(#clip0_649_2216)">
                  <path d="M11.1475 1.05274C7.95021 2.16191 5.19286 4.26716 3.28048 7.05925C1.3681 9.85133 0.40148 13.1831 0.522607 16.5652C0.643735 19.9472 1.84622 23.2013 3.95344 25.8494C6.06067 28.4975 8.96155 30.4001 12.23 31.2777C14.8798 31.9615 17.656 31.9915 20.32 31.3652C22.7333 30.8232 24.9645 29.6637 26.795 28.0002C28.7002 26.2161 30.0831 23.9464 30.795 21.4352C31.5688 18.7044 31.7065 15.8326 31.1975 13.0402H16.3175V19.2127H24.935C24.7628 20.1972 24.3937 21.1368 23.8499 21.9753C23.3061 22.8138 22.5986 23.534 21.77 24.0927C20.7177 24.7888 19.5315 25.2572 18.2875 25.4677C17.0399 25.6997 15.7601 25.6997 14.5125 25.4677C13.248 25.2063 12.0517 24.6844 11 23.9352C9.31037 22.7392 8.04169 21.0401 7.375 19.0802C6.69704 17.0837 6.69704 14.9193 7.375 12.9227C7.84957 11.5233 8.63409 10.2491 9.67 9.19524C10.8555 7.96711 12.3563 7.08923 14.0079 6.65793C15.6595 6.22663 17.3979 6.25857 19.0325 6.75024C20.3094 7.14222 21.4771 7.82708 22.4425 8.75024C23.4142 7.78357 24.3842 6.81441 25.3525 5.84274C25.8525 5.32024 26.3975 4.82274 26.89 4.28774C25.4164 2.91643 23.6867 1.84938 21.8 1.14774C18.3643 -0.099786 14.6049 -0.133312 11.1475 1.05274Z" fill="white" />
                  <path d="M11.1475 1.05249C14.6047 -0.134368 18.364 -0.101725 21.8 1.14499C23.687 1.8514 25.416 2.92358 26.8875 4.29999C26.3875 4.83499 25.86 5.33499 25.35 5.85499C24.38 6.82332 23.4108 7.78832 22.4425 8.74999C21.4771 7.82683 20.3094 7.14197 19.0325 6.74999C17.3984 6.25659 15.66 6.22281 14.0081 6.65235C12.3561 7.08188 10.8543 7.95814 9.6675 9.18499C8.63159 10.2388 7.84707 11.513 7.3725 12.9125L2.19 8.89999C4.04502 5.22139 7.25688 2.40755 11.1475 1.05249Z" fill="#E33629" />
                  <path d="M0.814998 12.8749C1.09355 11.4944 1.55601 10.1575 2.19 8.8999L7.3725 12.9224C6.69453 14.9189 6.69453 17.0834 7.3725 19.0799C5.64583 20.4132 3.91833 21.7532 2.19 23.0999C0.602874 19.9407 0.118829 16.3412 0.814998 12.8749Z" fill="#F8BD00" />
                  <path d="M16.3175 13.0376H31.1975C31.7065 15.8299 31.5688 18.7018 30.795 21.4326C30.0831 23.9438 28.7002 26.2135 26.795 27.9976C25.1225 26.6926 23.4425 25.3976 21.77 24.0926C22.5992 23.5333 23.3069 22.8123 23.8508 21.9729C24.3946 21.1335 24.7634 20.193 24.935 19.2076H16.3175C16.315 17.1526 16.3175 15.0951 16.3175 13.0376Z" fill="#587DBD" />
                  <path d="M2.1875 23.1001C3.91583 21.7667 5.64333 20.4267 7.37 19.0801C8.03802 21.0406 9.30851 22.7398 11 23.9351C12.055 24.6807 13.2538 25.1984 14.52 25.4551C15.7676 25.6871 17.0474 25.6871 18.295 25.4551C19.539 25.2445 20.7252 24.7762 21.7775 24.0801C23.45 25.3851 25.13 26.6801 26.8025 27.9851C24.9722 29.6494 22.741 30.8098 20.3275 31.3526C17.6635 31.9788 14.8873 31.9488 12.2375 31.2651C10.1418 30.7055 8.18419 29.7191 6.4875 28.3676C4.69165 26.9418 3.22489 25.145 2.1875 23.1001Z" fill="#319F43" />
                </g>
                <defs>
                  <clipPath id="clip0_649_2216">
                    <rect width={32} height={32} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-justify text-neutral-400 text-sm font-normal font-['Inter']">Google</div>
          </button>
          <button className="block w-[133px] h-[50px] bg-white xl:rounded-[10px] rounded-[5px] justify-center border border-blue-900 flex items-center gap-2 cursor-pointer ease-in-out duration-300 transform hover:scale-110">
            <div className="ml-0.88rem">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                <g clipPath="url(#clip0_649_2226)">
                  <path d="M32 16C32 7.1635 24.8365 0 16 0C7.1635 0 0 7.1635 0 16C0 23.986 5.851 30.6054 13.5 31.8056V20.625H9.4375V16H13.5V12.475C13.5 8.465 15.8888 6.25 19.5435 6.25C21.294 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1075C19.1199 10.5 18.5 11.7334 18.5 12.9988V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6054 32 23.9861 32 16Z" fill="#1877F2" />
                  <path d="M22.2281 20.625L22.9375 16H18.5V12.9987C18.5 11.7332 19.1199 10.5 21.1075 10.5H23.125V6.5625C23.125 6.5625 21.294 6.25 19.5434 6.25C15.8888 6.25 13.5 8.465 13.5 12.475V16H9.4375V20.625H13.5V31.8056C14.327 31.9352 15.1629 32.0002 16 32C16.8371 32.0002 17.673 31.9353 18.5 31.8056V20.625H22.2281Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_649_2226">
                    <rect width={32} height={32} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-justify text-neutral-400 text-sm font-normal font-['Inter']">Facebook</div>
          </button>
        </div>
        <div className="text-center">
          <span className="text-black text-sm font-normal font-['Inter']">Don't have account yet? </span>
          <a className="text-black text-sm font-normal font-['Inter'] underline cursor-pointer">Sign up</a>
        </div>
      </div>
      <div className="bg-blue-900 w-[38.75rem] h-[45.125rem] xl:rounded-[10px] rounded-[5px] relative order-1">
        <img className="mix-blend-lighten" src="/assets/images/log-in/Rectangle 98.png" alt="" />
        <div className="w-99 flex flex-col justify-center items-center gap-9 absolute top-11.56rem left-8.81rem">
          <div className>
            <svg xmlns="http://www.w3.org/2000/svg" width={224} height={182} viewBox="0 0 224 182" fill="none">
              <path d="M223.62 51.9033C223.62 51.9033 121.446 83.5466 94.6742 162.025C127.607 164.857 176.757 136.565 183.833 85.8384C183.923 87.0155 184.145 91.7447 184.145 92.9426C183.653 155.419 127.517 188.447 71.6517 180.103C70.6329 179.84 69.628 179.57 68.6093 179.279C68.6093 179.279 83.4055 97.4433 150.664 68.9436L47.4371 51.9033H223.62Z" fill="white" />
              <path d="M170.97 45.9348C170.97 45.9348 121.813 -3.72504 64.7837 19.3946C3.65833 44.176 4.78104 130.7 68.2835 162.897L64.3055 177.59C-3.56305 160.487 -32.1853 49.293 53.4596 6.78577C81.0284 -6.89629 142.313 -2.7349 170.97 45.9348Z" fill="white" />
            </svg>
          </div>
          <div className>
            <img src="assets/images/sign-up/Group.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default NewComponent;