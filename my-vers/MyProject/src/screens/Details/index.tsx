import { 
    Container, 
    TopContainer, 
    TopButton, 
    TitleContainer, 
    Title, 
    StatusContainer, 
    TextStatus 
} from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/types';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Details({ route }: Props) {
    const navigation = useNavigation();

    return (
        <Container>
            <TopContainer>
                <TopButton onPress={() => navigation.goBack()} activeOpacity={0.7}>
                    <Feather name="chevron-left" size={24} color="white" />
                </TopButton>
            </TopContainer>
            <TitleContainer>
                <Title style={{ textAlign: 'center', color: 'white', userSelect: 'none' }}> {/* userSelect: 'none' para evitar seleção */}
                    Casa
                </Title>
            </TitleContainer>
            <TextStatus>Status das tarefas:</TextStatus>
            <StatusContainer>
                {/* Aqui você pode adicionar qualquer conteúdo adicional, se necessário */}
            </StatusContainer>
        </Container>
    );
}