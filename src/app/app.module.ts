import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from "@angular/common/http";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./components/contact/contact.component";
import { MainComponent } from "./components/main/main.component";
import { NavComponent } from "./components/nav/nav.component";
import { NotFoundComponent } from "./components/notFound/notFound.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    ContactComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
