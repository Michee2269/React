import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity,TextInput } from 'react-native';
import { Images } from 'react-native';
import { Button } from 'react-native'
import React, { Component, useEffect, useState } from 'react'

export default function App() {

const sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d altitude",
  "Acheter mon premier appartement",
  "Perdre 5 kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
]  

const [inputText, setInputText] = useState('')
const [goals, setGoals] =useState(sampleGoals);

function onChangeText(text) {
  console.log("text :", text)
  setInputText(text);
  
}

const handleAddGoal = () => {

 setGoals([...goals,inputText])
  console.log("sampleGoals :", sampleGoals)
}
  

  return (
    <View style={styles.container}>
          <Text style={styles.baseText}>
        Hommage a
      <Text style={styles.innerText}> Edson Arantes do Nascimento, dit Le Roi Pelé.</Text>
    </Text>
      <Text>Edson Arantes do Nascimento, dit Pelé, né le 23 octobre 1940 à Três Corações et mort le 29 décembre 2022 à São Paulo, est un footballeur international brésilien évoluant au poste d'attaquant et de meneur de jeu du milieu des années 1950 jusqu'en 1977.</Text>
      <Image 
      style={styles.bg}
        source={{
          uri: 'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1550x619:1552x617)/origin-imgresizer.eurosport.com/2022/12/29/3516307-71673308-2560-1440.jpg',
        }}
      />
{goals.map((goal,index)=>
<> 
<Text key={index}>{goal}</Text> 
  <TouchableOpacity onPress={() => deletAddGoal()}>
    <Text style={styles.croix}>X</Text>
     </TouchableOpacity>
  </>
  )}

<View style={styles.bloc}>
<TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={Text}
        placeholder="Ecrire un texte"
      />
      <Text>Ajouter</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleAddGoal()}>
        
          <Text>Ajouter</Text>
        </TouchableOpacity>
        </View>
      <Text>source : Internet</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input:{
    marginTop: 20,
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 4,
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'gold',
    padding: 10,
    marginTop: 10
  },

  croix:{
  fontSize: "30px",
  
  },


  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },   
  
    innerText: {
      color: 'gold',
      fontWeight: 'bold',
      fontSize:'18px',
     
  },

  bg:{
    // backgroundColor:'black',
    width: 160,
    height : 160,
  },

  bloc: {
    alignItems: 'centre',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  

});

// const App = () => {
//   return (
//     <View style={styley.screenContainer}>
//       <Button title="Hey there!" />
//     </View>
//   );
// };

// const styley = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 16
//   }
// });

// export default App;



