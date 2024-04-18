const NoData = () => {
  return (
    <div className="p-[30px] rounded-[4px] flex justify-center flex-col items-center  border border-[#969696] shadow-[0px_2px_2px_0px_#00000040]">
        <img src="./assets/icons/no-data.svg" alt="" className="w-[158px] h-[158px]"/>
        <p className=" font-normal leading-[21.09px]  text-[18px]">
          We could not find weather information for the location above
        </p>
    </div>
  )
}

export default NoData