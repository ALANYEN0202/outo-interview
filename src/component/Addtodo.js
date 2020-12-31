import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/counter/todoSlice'

const Input = styled.input`
margin-top: 10px;
`
function time() {
  let str = '';
  const d = new Date();
    str += d.getFullYear() + ' / ';  
    str += d.getMonth() + 1 + ' / ';  
    str += d.getDate() + ' / ';
    str += d.getHours() + ' : ';
    str += d.getMinutes() + ' : ';
    str += d.getSeconds() + '';
    return str;
}

function Addtodo() {
  const [value, setValue] = useState('');
  let todoId = useRef(3)
  const dispatch = useDispatch()
  const createdAt = time();

  const handleAddTodo = () => {
    if(value === '') return
    dispatch(addTodo({id:todoId.current, content: value, createdAt, }))
    setValue('')
    todoId.current++
  }

  return (
  <>
    <Input value={value} onChange={(e) => {setValue(e.target.value)}} placeholder="type a new memo"/>
    <button onClick={handleAddTodo}>ADD</button>
  </>
  );
}

export default Addtodo;
