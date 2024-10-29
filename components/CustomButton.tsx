import { disableErrorHandling } from 'expo';
import { Pressable, Text, View } from 'react-native';

type Props = {
  title: string;
  backgroundColor: string;
  color?: string;
  onPress: () => void;
  disabled?: boolean;
};

export const CustomButton = ({
  title,
  backgroundColor,
  color,
  onPress,
  disabled,
}: Props) => {
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        {
          backgroundColor: backgroundColor,
          paddingVertical: 5,
          borderRadius: 5,
          height: 50,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          opacity: pressed ? 0.5 : 1,
        },
        { opacity: disabled ? 0.4 : 1 },
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 20,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};
