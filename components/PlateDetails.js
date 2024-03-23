
import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, ScrollView, ToastAndroid } from 'react-native';
import { DataTable, Divider } from 'react-native-paper';
import useValidate from "./useValidate.js";
import Toast from "react-native-toast-message";

const  PlateDetails=({navigation, route})=>{
    const {plate} = route.params;
    const [plateArray, setPlateArray] = useState([]);
  //  console.log(props);
  //  ToastAndroid.showWithGravity(plate.Party, ToastAndroid.SHORT, ToastAndroid.TOP);

  //  let disable;
    const {disabled, validate}=useValidate(plate);
    useEffect(()=>{
         validate();
     //    disable=disabled
    }, [plate]);

    function handlePlateDetailsClick(plt){
        setPlateArray([... plateArray, plt]);
      //  Alert.alert(`Plate loaded! No of plates loaded ${plateArray.length} `);
     //   ToastAndroid.showWithGravity(`Plate loaded! No of plates loaded ${plateArray.length}`, ToastAndroid.LONG, ToastAndroid.CENTER);
         Toast.show({
         type : "success",
         text1: "Plate loaded !",
         text2: `Numbers : ${plateArray.length+1}`,
         autoHide: false,
          visibilityTime: 2500,
         position: "top" ,
         bottomOffset: 150
          });
    }
    function handlePlateArrayClick(pltArray){

    navigation.navigate("AddPlates", {loaded: pltArray});
    }

    return (
               <SafeAreaView style={styles.container}>
               <ScrollView>
                <View style={[styles.segment, {flex: 1}]}>
                <Divider theme={{ colors: { primary: 'green' } }} bold="true" />
    <DataTable style={styles.container}>
    	 	<DataTable.Row>
    		<DataTable.Cell>Plate No:</DataTable.Cell>
    		<DataTable.Cell>{plate.plate_no}</DataTable.Cell>
    	</DataTable.Row>
<Divider theme={{ colors: { primary: 'green' } }} bold="true" />
    	<DataTable.Row>
    		<DataTable.Cell>Consignee:</DataTable.Cell>
    		<DataTable.Cell>{plate.Consignee}</DataTable.Cell>
    	</DataTable.Row>
<Divider theme={{ colors: { primary: 'green' } }} bold="true" />
    	<DataTable.Row>
    		<DataTable.Cell>Dimensions:</DataTable.Cell>
    		<DataTable.Cell>{plate.Dimensions}</DataTable.Cell>
<Divider theme={{ colors: { primary: 'green' } }} bold="true" />
    	</DataTable.Row>
<Divider theme={{ colors: { primary: 'green' } }} bold="true" />
    	<DataTable.Row>
    		<DataTable.Cell>HT:</DataTable.Cell>
    		<DataTable.Cell>{plate.HT}</DataTable.Cell>
    	</DataTable.Row>
<Divider theme={{ colors: { primary: 'green' } }} bold="true" />
<DataTable.Row>
    		<DataTable.Cell>Party:</DataTable.Cell>
    		<DataTable.Cell>{plate.Party}</DataTable.Cell>
    	</DataTable.Row>
<Divider theme={{ colors: { primary: 'green' } }} bold="true" />
<DataTable.Row>
    		<DataTable.Cell>Quality:</DataTable.Cell>
    		<DataTable.Cell>{plate.Quality}</DataTable.Cell>
    	</DataTable.Row>
<Divider theme={{ colors: { primary: 'green' } }} bold="true" />
<DataTable.Row>
    		<DataTable.Cell>Status:</DataTable.Cell>
    		<DataTable.Cell>{plate.Status}</DataTable.Cell>
    	</DataTable.Row>
<Divider theme={{ colors: { primary: 'green' } }} bold="true" />
<DataTable.Row>
    		<DataTable.Cell>Despatch Mode:</DataTable.Cell>
    		<DataTable.Cell>{plate.despatch_mode}</DataTable.Cell>
    	</DataTable.Row>
<Divider theme={{ colors: { primary: 'green' } }} bold="true" />
<DataTable.Row>
    		<DataTable.Cell>Heat No:</DataTable.Cell>
    		<DataTable.Cell>{plate.heat_no}</DataTable.Cell>
    	</DataTable.Row>
<Divider theme={{ colors: { primary: 'green' } }} bold="true" />
<DataTable.Row>
    		<DataTable.Cell>Next Job:</DataTable.Cell>
    		<DataTable.Cell>{plate.next_job}</DataTable.Cell>
    	</DataTable.Row>
<DataTable.Row>
    		<DataTable.Cell>Order Status:</DataTable.Cell>
    		<DataTable.Cell>{plate.order_status}</DataTable.Cell>
</DataTable.Row>
<Divider theme={{ colors: { primary: 'green' } }} bold="true" />
<DataTable.Row>
    		<DataTable.Cell>Order No:</DataTable.Cell>
    		<DataTable.Cell>{plate.order_no}</DataTable.Cell>
    	</DataTable.Row>

   	</DataTable>
<Divider theme={{ colors: { primary: 'green' } }} bold="true" />
   	<TouchableOpacity disabled={disabled}
                    onPress={() => handlePlateDetailsClick(plate)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Add Plate </Text>
                    </View>
                </TouchableOpacity>
 <TouchableOpacity
                   onPress={() => handlePlateArrayClick(plateArray)}>
                   <View style={styles.button}>
                       <Text style={styles.buttonText}> View Plates </Text>
                   </View>
               </TouchableOpacity>
       </View>
    </ScrollView>
</SafeAreaView>


     )

    };



    const styles = StyleSheet.create({
    segment: {
        backgroundColor: "paleturquoise"



    },
    tableHeader: {
    	backgroundColor: '#DCDCDC',
    },
  button: {
               marginTop: 25,
               width: 120,
               height: 35,
               alignItems: "center",
               justifyContent: "flex-right",
               backgroundColor: "#191970",
               borderRadius: 24
            },
    });

export default PlateDetails;