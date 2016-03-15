import {Component} from 'angular2/core';
import {HeroDetailComponent} from '../heroDetail/HeroDetailComponent'
import {HeroInterface} from '../../shared/models/HeroInterface.ts';

@Component({
    selector: 'my-app',
    template: `
    <h1>My {{title}} App</h1>
    <div>
        My Heros
        <ul>
            <li *ngFor="#hero of heros">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
    </div>
    `
})
export class AppComponent {
    public title = "Sweet Angular";
    public heros: HeroInterface[] = [
        { "id": 11, "name": "Mr. Nice" },
        { "id": 12, "name": "Narco" },
        { "id": 13, "name": "Bombasto" },
        { "id": 14, "name": "Celeritas" },
        { "id": 15, "name": "Magneta" },
        { "id": 16, "name": "RubberMan" },
        { "id": 17, "name": "Dynama" },
        { "id": 18, "name": "Dr IQ" },
        { "id": 19, "name": "Magma" },
        { "id": 20, "name": "Tornado" }
    ];
}
