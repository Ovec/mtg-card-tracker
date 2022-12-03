import { Preferences } from '@capacitor/preferences';

export const get = async (key: string): Promise<string | null> => {
    const data = await Preferences.get({ key })
    return data.value
}

export const set = async (key: string, value: string): Promise<void> => {
    await Preferences.set({ key, value })
}