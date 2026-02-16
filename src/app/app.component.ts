import { Component } from "@angular/core";
import { RouterOutlet, Router, NavigationEnd } from "@angular/router";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { CommonModule } from "@angular/common";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, CommonModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showSidebar = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showSidebar = event.url === "/";
      });
  }
}
