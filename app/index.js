import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Menu } from '../Components/Menu';
import {Home} from "../View/Home"
import {NewEvent} from "../View/NewEvent"
import { Historial } from '../View/Historial';


export default function App() {

  const [viewSelected, setViewSelected] = useState(3)


  const handleViewSelected = (view) => {
    setViewSelected(view)
  }

  const RenderizarComponente = () => {
    switch (viewSelected) {
      
      case 0:
        return <Home />
      
        case 1:
        return <NewEvent />
      
        case 2:
        return <Historial />


    }
  }


  return (
    <View style={styles.container}>

      <RenderizarComponente />
      <Menu handleView={handleViewSelected} view={viewSelected} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
