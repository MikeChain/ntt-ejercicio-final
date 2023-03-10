import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { NotFoundComponent } from "./components/notFound/notFound.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  {
    path: "contact",
    loadChildren: () =>
      import("./contact-form-module/contact-form.module").then(
        (m) => m.ContactFormModuleModule
      ),
  },
  { path: "**", pathMatch: "full", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
