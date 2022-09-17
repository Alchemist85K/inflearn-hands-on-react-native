import EmptyList from '../components/EmptyList';
import List from '../components/List';

const ListScreen = () => {
  const todos = [
    // { id: 1, task: 'test', isDone: false }
  ];

  // if (todos.length === 0) {
  //   return <EmptyList />;
  // }

  return todos.length ? <List /> : <EmptyList />;
};

export default ListScreen;
