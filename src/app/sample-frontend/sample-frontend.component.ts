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
  ngOnInit(): void {}


  // uses the function created in the service to get the data
  getData():void{
    this.appsService.getValue().subscribe(data=>{
        //I tend to use status codes for easier debugging
        if(data.status === 1)
        {
          this.tableData = data.data;
        }
        else
        {
          console.log('error fetching data');
        }        
      }
    );
  }

  btnClick(): void {
    this.tableData = [];
    this.getData();
  }
}
