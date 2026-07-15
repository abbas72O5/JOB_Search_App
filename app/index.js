import {SafeAreaView,Text,View,ScrollView} from 'react-native'
import { useState } from 'react';
import {Stack,useRouter} from 'expo-router'

import {Nearbyjobs, Popularjobs, ScreenHeaderBtn,Welcome} from '../components'
import { COLORS, icons, images, SIZES } from "../constants";

export default function Home(){
    const router = useRouter();
    const [searchTerm,setSearchTerm]=useState();
    return(
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
      options={{headerStyle: 
        {backgroundColor: COLORS.lightWhite},
        headerTitle: '',
        headerLeft: ()=>(
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' handlePress={()=>{}}/>
        ),
         headerRight: ()=>(
            <ScreenHeaderBtn iconUrl={images.profile} dimension='60%' handlePress={()=>{}}/>
         )
      }}
       
      />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        flex:1, padding: SIZES.medium
      }}>
          <Welcome searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={()=>{
                      if(searchTerm)
                        router.push(`/search/${searchTerm}`);
          
                    }}/>
          <Popularjobs></Popularjobs>
          <Nearbyjobs/>
       </View>   
      </ScrollView>
      
      <Text>Home</Text>
      </SafeAreaView>
    );
}