import { Request, Response } from 'express';
import * as admin from 'firebase-admin';

export async function create(req: Request, res: Response) {
    const db = admin.firestore();

    const batch = db.batch();
    const docRef = db.collection('portfolio').doc();

    try {
        const { title, description, imageURL, url, date, lang } = req.body;
        const order = 0;

        if (!title || !description || !imageURL || !url || !date || !lang) {
            return res.status(400).send({ message: 'Missing Fields' });
        }

        const snap = await db.collection('portfolio').orderBy('order').get();

        snap.forEach(async function (doc) {
            batch.update(doc.ref, { order: doc.data()['order'] + 1 });
        });

        batch.set(docRef, { order, title, description, imageURL, url, date, lang }, { merge: true });

        try {
            const result = await batch.commit();
            return res.status(201).send({ result });
        } catch (err) {
            return handleError(res, err);
        }

    } catch (err) {
        return handleError(res, err);
    }
}

export async function all(req: Request, res: Response) {
    const db = admin.firestore();
    const docRef = db.collection('portfolio');

    console.log("Hello all");

    try {
        const portfolio = await (docRef.orderBy('order').get());
        const projects = portfolio.docs.map(doc => {
            const project = doc.data();
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
        const { title, description, imageURL, url, date, lang } = req.body;

        if (!id || !title || !description || !url || !date || !lang) {
            return res.status(400).send({ message: 'Missing Fields' });
        }

        const docRef = db.collection('portfolio').doc(id);

        let result = await docRef.update({ title, description, url, date, lang });

        if (imageURL !== null) {
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

export async function reorder(req: Request, res: Response) {
    const db = admin.firestore();
    const { oldIndex, newIndex } = req.body;

    const oldN = Number(oldIndex);
    const newN = Number(newIndex);

    const bigger = oldN > newN ? oldN : newN;
    const smaller = oldN < newN ? oldN : newN;

    const batch = db.batch();

    db.collection('portfolio').where('order', '>=', smaller).where('order', '<=', bigger).orderBy('order').get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(async function (doc) {

                if (doc.data().order === oldN) {
                    batch.update(doc.ref, { order: newN });
                } else {
                    if (oldN > newN) {
                        batch.update(doc.ref, { order: doc.data()['order'] + 1 });
                    } else {
                        batch.update(doc.ref, { order: doc.data()['order'] - 1 });
                    }
                }
            });

            try {
                const result = batch.commit();
                return res.status(204).send({ result });
            } catch (err) {
                return handleError(res, err);
            }
        })
        .catch(function (err) {
            return handleError(res, err);
        });
}

function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}