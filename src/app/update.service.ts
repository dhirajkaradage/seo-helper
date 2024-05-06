// update.service.ts
import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(private swUpdate: SwUpdate) { }

  subscribeToUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe((event) => {
        console.log("this is event ", event);
        if (event.type === "VERSION_DETECTED") {
          if (confirm("New version available. Load New Version?")) {
            window.location.reload();
          }
        }
      });
    }
  }

  checkForUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate().then(() => {
        // Handle update check
      });
    }
  }
}
