import mongoose from "mongoose"
import orderModel from "./models/order.model.js"

const main = async () => {
    await mongoose.connect('', {
        dbName: "Pizzacoder"
    })
    console.log('BD connected!')

    const result = await orderModel.insertMany(
        [
            {name: 'peperoni', size: 'small', price: '19', qty: 10},
            {name: 'peperoni', size: 'medium', price: '20', qty: 11},
            {name: 'peperoni', size: 'large', price: '21', qty: 12},
            {name: 'peperoni', size: 'large', price: '22', qty: 13}
        ]
    )

    console.log(result)
}

main()