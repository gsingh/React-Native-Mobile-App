import React,{ useState } from 'react';
import {useEffect} from "react";
//import useFetch from "./useFetch.js";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView, ToastAndroid } from 'react-native';
import {
    collection,
    query,
    getDocs,
    where
} from "@firebase/firestore";
import { db } from '../config.js';

export default function({navigation}){
//const {setPlateNo}=props;

const [toast, setToast]=useState([]);

const [loading, setLoading]=useState(false);
const [display, setDisplay ] = useState(true);
//const {get} = useFetch("http://localhost:8787/mes_app/plate_info.jsp?plateno=");
 //Alert.alert(`plate entered ${plate}`);

 const handlePlateClick = async (plt) => {
  //    Alert.alert(`plate number is ${plt} (first)`);
          //   setPlateNo({});
             setLoading(true);
            const docRef = collection(db, "plate");
             q = query(docRef, where("plate_no", "==", plt) );
             const docData = await getDocs(q);
            // const docData=await get(plt);

             if (docData.size == 0) {
               Alert.alert("No such data exists!");
               setLoading(false);
               setDisplay(false);
             }
             else {
           docData.forEach((doc) => {
             console.log(doc);

      //       Alert.alert(doc.data().Consignee);
     //         ToastAndroid.showWithGravity(doc.data().Consignee, ToastAndroid.SHORT, ToastAndroid.TOP);
            //  setPlate(docData.body);
             setPlate(doc.data().plate_no);
              navigation.navigate("PlateDetails", {plate: doc.data()});
                 // navigation.navigate("Welcome");
                setPlate(doc.data());
                 setLoading(false);
                 setDisplay(true);
          //       Alert.alert(`Plate No is ${doc.data().plate_no}`);
               });


     }
}
     const [plate, setPlate] = useState('');
return (<>
           <SafeAreaView style={styles.container}>


  <Text style={styles.text}> Plate No </Text>
               <TextInput
                   style={styles.textInput}
                   placeholder="Enter Plate No"
                   placeholderTextColor="black"
                  value={plate}
                   onChangeText={text => {
                         setPlate(text);
                           }
                   }

                />
               <TouchableOpacity
                   onPress={() => handlePlateClick(plate)}>
                   <View style={styles.button}>
                       <Text style={styles.buttonText}> Submit </Text>
                   </View>
               </TouchableOpacity>


             </SafeAreaView>
       </> );
     }
const styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: "center",
        alignItems: "center",
        backgroundColor: "paleturquoise"
    },
    text: {

        marginBottom: 10,
        color: "green",
         alignItems: "flex-end"
    },
    textInput: {
             alignItems: "center",
                           justifyContent: "center",
                           backgroundColor: "white",
                           borderRadius: 24,
            width: 250,
            borderWidth: 5,
            borderRadius: 20,
            borderColor: "orange",
            paddingLeft: 20,
            marginTop: 5,
            color: "blue",
            fontSize: 20

        },
         button: {
                marginTop: 25,

                               width: 120,
                height: 35,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#191970",
                borderRadius: 24
            },
            buttonText: {
                color: "white",
                fontSize: 20
            },
            details: {
                    justifyContent: "center",
                    alignItems: "left",
                    color: "grey",
                },
            column: {
                    justifyContent: "center",
                    alignItems: "left",
                    color: "grey",
                       },
                segment: {
                     justifyContent: "flex-center",
                     alignItems: "center"
                                },
                label: {

                       marginBottom: 10,
                       color: "blue",
                       alignItems: "flex-start"
                       },
                        column: {
                                flex: 2,
                                justifyContent: "center",
                               alignItems: "center"
                           },
container2: {
    	padding: 10,
    	backgroundColor: '#DCDCDC',
    	color: "blue"
    },
    tableHeader: {
    	backgroundColor: '#DCDCDC',
    },
});