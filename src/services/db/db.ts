import sql from 'better-sqlite3';
import {IMeal} from "@/models/IMeal";
import {revalidatePath} from "next/cache";

let db = sql('meals.db');

export const getMeals = async (): Promise<IMeal[]> => {
    'use server';
    return db.prepare<IMeal[]>('select * from meals').all() as IMeal[];
}

export const addMeal = async (FormData: FormData): Promise<void> => {
    db.prepare('INSERT INTO meals(slug, title, image, summary, instructions, creator, creator_email) values (?, ?, ?, ?, ?, ?, ?)')
        .run(
            FormData.get('slug'),
            FormData.get('title'),
            FormData.get('image'),
            FormData.get('summary'),
            FormData.get('instructions'),
            FormData.get('creator'),
            FormData.get('creator_email'));
    revalidatePath('/meals');
}
