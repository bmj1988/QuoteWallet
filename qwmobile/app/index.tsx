import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.logoTEMP}>
      <Text>QuoteWall</Text>
      </View>
    </View>
  );
}

const styles= StyleSheet.create({
  logoTEMP: {
    borderWidth: 3,
    borderColor:  '#C656DB',
    fontSize: 30,
    fontFamily: 'JosefinSans-VariableFont_wght',
    color: '#664CDB'
  }
})
