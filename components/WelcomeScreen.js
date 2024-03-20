import React,{ useState } from 'react';
import { ToastAndroid } from 'react-native';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';

import { DataTable, Divider } from 'react-native-paper';
import PlateDetails from './PlateDetails.js';
import Plate from './Plate.js';

const WelcomeScreen = ({navigation}) => {
const [plateNo, setPlateNo]=useState({});

function setPlateDetails(details){
setPlateNo((previousPlate)=>setPlateNo(details));
}


     return  (
           <SafeAreaView style={styles.container}>
           <ScrollView>
            <View style={[styles.segment, {flex: 1}]}>
          {/*  <Plate setPlateDetails={setPlateDetails} /> */}
             {/*  <Text style={styles.text}> Plate No </Text>
               <TextInput style={styles.textInput}
                   placeholder="Enter Plate No"
                   placeholderTextColor="black"
                   inputMode="text"
                    value={plate}
                   onChangeText={text => { if(text.length==0) {Alert.alert("Plate No cannot be empty")
                           }  else{setPlate(text);    }
                   }         } />
               <TouchableOpacity onPress={() => handlePlateClick(plate)}>
                   <View style={styles.button}>
                       <Text style={styles.buttonText}> Submit </Text>
                   </View>
               </TouchableOpacity> */}
            </View>
        <Divider theme={{ colors: { primary: 'green' } }} bold="true" />

    <View style={[styles.column, {flexDirection: "row"}]} >
                            <DataTable style={styles.container2}>
                    	 	<DataTable.Row>
                    		<DataTable.Cell>Plate No:</DataTable.Cell>
                    		<DataTable.Cell>{plateNo.plate_no}</DataTable.Cell>
                    	</DataTable.Row>

                    	<DataTable.Row>
                    		<DataTable.Cell>Consignee:</DataTable.Cell>
                    		<DataTable.Cell>{plateNo.Consignee}</DataTable.Cell>
                    	</DataTable.Row>
                    	<DataTable.Row>
                    		<DataTable.Cell>Dimensions:</DataTable.Cell>
                    		<DataTable.Cell>{plateNo.Dimensions}</DataTable.Cell>

                    	</DataTable.Row>
                    	<DataTable.Row>
                    		<DataTable.Cell>HT:</DataTable.Cell>
                    		<DataTable.Cell>{plateNo.HT}</DataTable.Cell>
                    	</DataTable.Row>
                <DataTable.Row>
                    		<DataTable.Cell>Party:</DataTable.Cell>
                    		<DataTable.Cell>{plateNo.Party}</DataTable.Cell>
                    	</DataTable.Row>
                <DataTable.Row>
                    		<DataTable.Cell>Quality:</DataTable.Cell>
                    		<DataTable.Cell>{plateNo.Quality}</DataTable.Cell>
                    	</DataTable.Row>
                <DataTable.Row>
                    		<DataTable.Cell>Status:</DataTable.Cell>
                    		<DataTable.Cell>{plateNo.Status}</DataTable.Cell>
                    	</DataTable.Row>
                <DataTable.Row>
                    		<DataTable.Cell>Despatch Mode:</DataTable.Cell>
                    		<DataTable.Cell>{plateNo.despatch_mode}</DataTable.Cell>
                    	</DataTable.Row>
                <DataTable.Row>
                    		<DataTable.Cell>Heat No:</DataTable.Cell>
                    		<DataTable.Cell>{plateNo.heat_no}</DataTable.Cell>
                    	</DataTable.Row>
                <DataTable.Row>
                    		<DataTable.Cell>Next Job:</DataTable.Cell>
                    		<DataTable.Cell>{plateNo.next_job}</DataTable.Cell>
                    	</DataTable.Row>
                <DataTable.Row>
                    		<DataTable.Cell>Order No:</DataTable.Cell>
                    		<DataTable.Cell>{plateNo.order_no}</DataTable.Cell>
                    	</DataTable.Row>

                    	</DataTable>




                </View>
            </ScrollView>
           </SafeAreaView>
       );
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: "center",
        alignItems: "center"
    },
    text: {

        marginBottom: 10,
        color: "green",
         alignItems: "flex-end"
    },
    textInput: {
            height: 35,
            width: 250,
            borderWidth: 5,
            borderRadius: 20,
            borderColor: "orange",
            paddingLeft: 20,
            marginTop: 5,
            color: "blue"

        },
         button: {
                marginTop: 25,
                marginLeft: 180,
                width: 120,
                height: 25,
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

export default WelcomeScreen;