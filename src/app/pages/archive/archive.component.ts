import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProjectService } from "../../services/project.service";
import { Project } from "../../models/project.model";

@Component({
  selector: "app-archive",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./archive.component.html",
  styleUrls: ["./archive.component.css"],
})
export class ArchiveComponent implements OnInit {
  allProjects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.allProjects = this.projectService.getAllProjects();
  }
}
