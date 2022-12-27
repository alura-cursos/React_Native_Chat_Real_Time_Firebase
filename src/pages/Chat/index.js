import { useRoute } from "@react-navigation/native";

import { GiftedChat } from 'react-native-gifted-chat'
import { useCallback, useEffect, useState } from "react";

//importação do firebase e database
import { collection, addDoc,onSnapshot, query,orderBy } from "firebase/firestore";
import { database } from "../config/firebase";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const route = useRoute();
    const { name } = route.params;
 
    useEffect(() => {
        async function getMessages() {
            const values = query(collection(database, 'chats'), orderBy('createdAt', 'desc'));
            //orderBy('createdAt', 'desc') ordena as mensagens por data de criação
            //Com essa query, o firebase vai retornar as mensagens ordenadas por data de criação

            //onSnapshot é um listener que fica escutando as alterações no banco de dados
            //sempre que houver uma alteração, ele vai executar a função que está dentro dele
            //Ele faz o Real Time
            onSnapshot(values, (snapshot) => setMessages(
                snapshot.docs.map(doc => ({
                    _id: doc.data()._id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user,
                }))
            ));
        }
        getMessages();
    }, []);


    //função que aciona assim que envia a mensagem no aplicativo
    const mensagemEnviada = useCallback((messages = []) => {
        //useCallback retorna um callback memorizado
        // a cada renderização do comopnente, todo o código que esta nele é executado novamente


        setMessages(previousMessages =>{
              GiftedChat.append(previousMessages, messages)
              //console.log(previousMessages)
              //console.log(messages)
              //previus messages é o array de mensagens que já existem
              //messages é a nova me que acabou de ser enviada 
            }
        );



        //pega a mensagem enviada na posicao 0 de messages e envia para o firebase
        const { _id, createdAt, text, user } = messages[0];
        //envia a mensagem para o firebase
        addDoc(collection(database, "chats"), {
            _id,
            createdAt,
            text,
            user,
        });
    }, []);
    
    return (
        <GiftedChat
          messages={messages}
          onSend={msg => mensagemEnviada(msg)}
          user={{
                _id: name,
            }}
        />
    )
}