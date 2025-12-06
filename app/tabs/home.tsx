import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { ScrollView, StyleSheet, View } from "react-native";


export default function HomeScreen() {
  return (
    
    <ScrollView style={{ padding: 20, backgroundColor: "#ffffffff"}}>
      <View style={styles.conteine}>
        {products.map(Product => (
        <ProductCard key={Product.id} Product={Product}/>
       ))}
      </View>
    </ScrollView>
    
  );
}


const styles = StyleSheet.create({

  conteine: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  paddingBottom: 20,
},



})