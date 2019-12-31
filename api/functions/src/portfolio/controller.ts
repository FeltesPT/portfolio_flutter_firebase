import { Request, Response } from 'express';
import * as admin from 'firebase-admin';

export async function create(req: Request, res: Response) {
    const db = admin.firestore();

    const docRef = db.collection('portfolio').doc();

    try {
        const { title, description, imageURL, url, date } = req.body;

        if (!title || !description || !imageURL || !url || !date) {
            return res.status(400).send({ message: 'Missing Fields' });
        }

        // TODO: Doesn't work, update soon
        const order = docRef.collection.length;

        const result = await docRef.set({ order, title, description, imageURL, url, date }, { merge: true });

        return res.status(201).send({ result });
    } catch (err) {
        return handleError(res, err);
    }
}

export async function all(req: Request, res: Response) {
    const db = admin.firestore();
    const docRef = db.collection('portfolio');

    try {
        const portfolio = await (docRef.orderBy('order').get());
        const projects = portfolio.docs.map(doc => {
            let project = doc.data();
            project.uid = doc.id;
            return project;
        });

        return res.status(200).send({ projects });
    } catch (err) {
        return handleError(res, err);
    }
}

export async function get(req: Request, res: Response) {
    const db = admin.firestore();

    try {
        const { id } = req.params
        const project = (await db.collection('portfolio').doc(id).get()).data();
        return res.status(200).send({ project });
    } catch (err) {
        return handleError(res, err);
    }
}

export async function patch(req: Request, res: Response) {
    const db = admin.firestore();

    try {
        const { id } = req.params
        const { title, description, imageURL, url, date } = req.body;

        if (!id || !title || !description || !url || !date) {
            return res.status(400).send({ message: 'Missing Fields' });
        }

        const docRef = db.collection('portfolio').doc(id);

        var result = await docRef.update({ title, description, url, date });

        if (imageURL != null) {
            result = await docRef.update({ imageURL });
        }

        return res.status(204).send({ result });
    } catch (err) {
        return handleError(res, err);
    }
}

export async function remove(req: Request, res: Response) {
    const db = admin.firestore();
    const { id } = req.params
    const docRef = db.collection('portfolio').doc(id);

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