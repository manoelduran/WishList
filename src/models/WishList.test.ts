import { WishListItem, WishList } from './WishList';
import { reaction } from 'mobx';
import { getSnapshot, onSnapshot, onPatch } from 'mobx-state-tree';

it("can create a instance of a model", () => {
    const item = WishListItem.create({
        "name": "Chronicles of Narnia",
        "price": 28.73,
    });
    expect(item.price).toBe(28.73);
    expect(item.image).toBe("");
    item.changeName("Narnia");
    expect(item.name).toBe("Narnia");
});

it("can create a wish list", () => {
    const list = WishList.create({
        items: [
            {
                "name": "Chronicles of Narnia",
                "price": 28.73,
            },
        ]
    });
    expect(list.items.length).toBe(1);
    expect(list.items[0].price).toBe(28.73);
});

it("can add new items -2", () => {
    const list = WishList.create()
    const patches: any[] = []
    onPatch(list, patch => {
        patches.push(patch)
    })
    list.add({
        name: "Chesterton",
        price: 10
    });
    list.items[0].changeName("Book of G.K. Chesterton");
    expect(patches).toMatchSnapshot()
})

it("can add new items", () => {
    const list = WishList.create()
    const states: any[] = []
    onSnapshot(list, snapshot => {
        states.push(snapshot)
    })
    list.add({
        name: "Book of G.K. Chesterton",
        price: 10
    });
    expect(list.items.length).toBe(1);
    expect(list.items[0].name).toBe("Book of G.K. Chesterton");
    list.items[0].changePrice(30);
    expect(list.items[0].price).toBe(30);
    expect(getSnapshot(list)).toMatchSnapshot()
    expect(states).toMatchSnapshot()
});

it("can calculate the total price of a wishlist", () => {
    const list = WishList.create({
        items: [
            {
                "name": "Chronicles of Narnia",
                "price": 28.73,
            },
            {
                "name": "Pokemon",
                "price": 300.00,
            },
            {
                "name": "Zelda",
                "price": 273.76,
            },
        ]
    })
    expect(list.totalPrice).toBe(602.49)
    let changed = 0;
    reaction(() => list.totalPrice, () => changed++)
    expect(changed).toBe(0);
    console.log(list.totalPrice)
    list.items[0].changeName("test")
    expect(changed).toBe(0)
    list.items[0].changePrice(30)
    expect(changed).toBe(1)
    list.items[0].changePrice(32)
    expect(changed).toBe(2)
})