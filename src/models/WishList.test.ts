import {WishListItem} from './WishList';

it("can create a instance of a model", () => {
    const item = WishListItem.create({
        "name": "Chronicles of Narnia",
        "price": 28.73,
    })
    expect(item.price).toBe(28.73)
    expect(item.image).toBe("")
})