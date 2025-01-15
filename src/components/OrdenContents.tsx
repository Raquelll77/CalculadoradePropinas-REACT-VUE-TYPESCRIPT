import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"
import type { OrderActions } from "../reducers/order-reducer"
import { Dispatch } from "react"

type OrdenContentsProps = {
    order: OrderItem[]
    dispatch: Dispatch<OrderActions>
}


export default function OrdenContents({order, dispatch} : OrdenContentsProps) {
  return (
    <div>
        <h2 className='font-black text-4xl'>Consumo</h2>
        <div className="mt-10">
            { order.map(item =>(
                <div className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center" key={item.id}>
                    <div className="">
                    <p className="text-lg">
                        {item.name} - { formatCurrency(item.price)}
                    </p>
                    <p className="font-black">
                       Cantidad: {item.quantity} - {
                        formatCurrency(item.price * item.quantity) }
                    </p>
                    </div>
                    <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black" onClick={() =>dispatch({type: 'remove-item', payload: {id: item.id} })}>X</button>
                </div>
            ))}
        </div>
    </div>
  )
}
