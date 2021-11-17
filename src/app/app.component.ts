import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'JSONServer';
  journals : object[]=[];
  journalNames : [];
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/Journals').subscribe(data =>{
       this.journals = data;
    })
  }
  save(){
    console.log(this.journalNames);
  }
}
