import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, TaskText, TaskDone, TaskDelete } from './styles';
import FontAwesome from 'react-native-vector-icons/MaterialIcons';
import { TaskProps, RootStackParamList } from "../../utils/types";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList>;

export function Task({ id, title, status, tag, onCheck, onRemove }: TaskProps) {
  const navigation = useNavigation<Props['navigation']>();

  function handlePress() {
    navigation.navigate('Details', { id, title, status, tag });
  }

  return (
    <Container onPress={handlePress}>
      <TaskDone onPress={onCheck} style={status ? { backgroundColor: '#0E9577' } : {}}>
        {!status && <FontAwesome name="circle" size={28} color="white" />}
        {status && (
          <FontAwesome name="circle" size={28} color="white" style={{ borderColor: 'white', marginLeft: 20 }} />
        )}
      </TaskDone>
      <TaskText onPress={handlePress}>{title}</TaskText>
      <TaskDelete onPress={onRemove}>
        <Feather name='trash-2' size={24} color='white' />
      </TaskDelete>
    </Container>
  );
}