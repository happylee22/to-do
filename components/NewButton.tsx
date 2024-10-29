import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

type NewButtonProps = {
  onPress: () => void;
};
export const NewButton = ({ onPress }: NewButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [style.pressable, { opacity: pressed ? 0.5 : 1 }]}
      onPress={onPress}
    >
      <AntDesign name="plus" color={'white'} size={30} />
    </Pressable>
  );
};
const style = StyleSheet.create({
  pressable: {
    backgroundColor: 'skyblue',
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
  },
});
