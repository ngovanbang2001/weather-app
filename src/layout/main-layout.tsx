type Props = {
  children: any
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="pt-[70px] px-[40px]">
      {children}
    </div>
  )
}
export default MainLayout