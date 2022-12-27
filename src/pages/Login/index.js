import { View , Text, TextInput, Button} from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Login({ navigation }) {
    const [name, setName] = useState('');
    const [senha, setSenha] = useState('');

    
    return (
        <View style={styles.container}>
            
                <View style={styles.boxInput}>
                    <Text>Nome de Usuário</Text>
                    
                    <TextInput 
                        style={styles.input} 
                        onChangeText={setName}    
                    />
                </View>

                <Button 
                    title="Entrar" 
                    onPress={() => navigation.navigate('Chat', { name: name })}
                />

           
        </View>
    )
}