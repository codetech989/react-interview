import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    pizzas: [
        {
            key: 1,
            name: 'Chonky Chicken',
            slug: 'chonky-chicken',
            price: 10,
            image: 'https://images.deliveryhero.io/image/fd-pk/Products/592241.png?width=600'
        },
        {
            key: 2,
            name: 'Beef Barbeque',
            slug: 'beef-barbeque',
            price: 12,
            image: 'https://images.deliveryhero.io/image/fd-pk/Products/592242.png?width=600'

        },
        {
            key: 3,
            name: 'Hawking Hawaiian',
            slug: 'hawking-hawaiian',
            price: 10,
            image: 'https://images.deliveryhero.io/image/fd-pk/Products/592237.png?width=600'

        },
        {
            key: 4,
            name: 'Margeret\'s Margheritae',
            slug: 'margaret',
            price: 8,
            image: 'https://images.deliveryhero.io/image/fd-pk/Products/592238.png?width=600'

        }
        ,
        {
            key: 5,
            name: 'Vegan Villa Vista',
            slug: 'vegan-villa-vista',
            price: 8,
            image: 'https://images.deliveryhero.io/image/fd-pk/Products/592240.png?width=600'

        }

    ],
    pizza: {}
}
export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        getPizza: (state, action) => {
            let pizza = state.pizzas.find(pizza => pizza.slug === action.payload)
            state.pizza = pizza
        }
    }
})

export const {getPizza} = pizzaSlice.actions

export default pizzaSlice.reducer
