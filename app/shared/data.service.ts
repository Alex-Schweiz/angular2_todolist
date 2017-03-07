import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
    createDb() {
        const todos = [
            {
                id: 1,
                title: 'Learn JavaScript',
                completed: true
            },
            {
                id: 2,
                title: 'Learn Angular 2',
                completed: true
            },
            {
                id: 3,
                title: 'Write Angular 2 app',
                completed: false
            }
        ];

        return { todos };
    }
}