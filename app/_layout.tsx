
import { Stack } from "expo-router";



export default function TabsLayout() {
  return (

    <Stack screenOptions={{
      
      headerTitleAlign: "center",
      headerShown: false}}>
    
      <Stack.Screen name ="(tabs)" options={{headerShown: false}}/>
    </Stack>
    
   
  )
    
  

}