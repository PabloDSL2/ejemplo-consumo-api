import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api/api.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  peopleArray: any[] = [];
  displayedColumns: string[] = ['name', 'age', 'gender', 'document'];
  selectedPerson= "";
  selectedFile = ""
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllUsers().subscribe(response => {
      this.peopleArray = response.results;
      console.log(this.peopleArray)
    })
  }

  upload(file: any){
    if(file){
      this.selectedFile = file[0].name;
    }
  }

  saveFile(){
    this.peopleArray.forEach(element => {
      if(element.id == this.selectedPerson){
        element.file = this.selectedFile;
      }
    });
  }

}
