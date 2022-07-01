import * as SecureStore from 'expo-secure-store';

export const storeAccessToken = async (key: string, token: string) => {
    await SecureStore.setItemAsync(key, token);
}

export const getAccessToken = async (key: string) => {
    const token = await SecureStore.getItemAsync(key)

    return token
}
