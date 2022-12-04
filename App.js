import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, Button} from 'react-native';
import { useState } from "react";

export default function App() {
  const [paint, setPaint] = useState("red");
  const [paint2, setPaint2] = useState("red");
  const [paint3, setPaint3] = useState("red");
  const [onOff, setOnOff] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image style={{width:60, height:60}} source={require('./assets/house.png')}/>
        <Text style={styles.text}>SmartHome</Text>
        <StatusBar style="auto" />
      </View>
      <Text style={styles.text2}>Rooms</Text>
      <View style={styles.container3}>
        <View style={styles.container4}>
        <Image style={{width:100, height:100}} source={require('./assets/living-room.png')}/>
        <Text>Living Room</Text>
        </View>
        <View style={styles.container4}>
        <Image style={{width:100, height:100}} source={require('./assets/bed.png')}/>
        <Text>Bedroom</Text>
        </View>
        <View style={styles.container4}>
        <Image style={{width:100, height:100}} source={require('./assets/kitchen.png')}/>
        <Text>Kitchen</Text>
        </View>
      </View>
      <Text style={styles.text3}>Devices</Text>
      <View style={styles.container5}>
        <View style={styles.container6}>
          <View style={{height:15,width:15,backgroundColor:paint, margin:10,}}>
          </View>
          <Text style={styles.text4}>Living room lamp</Text>
          <View style={{marginLeft:"auto", margin:10}}>
          <Button title='On'
          onPress={()=>{
            if( paint=="green"){
              setPaint("green");
            }
            else{
              setPaint("green");
              setOnOff((previous) => previous+1)
            }
          }}/>
          <Button title='Off'
          onPress={()=>{
            if( paint=="red"){
              setPaint("red");
            }
            else{
              setPaint("red");
              setOnOff((previous) => previous-1)
            }
          }}/>
          </View>
        </View>
        <View style={styles.container6}>
          <View style={{height:15,width:15,backgroundColor:paint2, margin:10,}}>
          </View>
          <Text style={styles.text4}>Heater</Text>
          <View style={{marginLeft:"auto", margin:10}}>
          <Button title='On'
          onPress={()=>{
            if( paint2=="green"){
              setPaint2("green");
            }
            else{
              setPaint2("green");
              setOnOff((previous) => previous+1)
            }
          }}/>
          <Button title='Off'
          onPress={()=>{
            if( paint2=="red"){
              setPaint2("red");
            }
            else{
              setPaint2("red");
              setOnOff((previous) => previous-1)
            }
          }}/>
          </View>
        </View>
        <View style={styles.container6}>
          <View style={{height:15,width:15,backgroundColor:paint3, margin:10,}}>
          </View>
          <Text style={styles.text4}>TV</Text>
          <View style={{marginLeft:"auto", margin:10}}>
          <Button title='On'
          onPress={()=>{
            if( paint3=="green"){
              setPaint3("green");
            }
            else{
              setPaint3("green");
              setOnOff((previous) => previous+1)
            }
          }}
          />
          <Button title='Off'
           onPress={()=>{
            if( paint3=="red"){
              setPaint3("red");
            }
            else{
              setPaint3("red");
              setOnOff((previous) => previous-1)
            }
          }}
          />
          </View>
        </View>
      </View>
      <Text style={{fontWeight:"bold", margin:10, fontSize:18,}}> Total devices on: {onOff}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'stretch',
    flexDirection: "column",
    margin:15,
  },
  container2: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin:10,
  },
  text:{
    fontSize:25,
    color:"cadetblue",
    fontWeight:"bold",
    margin:20,
    height:30,
  },
  text2:{
    fontSize:25,
    color:"black",
    fontWeight:"bold",
    margin:10,
  },
  container3:{
    flex: 3,
    flexDirection: "row",
    alignItems:"flex-start",
    justifyContent:"center",
    width: "100%",
  },
  container4:{
    flex: 4,
    height: "65%",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"flex-end",
    backgroundColor:"darkcyan",
    margin:5,
  },
  text3:{
    fontSize:25,
    color:"black",
    fontWeight:"bold",
    margin:10,
    justifyContent:"center",
    alignItems:"center",
    height:30,
  },
  container5:{
    flex:5,
    flexDirection:"column",
  },
  container6:{
    flex: 6,
    height: "52%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start",
    backgroundColor:"wheat",
    margin:10,
  },
  text4:{
    fontSize:15,
    margin:10,
  },
});
