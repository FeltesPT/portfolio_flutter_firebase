import { Request, Response } from 'express';
import * as admin from 'firebase-admin';

export async function set(req: Request, res: Response) {
    const db = admin.firestore();

    const docRef = db.collection('info').doc('myInfo');

    try {

        const { first,
            last,
            title,
            email,
            location,
            about,
            twitter,
            linkedin,
            github } = req.body;

        const result = docRef.set({ first, last, title, email, location, about, twitter, linkedin, github }, { merge: true });

        return res.status(201).send({ result });
    } catch (err) {
        return handleError(res, err);
    }
}

export async function get(req: Request, res: Response) {
    const db = admin.firestore();

    try {
        const info = await (await db.collection('info').doc('myInfo').get()).data();
        return res.status(200).send({ info });
    } catch (err) {
        return handleError(res, err);
    }
}

export async function remove(req: Request, res: Response) {
    const db = admin.firestore();

    const docRef = db.collection('info').doc('myInfo');
    try {
        const result = docRef.delete();

        return res.status(204).send({ result });
    } catch (err) {
        return handleError(res, err);
    }
}

function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}