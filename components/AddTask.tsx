import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { CustomButton } from './CustomButton';
import { useState } from 'react';
import { Lable } from './Lable';
import { useTodo } from '@/lib/zustand/useTodo';
import { Todo } from './Todos';

type Props = {
  closeBotttomSheet: () => void;
};

export const AddTask = ({ closeBotttomSheet }: Props) => {
  const [value, setValue] = useState('');
  const addTodo = useTodo((state) => state.addTodo);
  const [category, setCategory] = useState('personal');
  const [description, setDescription] = useState('');
  const onSelectCategory = (cat: 'personal' | 'work') => {
    setCategory(cat);
  };
  console.log({ value });

  const onCreateTodo = (todo: Todo) => {
    addTodo(todo);
    closeBotttomSheet();
  };

  const newTodo = {
    name: value,
    category,
    description,
    isCompleted: false,
  };
  const isValid = value.length > 2 && description.length > 2;
  const onAddTodo = () => {
    addTodo(newTodo);
    closeBotttomSheet();
    setValue('');
    setDescription('');
  };

  const onCancel = () => {
    setValue('');
    setDescription('');
    closeBotttomSheet();
  };
  const isActivePersonal = category === 'personal' ? 'skyblue' : '#cccc';
  const isActiveWork = category === 'work' ? ' skyblue' : '#cccc';

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Add TAsk</Text>
      <View style={styles.divider}></View>
      <View style={styles.inputContainer}>
        <Lable text="Title Task" />

        <TextInput
          style={styles.input}
          placeholder="Add Task Name"
          value={value}
          onChangeText={(text) => setValue(text)}
        />
      </View>
      {/* {/*category  *} */}
      <View style={styles.inputContainer}>
        <Lable text="category" />

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
          }}
        >
          <CustomButton
            onPress={() => onSelectCategory('personal')}
            title="personal"
            backgroundColor={isActivePersonal}
          />
          <CustomButton
            onPress={() => onSelectCategory('work')}
            title="work"
            backgroundColor={isActiveWork}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Lable text="Title Task" />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Add Task Name"
          onChangeText={(text) => setDescription(text)}
          value={description}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          marginTop: 50,
        }}
      >
        <CustomButton
          title="Cancel"
          onPress={onCancel}
          backgroundColor="skyblue"
        />

        {/*onPress={() => onCreateTodo(newTodo)} */}
        <CustomButton
          onPress={onAddTodo}
          title="create"
          backgroundColor="#eee"
          disabled={!isValid}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 15 },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  divider: {
    backgroundColor: '#cccc',
    width: '60%',
    marginHorizontal: 'auto',
    height: 2,
    marginTop: 20,
  },

  inputContainer: {
    marginTop: 10,
    gap: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    height: 50,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
  },

  btnContainer: {
    flexDirection: 'row',
    gap: 20,
  },

  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
});
