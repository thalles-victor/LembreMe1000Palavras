import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import ChoiceWords from './src/components/ChoiceWords';

export default function App() {
  return (
    <>
      <ChoiceWords/>
      <StatusBar style="auto" />
    </>
  );
};