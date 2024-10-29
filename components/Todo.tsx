import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Action } from './Action';
import { useState } from 'react';
import { Todo } from './Todos';
import { useTodo } from '@/lib/zustand/useTodo';

type Props = {
  item: Todo;
};

export const TodoItem = ({ item }: Props) => {
  const onDeleteTodo = useTodo((state) => state.deleteTodo);
  const onToggleTodo = useTodo((state) => state.toggleTodo);
  const [visible, setVisible] = useState(false);
  const onVisible = () => setVisible(true);
  const onHide = () => setVisible(false);
  return (
    <View style={styles.itemContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <View style={styles.circle}>
          {item.isCompleted && (
            <FontAwesome name="check" color="white" size={20} />
          )}
        </View>
        <Text>{item.name}</Text>
      </View>
      <Action
        onHide={onHide}
        onVisible={onVisible}
        visible={visible}
        onToggleTodo={onToggleTodo}
        onDeleteTodo={onDeleteTodo}
        name={item.name}
        isCompleted={item.isCompleted}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    gap: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#eee',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  circle: {
    backgroundColor: '#ccc',
    width: 20,
    height: 20,
    borderRadius: 50,
  },
});
