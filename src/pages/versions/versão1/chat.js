import { View, Text } from "react-native";
import { GiftedChat } from 'react-native-gifted-chat'
import { useCallback, useState } from "react";


export default function Chat() {
    const [messages, setMessages] = useState([]);

    //função que aciona assim que envia a mensagem para atualizar na tela
    const mensagemEnviada = useCallback((messages = []) => {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages)
        );

        //envia a mensagem para o firebase
        //....
    }, []);
    
    return (
        <GiftedChat
          messages={messages}
          onSend={msg => mensagemEnviada(msg)}
        />
    )
}