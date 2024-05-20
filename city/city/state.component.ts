import { Component } from "@angular/core";

@Component({
    selector:'state-comp',
    templateUrl:'./state.component.html',
    styles:['h2{color:blue}']
})
export class StateComponent{
    state:string="MAHARASHTRA";
    stateinfo:string="Maharashtra is one of the most popular state in India.It is famous for variety of domains like Agriculture,IT,Scientific innovations and Film Industry.It is only in Maharashtra where there is diversity in unity.You will get all sort of variety in food,culture and business.";
}