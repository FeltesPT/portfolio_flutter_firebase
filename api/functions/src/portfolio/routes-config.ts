import { Application } from 'express';
import { create, all, get, patch, remove } from './controller';
import { isAuthenticated } from "../auth/authenticated";
import { isAuthorized } from "../auth/authorized";

export function portfolioRoutesConfig(app: Application) {
    // adds project
    app.post('/portfolio', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'] }),
        create
    ]);
    // lists all projects
    app.get('/portfolio', [
        all
    ]);
    // get project :id
    app.get('/portfolio/:id', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
        get
    ]);
    // updates project :id
    app.patch('/portfolio/:id', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
        patch
    ]);
    // deletes project :id
    app.delete('/portfolio/:id', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'] }),
        remove
    ]);
}