import { StyleSheet, Text } from 'react-native';

type props = {
  text: string;
};

export const Lable = ({ text }: props) => {
  return <Text style={styles.label}>{text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
