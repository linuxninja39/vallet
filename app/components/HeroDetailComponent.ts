/**
 * Created by jaboswell on 3/9/16.
 */


import {Component} from '../../node_modules/angular2/core.d';
import {HeroInterface} from '../shared/models/HeroInterface.ts';

@Component({
    selector: 'my-hero-detail',
    template: `
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
export class HeroDetailComponent {
    private hero: HeroInterface;
}
