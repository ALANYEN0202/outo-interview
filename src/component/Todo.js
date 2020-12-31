import React from 'react';
import styled from 'styled-components';

const TodoWrapper = styled.div`
  position: relative;
  background: #acd6ff;
  border: 1px solid black;
  border-radius: 8px;
  margin: 0px 40px;

  & + & {
    margin-top: 20px;
  }
`;

const Memo = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-top: 15px;
`
const Address = styled.div`
  position: relative;
  right: 8vw;
  font-weight: bold;
  margin-top: 10px;
`

const CreateAt = styled.div`
  position: relative;
  left: 6vw;
  overflow: wrap;
`

const Button = styled.button`
  position: absolute;
  right: -10px;
  top: -5px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 20px;
  background: #FF9797;
  border: 1px solid #FF0000;
  cursor: pointer;
`

export default function Todo({todo, deleteTodo}) {
  return (
    <TodoWrapper>
      <Memo>{todo.memo}</Memo>
      {todo.address !== undefined && (
        <Address>{`Address: ${todo.address}`}</Address>
      )}
      <CreateAt>{`memo created at: ${todo.createdAt}`}</CreateAt>
      <Button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        X
      </Button>
    </TodoWrapper>
  );
}
