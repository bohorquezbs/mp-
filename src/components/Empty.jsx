import Header from "./Header";

export default function Empty() {
  return (
    <div className="flex justify-center h-60 items-center text-center">
      <Header
        title="Empty data!" titleColor="#EB5757" subtitle="It looks like there are no stays, please change your search"
      />
    </div>
  )
}