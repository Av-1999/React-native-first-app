import { useRef, useState } from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import Header from '../components/ToDo/Header';
import ListItem from '../components/ToDo/List';
import Form from '../components/ToDo/Form'

export default function ToDo() {

  const scrollViewRef = useRef();

  const [list, setList] = useState([
    { text: 'buy milk', key: '1' },
    { text: 'buy car', key: '2' },
    { text: 'buy phone', key: '3' },
    { text: 'buy Persons', key: '4' },
  ]);

  const addHandler = (text) => {
    setList([
      ...list,
      {
        text: text.length ? text : 'Empty',
        key: Math.random().toString(36).substring(7)
      }
    ])
    scrollEnd()
  }

  const deleteHandler = (key) => {
    setList(list.filter(e => e.key !== key))
  }

  const scrollEnd = () => {
    setTimeout(() => {
      scrollViewRef.current.scrollToEnd({ animated: true })
    })
  }

  return (
    
    <View style={styles.container}>
      <Header />

      <Form
        addHandler={addHandler}
      />
      <View style={styles.itemsBox}>
        <ScrollView
          ref={scrollViewRef}
        >
          {list.map(e => (
            <ListItem
              deleteHandler={deleteHandler}
              key={`el ${e.key}`}
              el={e}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemsBox: {
    height: Dimensions.get('window').height - 235,
    backgroundColor: 'gray',
    paddingVertical: 20
  }
});





  // const handleButtonPress = () => {
  //   Alert.alert("Dialog", "main text", [
  //     { text: 'Cancel', onPress: buttonFunc },
  //     { text: 'Confirm', onPress: buttonFunc }
  //   ])
  // }

  // const handleButtonPress2 = () => {
  //   Alert.prompt("Dialog", "main text", text => alert(text))
  // }