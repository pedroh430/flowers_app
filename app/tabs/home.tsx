import ProductCard from "@/components/ProductCard";
import { ScrollView, StyleSheet, View } from "react-native";


export default function HomeScreen() {
   


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