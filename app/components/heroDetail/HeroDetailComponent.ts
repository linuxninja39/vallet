import {Component,View} from 'angular2/core';
import {HeroInterface} from '../../shared/models/HeroInterface';

@Component({
    selector: 'hero-detail'
})
@View({
    templateUrl: 'app/components/heroDetail/heroDetail.html'
})
export class HeroDetailComponent {
    private hero: HeroInterface;
}
