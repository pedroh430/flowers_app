import { Tabs } from "expo-router";



export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: "black"}}>
      <Tabs.Screen name ="home" options={{title: "Home"}}/>
      <Tabs.Screen name ="loja" options={{title: "loja"}}/>
      </Tabs>
  )

}