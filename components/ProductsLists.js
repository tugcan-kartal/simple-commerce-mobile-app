import * as React from "react";
import { Text, FlatList } from "react-native";
import { products } from "../products.js";
import ProductCard from "./ProductCard.js";

export default function ProductsLists() {
    return (
        <FlatList data={products} keyExtractor={(product)=>product.id} renderItem={({item})=> <ProductCard {...item} contentContainerStyle={{paddingHorizontal: 15}} />} />
    );
}