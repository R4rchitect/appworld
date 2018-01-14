import {Component} from '@angular/core';


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
    
    public home:string ='Home';
    public history:string = 'History'
}
