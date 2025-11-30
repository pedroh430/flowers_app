import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { ScrollView, StyleSheet, View } from "react-native";


export default function HomeScreen() {
  return (
    
    <ScrollView style={{ padding: 20, backgroundColor: "#ffffffff"}}>
      <View style={style.conteine}>
        {products.map((item) => (
        <ProductCard key={item.id} item={item}/>
       ))}
      </View>
    </ScrollView>
    
  );
}


const style = StyleSheet.create({

  conteine: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  paddingBottom: 20,
},



})