import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";



export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "black", headerTitleAlign: "center"}}>
      <Tabs.Screen 
        name ="home"
        options={{
           title: "Home",
           tabBarIcon: () => (
           <Entypo name="home" size={24} color="black" />
            ),
         }}
      />
      <Tabs.Screen
       name ="loja" 
       options={{
         title: "loja",
         tabBarIcon: () =>(
          <FontAwesome name="shopping-basket" size={24} color="black" />
        ),
        }}/>
      </Tabs>
  );

}