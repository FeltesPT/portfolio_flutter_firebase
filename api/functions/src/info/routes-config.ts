import { Application } from 'express';
import { set, get, remove } from './controller';
import { isAuthenticated } from "../auth/authenticated";
import { isAuthorized } from "../auth/authorized";

export function infoRoutesConfig(app: Application) {
    // get info
    app.get('/info', [
        get
    ]);
    // adds info
    app.post('/info', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'] }),
        set
    ]);
    // deletes info
    app.delete('/info', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'] }),
        remove
    ]);
}