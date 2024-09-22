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

    const handleBackPress = () => {
        console.log("Voltando para a tela anterior");
        navigation.goBack();
    };

    const handleTitlePress = () => {
        console.log("Título 'Casa' clicado");
    };

    return (
        <Container>
            <TopContainer>
                <TopButton onPress={handleBackPress} activeOpacity={0.7}>
                    <Feather name="chevron-left" size={24} color="white" />
                </TopButton>
                <TitleContainer>
                    <Title style={{ userSelect: 'none' }} >
                        Casa
                    </Title>
                </TitleContainer>
            </TopContainer>
            <TextStatus>Status das tarefas:</TextStatus>
            <StatusContainer>
                {/* Aqui você pode adicionar qualquer conteúdo adicional, se necessário */}
            </StatusContainer>
        </Container>
    );
}