import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  filescount=9;
  foldercount=3;
  constructor() { }

  ngOnInit(): void {
  }

}
