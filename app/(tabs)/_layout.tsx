import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import { Image } from 'react-native';
import Login from '../Feature/login';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [isLogedIn, setIsLoggedIn] = React.useState<boolean>(true);
  if(!isLogedIn){
    return <Login/>

  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          
        }}
      />
       <Tabs.Screen
        name="Search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={34} color={color} />,
          
        }}
      />
       
       <Tabs.Screen
        name="Post"
        options={{
          title: 'Post',
          tabBarIcon: ({ color }) => <Feather name="plus-square" size={26} color={color} />
,
          
        }}
      />
       <Tabs.Screen
        name="Liked"
        options={{
          title: 'Liked',
          tabBarIcon: ({ color }) => <Feather name="heart" size={26} color={color} />,
          
        }}
      />
      <Tabs.Screen
        name="explore"
         options={{
    tabBarIcon: () => (
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
        style={{
          width: 26,
          height: 26,
          borderRadius: 13,
        }}
      />
    ),
  }}
      />
    </Tabs>
  );
}
