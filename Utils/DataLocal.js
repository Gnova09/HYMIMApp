import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveDataLocally = async (key, value) => {
  const log = []
  const getlog = await getDataLocally("Logs")
  log.push({
    tipo: "newEvent",
    titulo: value.Titulo,
    createdDate: new Date()
  })

  const finallog = log.concat(getlog)
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    //Logs//
    console.log('Data saved successfully!');

  } catch (error) {
    console.error('Error saving data:', error);

  } finally {

    try {
      await AsyncStorage.setItem("Logs", JSON.stringify(finallog));
      console.log('Logs saved successfully!');
    } catch (error) {
      console.error('Error saving logs:', error);

    }
  }

};

export const getDataLocally = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // Data found
      return JSON.parse(value);
    } else {
      // No data found
      console.log('No data found for key:', key);
      return null;
    }
  } catch (error) {
    console.error('Error getting data:', error);
    return null;
  }
};

