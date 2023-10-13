import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  transform(src: string, def?: string): unknown {
    if (!def) {
      def = "assets/img/avatar.png"
    }
    if (!src) {
      return def
    }
    return src;
  }

}
