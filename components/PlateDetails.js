
import React, {useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, ScrollView, ToastAndroid } from 'react-native';
import { DataTable } from 'react-native-paper';
import useValidate from "./useValidate.js";

function PlateDetails({navigation, route}){
    const {plate} = route.params;
  //  console.log(props);
    ToastAndroid.showWithGravity(plate.Party, ToastAndroid.SHORT, ToastAndroid.TOP);
  //  let disable;
    const {disabled, validate}=useValidate(plate);
    useEffect(()=>{
         validate();
     //    disable=disabled
    }, [plate]);


    return (
               <SafeAreaView style={styles.container}>
               <ScrollView>
                <View style={[styles.segment, {flex: 1}]}>


    <DataTable style={styles.container}>
    	 	<DataTable.Row>
    		<DataTable.Cell>Plate No:</DataTable.Cell>
    		<DataTable.Cell>{plate.plate_no}</DataTable.Cell>
    	</DataTable.Row>

    	<DataTable.Row>
    		<DataTable.Cell>Consignee:</DataTable.Cell>
    		<DataTable.Cell>{plate.Consignee}</DataTable.Cell>
    	</DataTable.Row>
    	<DataTable.Row>
    		<DataTable.Cell>Dimensions:</DataTable.Cell>
    		<DataTable.Cell>{plate.Dimensions}</DataTable.Cell>

    	</DataTable.Row>
    	<DataTable.Row>
    		<DataTable.Cell>HT:</DataTable.Cell>
    		<DataTable.Cell>{plate.HT}</DataTable.Cell>
    	</DataTable.Row>
<DataTable.Row>
    		<DataTable.Cell>Party:</DataTable.Cell>
    		<DataTable.Cell>{plate.Party}</DataTable.Cell>
    	</DataTable.Row>
<DataTable.Row>
    		<DataTable.Cell>Quality:</DataTable.Cell>
    		<DataTable.Cell>{plate.Quality}</DataTable.Cell>
    	</DataTable.Row>
<DataTable.Row>
    		<DataTable.Cell>Status:</DataTable.Cell>
    		<DataTable.Cell>{plate.Status}</DataTable.Cell>
    	</DataTable.Row>
<DataTable.Row>
    		<DataTable.Cell>Despatch Mode:</DataTable.Cell>
    		<DataTable.Cell>{plate.despatch_mode}</DataTable.Cell>
    	</DataTable.Row>
<DataTable.Row>
    		<DataTable.Cell>Heat No:</DataTable.Cell>
    		<DataTable.Cell>{plate.heat_no}</DataTable.Cell>
    	</DataTable.Row>
<DataTable.Row>
    		<DataTable.Cell>Next Job:</DataTable.Cell>
    		<DataTable.Cell>{plate.next_job}</DataTable.Cell>
    	</DataTable.Row>
<DataTable.Row>
    		<DataTable.Cell>Order No:</DataTable.Cell>
    		<DataTable.Cell>{plate.order_no}</DataTable.Cell>
    	</DataTable.Row>
   	</DataTable>

   	<TouchableOpacity disabled={disabled}
                    onPress={() => Alert.alert("Hello !")}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> Add Plate </Text>
                    </View>
                </TouchableOpacity>
       </View>
    </ScrollView>
</SafeAreaView>


     )

    };



    const styles = StyleSheet.create({
    container: {
    	padding: 15,
    },
    tableHeader: {
    	backgroundColor: '#DCDCDC',
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
    });

export default PlateDetails;