import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { RetreatComponent } from "./pages/retreat/retreat.component";
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FaqComponent } from "./components/faq/faq.component";
import { WorshipComponent } from "./pages/worship/worship.component";

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "retreat",
    component: RetreatComponent
  },
  {
    path: "worship",
    component: WorshipComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RetreatComponent,
    HomeComponent,
    HeaderComponent,
    HeroComponent,
    FaqComponent,
    WorshipComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
