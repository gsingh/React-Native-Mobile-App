import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, ScrollView, ToastAndroid } from 'react-native';
import { DataTable, Divider, Checkbox } from 'react-native-paper';

export default function AddPlates({navigation, route}){
    const {loaded}= route.params;
    const [checked, setChecked] = useState(false);
  //   Alert.alert(`Plate loaded! No of plates loaded ${loaded.length} (from AddPlates)`);

    return (
                <SafeAreaView style={styles.container}>
                <ScrollView>
                 <View style={[styles.segment, {flex: 1}]}>


     <DataTable style={styles.container}>
     <Divider theme={{ colors: { primary: 'green' } }} bold="true" />
      <DataTable.Header>
             <DataTable.Title>PlateNo</DataTable.Title>
             <DataTable.Title>Consignee</DataTable.Title>
             <DataTable.Title>Dimensions</DataTable.Title>
             <DataTable.Title>HeatNo</DataTable.Title>
             <DataTable.Title>NextJob</DataTable.Title>
             <DataTable.Title>OrderNo</DataTable.Title>
           </DataTable.Header>

     {loaded.map((plate, key)=>

     	 	<DataTable.Row>
     	 	 <Divider theme={{ colors: { primary: 'green' } }} bold="true" />
     	{/*}	<DataTable.cell><Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked) }} /> </DataTable.cell> */}
     		<DataTable.Cell>{plate.plate_no}</DataTable.Cell>
     		<DataTable.Cell>{plate.Consignee}</DataTable.Cell>
       		<DataTable.Cell>{plate.Dimensions}</DataTable.Cell>
      		<DataTable.Cell>{plate.heat_no}</DataTable.Cell>
     		<DataTable.Cell>{plate.next_job}</DataTable.Cell>
     		<DataTable.Cell>{plate.order_no}</DataTable.Cell>
     		<Divider theme={{ colors: { primary: 'green' } }} bold="true" />
     	</DataTable.Row>

     	)}

    	</DataTable>

    	<TouchableOpacity
                     onPress={() => Alert.alert("Hello!! from addPlates")}>
                     <View style={styles.button}>
                         <Text style={styles.buttonText}> Submit LR </Text>
                     </View>
                 </TouchableOpacity>

        </View>
     </ScrollView>
 </SafeAreaView>


      )
      }
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

