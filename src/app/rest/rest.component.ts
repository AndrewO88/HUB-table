import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest.service';
import {FormControl} from '@angular/forms';
import {Schema, Tables} from '../interface';


@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {

  constructor(public rs: RestService) {
  }
  schema: Schema | undefined;
  tables: [Tables] | undefined;
  select = new FormControl();
  dataSource: any;
  displayedColumns: string[] | undefined;
  columnsToDisplay: string[] | undefined;


  ngOnInit(): void {
    this.rs.getScheme().subscribe((response) => {
      this.schema = response;
      this.tables = this.schema?.Tables;
    });
  }

  addTable(uid: string): void {
    this.rs.getTable(uid).subscribe((response) => {
      this.displayedColumns = Object.keys(response[0]);
      this.dataSource = response;
      this.columnsToDisplay = this.displayedColumns;
    });
  }
}
