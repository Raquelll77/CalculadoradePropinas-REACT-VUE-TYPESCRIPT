import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrdenContentsProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
}


export default function OrdenContents({order, removeItem} : OrdenContentsProps) {
  return (
    <div>
        <h2 className='font-black text-4xl'>Consumo</h2>
        <div className="mt-10">
            {order.length === 0 ? 
            <p className="text-center">La orden esta Vacia </p>
            : (order.map(item =>(
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
                    <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black" onClick={() => removeItem(item.id)}>X</button>
                </div>
            )))}
        </div>
    </div>
  )
}
