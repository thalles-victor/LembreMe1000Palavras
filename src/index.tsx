import React from 'react'
import { SafeAreaView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ChoiceWords from  './components/ChoiceWords';
import { DatabaseConnectionProvider } from './data/connnection';

const AppThis: React.FC = () => {

  return (
    <DatabaseConnectionProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={{flex:1}}>
        <ChoiceWords/>
      </SafeAreaView>
    </DatabaseConnectionProvider>
  );
};

export default AppThis;