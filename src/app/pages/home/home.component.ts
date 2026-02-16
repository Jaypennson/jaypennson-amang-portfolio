import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProjectService } from "../../services/project.service";
import { Project } from "../../models/project.model";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  featuredProjects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.featuredProjects = this.projectService.getFeaturedProjects();
  }
}
