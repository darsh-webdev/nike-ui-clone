import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full items-center justify-between">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px] hover:scale-110 transition-all duration-300"></img>
        <div className="mt-8 flex justify-start gap-2.5 items-center">
            <img src={star} alt="rating" width={24} height={24} />
            <p className="font-motserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat font-2xl leading-normal text-coral-red">{price}</p>
    </div>
  )
}

export default PopularProductCard