import {Component, OnInit} from "@angular/core";
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

import {TaskListComponent} from "./todo/components/task-list.component";
import {AboutComponent} from "./about/components/about.components";

@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    directives: [TaskListComponent, AboutComponent, RouterLink, ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: 'tasks', component: TaskListComponent, name: 'Task' },
  { path: 'about', component: AboutComponent, name: 'About' }
])
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}
