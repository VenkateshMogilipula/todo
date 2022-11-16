import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name=''

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params['name'])
    this.name=this.activatedRoute.snapshot.params['name']
  }

}
