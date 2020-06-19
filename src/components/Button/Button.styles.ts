import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  centered: {
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    borderColor: '#000',
    borderRadius: 40,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  disabled: {
    borderColor: '#BDBDBD',
  },
  selected: {
    backgroundColor: '#E0E0E0',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
})
