import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name=''
  welcomeMessageFromService=''

  constructor(private activatedRoute:ActivatedRoute,private service:WelcomeDataService) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params['name'])
    this.name=this.activatedRoute.snapshot.params['name']
  }

  getWelcomeMessage(){
    // console.log("get welcome message")
    this.service.executeHelloWorldBeanService().subscribe(response=>{
      this.handleWelcomeResponse(response);
    },(error)=>{
      console.log("ERROR");
    });
  }

  handleWelcomeResponse(response: HelloWorldBean){
    this.welcomeMessageFromService=response.message;
  }

  getWelcomeMessageWithPathVariable(){
    // console.log("get welcome message")
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(response=>{
      this.handleWelcomeResponse(response);
    },(error)=>{
      console.log("ERROR");
    });
  }

}
