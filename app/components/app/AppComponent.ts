/**
 * Created by jaboswell on 3/4/16.
 */
import {Component} from '../../../node_modules/angular2/core.d.ts';
import {HeroInterface} from '../../shared/models/HeroInterface.ts';
import {HeroDetailComponent} from '../HeroDetailComponent.ts';



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
    public title: string = "bobs of bob";
    public heros = HEROS;
}

var HEROS: HeroInterface[] = [
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
