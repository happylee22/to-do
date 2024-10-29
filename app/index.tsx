import { AddTask } from '@/components/AddTask';
import { CustomButton } from '@/components/CustomButton';
import { NewButton } from '@/components/NewButton';
import { Todo, Todos } from '@/components/Todos';
import { useTodo } from '@/lib/zustand/useTodo';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useMemo, useRef, useState } from 'react';
import { Button, Text, View, StyleSheet, Alert } from 'react-native';

export default function Index() {
  const onPress = () => {
    console.warn('pressed');
  };
  const bottomSheetRef = useRef<BottomSheet>(null);
  const todos = useTodo((state) => state.todo);
  const [category, setCategory] = useState('personal');

  const snapshots = useMemo(() => ['70%'], []);

  const filteredTodo = useMemo(
    () =>
      todos.filter(
        (todos) => todos.category.toLocaleLowerCase() === category.toLowerCase()
      ),
    [todos, category]
  );
  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };
  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  const isActivePersonal = category === 'personal' ? 'skyblue' : '#eee';
  const isActiveWork = category === 'work' ? ' skyblue' : '#eee';

  return (
    <View style={style.container}>
      <Text style={{ color: '#ccc', fontSize: 20 }}>TODAY</Text>
      <Text style={{ color: 'black', fontSize: 30, fontWeight: '700' }}>
        OCTOBER 8, 2023
      </Text>

      <View style={style.firstView}>
        <Text
          style={{
            fontWeight: '600',
            color: 'white',
          }}
        >
          {' '}
          Keep it up! complete your task. You are almost there!
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: 10,
        }}
      >
        <CustomButton
          onPress={() => setCategory('personal')}
          title="personal"
          backgroundColor={isActivePersonal}
        />
        <CustomButton
          onPress={() => 'work'}
          title="work"
          backgroundColor={isActiveWork}
        />
      </View>
      <Todos todos={filteredTodo} />

      <NewButton onPress={openBottomSheet} />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapshots}
        index={-1}
        enablePanDownToClose
      >
        <BottomSheetScrollView style={{ flex: 1 }}>
          <AddTask closeBotttomSheet={closeBottomSheet} />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
}

const style = StyleSheet.create({
  container: { backgroundColor: 'white', flex: 1, paddingHorizontal: 15 },
  firstView: {
    marginTop: 20,
    height: 150,
    width: '100%',
    backgroundColor: 'skyblue',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
