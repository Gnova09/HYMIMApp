import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Menu } from '../Components/Menu';
import {Home} from "../View/Home"
import { People } from '../View/People';
import { Info } from '../View/Info';
import { Work } from '../View/Work';
import { Film } from '../View/Film';

export default function App() {

  const [viewSelected, setViewSelected] = useState(3)


  const handleViewSelected = (view) => {
    setViewSelected(view)
  }

  /* 
1: Work
2: Info
3: Home
4: Gender
5: Film
 */
  
  const RenderizarComponente = () => {
    switch (viewSelected) {
      case 1:
        return <Work />

      case 2:
        return <Info />;

      case 3:
        return <Home />

      case 4:
        return <People />;

      case 5:
        return <Film />;

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
