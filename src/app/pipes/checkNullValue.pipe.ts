import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkNullValue'
})
export class CheckNullValuePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value;
    }
    return 'ไม่มีค่าเลย';
  }

}
