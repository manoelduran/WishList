import React from "react";
import WishListItemView, { WishListItem } from "./WishListItemView";
interface WishListViewProps {
    items: WishListItem[]
}
const WishListView: React.FC<WishListViewProps> = ({ items }) => {
    return (
        <div>
            <ul>
                {
                    items.map((item, index) =>
                        <WishListItemView
                            key={index}
                            item={item}
                        />
                    )
                }
            </ul>
        </div>
    );
};

export default WishListView;