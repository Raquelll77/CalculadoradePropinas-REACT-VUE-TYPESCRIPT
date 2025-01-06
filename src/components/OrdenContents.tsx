import { OrderItem } from "../types"

type OrdenContentsProps = {
    order: OrderItem[]
}


export default function OrdenContents({order} : OrdenContentsProps) {
  return (
    <div>
        <h2 className='font-black text-4xl'>Consumo</h2>
        <div className=" space-y-3 mt-5">
            {order.length === 0 ? 
            <p className="text-center">La orden esta Vacia </p>
            : (order.map(item =>(
                <div className="" key={item.id}>
                    <p>
                        {item.name}
                    </p>
                </div>
            )))}
        </div>
    </div>
  )
}
