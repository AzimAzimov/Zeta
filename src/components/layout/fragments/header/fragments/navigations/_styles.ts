export const styles = {
  navMenuLines:
    "w-[24px] h-[3px] my-[2px] bg-black transition ease transform duration-300 md:w-[13px] md:h-[2px] md:my-[1px]",
  navMenuButton:
    "hidden xl:flex flex-col h-[56px] w-[56px] rounded-full bg-secondary-main justify-center items-center shadow-md md:w-[32px] md:h-[32px] xl:z-30 xl:relative",
  navContainer:
    "overflow-hidden z-10 flex gap-[26px] xl:absolute xl:backdrop-blur-sm xl:bg-black/20 xl:flex-col xl:items-end xl:gap-0 xl:after:w-[330px] xl:after:h-full xl:after:bg-secondary-main xl:inset-y-1 xl:after:absolute xl:after:z-0 md:after:w-[238px]",
  navContainerVisible: "xl:inset-0 transition-right ease-in-out delay-100 overflow-hidden",
  navList:
    "xl:bg-secondary-main xl:w-[330px] xl:px-[20px] xl:first:mt-[66px] xl:group-last:border-none xl:z-10 md:w-[238px] md:first:mt-[50px] md:px-[15px]",
  navLink:
    "text-base-500 xl:w-full xl:flex xl:py-[20px] xl:pl-[40px] xl:border-b-[1px] xl:border-gray-100 md:pl-[35px] hover:text-black",
  navLinkActive:
    "relative pl-[22px] before:left-[0px] before:absolute before:top-[50%] before:h-[14px] before:w-[14px] before:translate-y-[-50%] before:rotate-[-45deg] before:rounded before:bg-primary-main text-black ml-[2px] xl:pl-[25px] xl:ml-0 md:pl-[22px]",
  orderBtn:
    "btn-primary w-[190px] h-[40px] ml-[70px] xl:order-[-1] xl:w-[122px] xl:h-[32px] xl:text-sm xl:ml-[16px] md:hidden",
}
