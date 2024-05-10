import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'



import DiceOne from '../assets/image/One.png'
import DiceTwo from '../assets/image/Two.png'
import DiceThree from '../assets/image/Three.png'
import DiceFour from '../assets/image/Four.png'
import DiceFive from '../assets/image/Five.png'
import DiceSix from '../assets/image/Six.png'


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>



const Dice = ({imageUrl}: DiceProps):JSX.Element =>{
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

export default function App() {
  const [diceImage , setDiceImage] = useState<ImageSourcePropType>(DiceOne)
  const rollDiceOnTap =() =>{
    let randomNumber = Math.floor(Math.random()*6) +1;

    switch (randomNumber){
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;

      default:
        setDiceImage(DiceOne)
        break;

    }    

  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable style={styles.rollDiceBtnText}
       onPress={rollDiceOnTap}
      >
        <Text
        style = {styles.rollDiceBtnText}
        >Roll the dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})