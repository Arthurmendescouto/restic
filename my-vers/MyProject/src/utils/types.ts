export type TaskProps = {
    id: string; // Mude para string
    title: string;
    status: boolean;
    onCheck?: () => void;
    onRemove?: () => void;  
};

export type RootStackParamList = {
    Menu:undefined;
    Home: undefined;
    Work:undefined;
    Details: TaskProps;
};