import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    
    <ThemedView style={styles.container}>

    <Image
        source={{ uri: 'https://c.ndtvimg.com/2024-04/uabtnvdg_april-fools-day-_625x300_01_April_24.jpg?im=FeatureCrop,algorithm=dnn,width=773,height=435' }} 
        style={styles.image}
      />

      <ThemedText type="title">This is a modal</ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 773,
    height: 435,
    marginBottom: 20,
    borderRadius: 10,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },  
});
