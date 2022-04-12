import React from "react";
export interface WishListItem {
    name: string;
    price: number;
    image?: string;
}
export interface WishListItemViewProps {
    item: WishListItem;
}
const WishListItemView: React.FC<WishListItemViewProps> = ({ item }) => {
    return (
        <li>
            {item.image && <img  src={item.image} alt={item.name}/>}
            <h3>{item.name}</h3>
            <span>{item.price}</span>
        </li>
    );
}

export default WishListItemView;