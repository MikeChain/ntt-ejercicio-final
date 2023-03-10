import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

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
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
