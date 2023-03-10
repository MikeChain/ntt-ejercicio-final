import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./components/contact/contact.component";
import { MainComponent } from "./components/main/main.component";
import { NotFoundComponent } from "./components/notFound/notFound.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", pathMatch: "full", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
