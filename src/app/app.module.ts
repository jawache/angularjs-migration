import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {UpgradeModule} from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
  ],
  providers: [
    UpgradeModule,
    {provide: '$injector', useFactory: () => window['angular'].injector(['ng'])},
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {}
}

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['codecraft']);
});
