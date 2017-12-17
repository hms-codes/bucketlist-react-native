import {
  Platform,
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(127,127,127,0.8)',
    height: '100%',
  },
  input: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 3,
    marginTop: 2,
    padding: Platform.OS === 'ios' ? 15 : 5,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 0,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  button: {
    borderRadius: 20,
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 45 : 40,
    alignSelf: 'stretch',
    marginTop: 10,
    marginLeft: 70,
    marginRight: 70,
    backgroundColor: '#00bcd4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: 'rgba(255,255,255,0)',
  },
  cancelButtonText: {
    color: '#fff',
  },
  image: {
    opacity: 0.5,
    backgroundColor: '#aaa',
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    margin: 20,
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 30,
  },
  activity: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00bcd4',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
