import ProductCard from "@/components/ProductCard";
import { useProductContext } from "@/context/ProductContext";
import { ScrollView, StyleSheet, View } from "react-native";



export default function HomeScreen() {
   
  const {products} = useProductContext();

  return (

  

    
    <ScrollView style={{ padding: 20, backgroundColor: "#ffffffff"}}>
      <View style={styles.conteine}>
        {products.map(item => (
        <ProductCard key={item.id} item={item}/>
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