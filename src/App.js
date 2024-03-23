import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodolIst';
import { DarkModeProvider } from './context/DarkModeContext';

const filters =['all','active','completed']
function App() {
  //Header와 TodoList 둘다가 어떤 필드를 선택했는지 알아야 하므로 filter는 app.js에 상태값을 둔다.   
  const [filter, setFilter]=useState(filters[0]);
  return (
   
    <DarkModeProvider>
      <Header filters={filters}  filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter}/>
    </DarkModeProvider>
  
  );
}

export default App;
