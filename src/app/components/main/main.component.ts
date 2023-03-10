import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { movie } from "src/app/interfaces/movie";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ["title", "year", "cast", "genres"];
  dataSource = new MatTableDataSource<movie>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _movieService: MoviesService) {}

  ngOnInit(): void {
    this.onGetMovies();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onGetMovies(): void {
    this._movieService.getData().subscribe((data) => {
      this.dataSource = new MatTableDataSource<movie>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, console.error);
  }
}
