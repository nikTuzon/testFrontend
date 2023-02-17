import { Component, OnInit } from '@angular/core';
import { AppsService } from '../apps.service';

@Component({
  selector: 'app-sample-frontend',
  templateUrl: './sample-frontend.component.html',
  styleUrls: ['./sample-frontend.component.css']
})
export class SampleFrontendComponent implements OnInit {
  constructor(private appsService: AppsService){}


  tableData:any;

  ngOnInit(): void {

  }


  getData():void{
    this.appsService.getValue().subscribe(data=>{
        this.tableData = data.data;
        console.log('test');
        console.log(this.tableData);
      }
    );
  }

  btnClick(): void {
    console.log('clicked');
    this.getData();
  }
}
