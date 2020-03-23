import { Application } from 'express';
import { create, all, get, patch, remove, reorder } from './controller';
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
        isAuthorized({ hasRole: ['admin', 'manager'] }),
        get
    ]);
    // updates project :id
    app.patch('/portfolio/:id', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'] }),
        patch
    ]);
    // deletes project :id
    app.delete('/portfolio/:id', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'] }),
        remove
    ]);
    // reorder projects
    app.put('/portfolio/reorder', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'] }),
        reorder
    ]);
}