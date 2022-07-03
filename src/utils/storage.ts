import { setItemAsync, getItemAsync, deleteItemAsync } from 'expo-secure-store'

export const saveItem = async (key: string, value: string) => {
    await setItemAsync(key, value)
}

export const getItemFor = async (key: string) => {
    const value = await getItemAsync(key)
    return value ? value : undefined
}

export const deleteItem = async (key: string) => {
    if (key) {
        await deleteItemAsync(key)
    }
    
    return undefined
}
