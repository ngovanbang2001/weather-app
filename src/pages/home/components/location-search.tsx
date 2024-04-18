import { ChangeEvent, KeyboardEvent } from 'react'

type Props = {
  valueText: string
  clearSearch: () => void
  handleChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void
  handleEnterSearch: (e: KeyboardEvent<HTMLInputElement>) => void
}

const LocationSearch = ({ valueText, clearSearch, handleChangeSearch, handleEnterSearch }: Props) => {
  return (
    <form>
      <label htmlFor="search" className="mb-2 text-sm font-medium sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <input
          type="text"
          id="search"
          className="shadow-[0px_1px_1px_0px_#00000040] block w-full pl-[20px] pr-[45px] py-[10px] leading-[21.09px] text-[18px] font-normal border border-[#969696] rounded-[4px]"
          placeholder="Search location"
          onChange={handleChangeSearch}
          onKeyDown={handleEnterSearch}
          value={valueText}
        />
        <button
          onClick={clearSearch}
          className="text-white absolute mx-[15px] right-0 top-0 h-full flex items-center cursor-pointe"
        >
          <img className="z-1" src="../assets/icons/close.svg" alt="" />
        </button>
      </div>
    </form>
  )
}

export default LocationSearch
