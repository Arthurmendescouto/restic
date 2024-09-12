// src/components/Task/index.tsx
import React from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons'; 
import { Container, TaskText, TaskDone, TaskDelete } from './styles';



// Define uma interface para as propriedades do componente
interface TaskProps {
  description: string;
  check: boolean;
}

// Aplica a interface ao componente
export function Task({ description, check }: TaskProps) {
  return (
    <Container>
      <TaskDone>
      <FontAwesome name="circle" size={28} color="white" />

      </TaskDone>
      <TaskText>{description}</TaskText>
      <TaskDelete>
        <Feather name='trash-2' size={24} color='white' />
      </TaskDelete>
    </Container>
  );
}
