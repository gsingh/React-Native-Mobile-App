import {useState} from "react";
import {ToastAndroid, Alert} from "react-native";
import Toast from "react-native-toast-message";
export default function useValidate(plate){
    const [disabled, setDisabled]=useState(false);

    function validate(){
    //    ToastAndroid.showWithGravity(plate.next_job, ToastAndroid.SHORT, ToastAndroid.TOP);
    if (plate.next_job=="MTL-REJ" || plate.next_job=="ROLLING" || plate.next_job=="RETURNED"){
     //     ToastAndroid.showWithGravity(`${plate.plate_no} cannot be loaded, as plate next job is ${plate.next_job}`, ToastAndroid.SHORT, ToastAndroid.TOP);
                   Toast.show({
                   type : "error",
                   text1: "Plate cannot be loaded !",
                   text2: `Plate next job is ${plate.next_job}`,
                   autoHide: true,
                   position: "top",
                   visibilityTime: 8000,
                   topOffset: 500
                    });
           setDisabled(true);

        } else if (plate.Party==="Direct" && plate.Status==="NCO"){
   // ToastAndroid.showWithGravity(`${plate.plate_no} cannot be loaded, NCO plate cannot be loaded for ${plate.Party} customer`, ToastAndroid.SHORT, ToastAndroid.TOP);
      Toast.show({
                        type : "error",
                        text1: `${plate.plate_no} cannot be loaded`,
                        text2: `NCO plate cannot be loaded for ${plate.Party} customer`,
                        autoHide: true,
                        position: "top",
                        visibilityTime: 8000,
                        topOffset: 500
                         });
     setDisabled(true);

} else if (plate.Party==="Direct" && plate.order_status.includes("X")){
 //   ToastAndroid.showWithGravity(`${plate.plate_no} cannot be loaded, NCO plate cannot be loaded for ${plate.Party} customer`, ToastAndroid.SHORT, ToastAndroid.TOP);
      Toast.show({
                              type : "error",
                              text1: `${plate.plate_no} cannot be loaded`,
                              text2: `Closed Order plate cannot be loaded for ${plate.Party} customer`,
                              autoHide: true,
                              position: "top",
                              visibilityTime: 8000,
                              topOffset: 500
                               });
     setDisabled(true);

} else{
       setDisabled(false);
   //    ToastAndroid.showWithGravity("Plate can be loaded !!", ToastAndroid.LONG, ToastAndroid.CENTER);
   Toast.show({
                                 type : "success",
                                 text1: `${plate.plate_no} can be loaded`,
                                 text2: `Number: ${plate.plate_no}`,
                                 autoHide: true,
                                 position: "bottom",
                                 visibilityTime: 6000,
                                 bottomOffset: 100
                                  });

       }

    }
    return {disabled, validate};
}