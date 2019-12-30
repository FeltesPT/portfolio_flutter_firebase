import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { userRoutesConfig } from './users/routes-config';
import { infoRoutesConfig } from './info/routes-config';
import { portfolioRoutesConfig } from './portfolio/routes-config';

admin.initializeApp(functions.config().firebase);

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: true }));
userRoutesConfig(app);
infoRoutesConfig(app);
portfolioRoutesConfig(app);

export const api = functions.https.onRequest(app);