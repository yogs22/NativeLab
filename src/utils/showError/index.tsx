import {showMessage} from 'react-native-flash-message';

export const showAlert = (
  message: string,
  type: 'danger' | 'success' | 'default',
) => {
  showMessage({
    message,
    type,
  });
};
