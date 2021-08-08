import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LogHeader = ({ right }) => {
  const navigation = useNavigation();

  return (
    <View style={{ paddingHorizontal: 20, flexDirection: "row" }}>
      <View styl={{ flex: 1, alignItems: "flex-start" }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          {/* <Image
            source={icons.back_arrow}
            resizeMode="contain"
            style={{ width: 25, height: 25, tintColor: "gray"}}
          /> */}
          <Text style={{ marginLeft: 20 }}>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <TouchableOpacity>
          {/* <Image source={icons.star} resizeMode="contain" style={{width: 30, height: 30,}} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogHeader;