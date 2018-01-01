import { InjectionToken } from "@angular/core";

export const Toaster = new InjectionToken("Toaster");

export function toasterServiceFactory(i: any) {
  return i.get('toaster');
}

export const toasterServiceProvider = {
  provide: Toaster,
  useFactory: toasterServiceFactory,
  deps: ['$injector']
};