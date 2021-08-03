import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    addedItems: [],
    total: 0,
    totalItems: 0,
    isPickup:true
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setDelivery:(state,action)=>{
            state.isPickup=action.payload
        },
        remove: (state, action) => {
            let existed_item = state.addedItems.find(item => action.payload === item.key)
            let quantity = existed_item.quantity
            let price = existed_item.price
            let totalPrice = price * quantity
            const updatedArray = state.addedItems.filter(item => action.payload !== item.key)

            state.addedItems = updatedArray
            state.total = state.total - totalPrice
            state.totalItems = state.totalItems - quantity

        },
        addToCartQuantity: (state, action) => {
            console.log(action)
            let addedItem = {
                'key': action.payload.pizza.key,
                'name': action.payload.pizza.name,
                'slug': action.payload.pizza.slug,
                'price': action.payload.pizza.price,
                'image': action.payload.pizza.image,
                'size':action.payload.size,
                'cheese':action.payload.cheese
            }
            //check if the action id exists in the addedItems
            let existed_item = state.addedItems.find(item => action.payload.pizza.key === item.key)
            if (existed_item) {
                existed_item.quantity += action.payload.quantity

                state.total = state.total + (addedItem.price * action.payload.quantity)
                state.totalItems = state.totalItems + action.payload.quantity

            } else {
                addedItem.quantity = action.payload.quantity;
                //calculating the total
                let newTotal = state.total + (addedItem.price * action.payload.quantity)

                state.addedItems = [...state.addedItems, addedItem]
                state.total = newTotal
                state.totalItems = state.totalItems + action.payload.quantity


            }
        },
        empty: (state) => {
            state.addedItems = []
            state.total = 0
            state.totalItems = 0

        }
    }
})

export const { remove, addToCartQuantity, empty,setDelivery} = cartSlice.actions

export default cartSlice.reducer
