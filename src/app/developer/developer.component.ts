import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';


@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  
  public skills: Skill[] = [ 
    new Skill("Javascript", 'JS', "Javascript.js"),
    new Skill("Angular", "NG", "Angular.ts")
  ]

  public developer: Developer[] = [
    new Developer("PN-TH", "Thomas", "28", "M", "...", this.skills)
  ]

  constructor() { }

  ngOnInit() {
  }

}
