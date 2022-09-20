import { useState } from 'react';
import EmptyList from '../components/EmptyList';
import InputFAB from '../components/InputFAB';
import List from '../components/List';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

const ListScreen = () => {
  const [todos, setTodos] = useState([]);

  const onInsert = (task) => {
    const id = nanoid();
    const newTask = { id, task, isDone: false };
    setTodos((prev) => [newTask, ...prev]);
  };

  return (
    <>
      {todos.length ? <List data={todos} /> : <EmptyList />}
      <InputFAB onInsert={onInsert} />
    </>
  );
};

export default ListScreen;
