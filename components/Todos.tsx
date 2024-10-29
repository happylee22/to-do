import { Text, FlatList, StyleSheet } from 'react-native';
import { TodoItem } from './Todo';

export type Todo = {
  name: string;
  category: string;
  isCompleted: boolean;
  description: string;
};
type props = {
  todos: Todo[];
};

export const Todos = ({ todos }: props) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{ marginTop: 20 }}
      data={todos}
      renderItem={({ item }) => <TodoItem item={item} />}
      contentContainerStyle={{
        gap: 20,
      }}
      ListEmptyComponent={() => (
        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 50 }}>
          you have no upcoming task
        </Text>
      )}
    />
  );
};
