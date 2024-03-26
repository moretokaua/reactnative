
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { FontAwesome } from '@expo/vector-icons';

export default function Home(){
    function handleAluno(){
        console.log('Olá')
    }

    return(
        <View style={styles.container}>
           
            <View style={styles.header}>
                <Image style={styles.photo} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fX9pIbBhCf1kvE6HbYcU9AeiNRtr00tzKZp3eFy60Q&s'}}/>
                <TextInput style={styles.input}/>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}><FontAwesome name="search" size={24} color="black" /></Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
