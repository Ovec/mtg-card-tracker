import { Card } from "../components/Card/CardType"
import { set as setPref, get as getPref } from "./preferences"

const listName = 'cardList';

export const create = async () => {
    await setPref(listName, '')
}

export const get = async (): Promise<Card[]> => {
    const data = await getPref(listName)
    if (!data) return []
    return JSON.parse(data)
}


export const find = async (card: Card) => {
    const list = await get()
    return list.find(e => e.id === card.id)
}

export const save = async (list: Card[]): Promise<void> => {
    setPref(listName, JSON.stringify(list))
}

export const add = async (card: Card): Promise<boolean> => {
    let list = await get();
    if (list.find(e => e.id === card.id)) return false
    list.push(card);
    await save(list)
    return true
}

export const remove = async (card: Card): Promise<boolean> => {
    let list = await get();
    if (!list.find(e => e.id === card.id)) return false
    list.filter(c => c.id !== card.id);
    await save(list)
    return true
}
