import {Component} from '../../../node_modules/angular2/core.d';
import {HeroInterface} from '../../shared/models/HeroInterface';

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
