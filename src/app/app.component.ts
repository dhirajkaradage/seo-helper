import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { UpdateService } from "./update.service";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "sidebar";

  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor(
    private swUpdate: SwUpdate,
    private updateService: UpdateService
  ) {}

  // ngOnInit() {
  //   setInterval(() => {
  //     console.log("checking new version after 10 seconds");
  //     this.checkForUpdates();
  //   }, 10000);
  // }

  // checkForUpdates() {
  //   if (this.swUpdate.isEnabled) {
  //     this.swUpdate.checkForUpdate().then(() => {
  //       // Handle update check

  //       this.swUpdate.versionUpdates.subscribe((event) => {
  //         console.log("this is event ", event);
  //         if (event.type === "VERSION_DETECTED") {
  //           if (confirm("New version available. Load New Version?")) {
  //             window.location.reload();
  //           }
  //         }
  //       });
  //     });
  //   }
  // }

  // ngOnInit() {
  //   // Subscribe to versionUpdates once, when the component initializes
  //   this.swUpdate.versionUpdates.subscribe((event) => {
  //     console.log("this is event ", event);
  //     if (event.type === "VERSION_DETECTED") {
  //       if (confirm("New version available. Load New Version?")) {
  //         window.location.reload();
  //       }
  //     }
  //   });

  //   // Start checking for updates every 10 seconds
  //   setInterval(() => {
  //     console.log("checking new version after 10 seconds");
  //     this.checkForUpdates();
  //   }, 10000);
  // }

  // checkForUpdates() {
  //   if (this.swUpdate.isEnabled) {
  //     this.swUpdate.checkForUpdate().then((event) => {
  //       console.log("this is event ", event);

  //       // Handle update check
  //     });
  //   }
  // }

  ngOnInit() {
    this.updateService.subscribeToUpdates();
    setInterval(() => {
      console.log("checking new version after 10 seconds");
      this.updateService.checkForUpdates();
    }, 10000);
  }

  onToggleSideNav(data: SideNavToggle) {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
