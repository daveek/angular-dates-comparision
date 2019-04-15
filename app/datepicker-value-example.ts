import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Datepicker selected value */
@Component({
  selector: 'datepicker-value-example',
  templateUrl: 'datepicker-value-example.html',
  styleUrls: ['datepicker-value-example.css'],
})
export class DatepickerValueExample {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  result: number = 2;
  parseDate: string;
  stringyDate: string;
  dateDave: Date;

  public  compareDate(date1: Date, date2: Date) {
    // With Date object we can compare dates them using the >, <, <= or >=.
    // The ==, !=, ===, and !== operators require to use date.getTime(),
    // so we need to create a new instance of Date with 'new Date()'
    let d1 = new Date(date1.getTime() + (1000 * 60 * 60 * 24));
    let d2 = new Date(date2);

    // Check if the dates are equal
    let same = d1.getTime() === d2.getTime();
    if (same) {
      console.warn('D1 == D2');
      this.result = 0;
      return;
    }
    // Check if the first is greater than second
    if (d1 > d2) {
      console.warn('D1 > D2');
      console.log('D1: ' + d1);
      this.stringyDate = JSON.stringify(d1);
      console.info('D1.stringy: ' + this.stringyDate);
      this.parseDate = JSON.parse(this.stringyDate);
      console.info('D1.parse: ' + this.parseDate);
      this.dateDave = new Date(this.parseDate);
      console.log('Dave D: ' + this.dateDave);
      this.result = 1;
      return;
    }
    // Check if the first is less than second
    if (d1 < d2) {
      console.warn('D2 > D1');
      console.log('D2: ' + d2);
      this.stringyDate = "2019-04-15T12:30:21.840+02:00";
      console.info('D-BMS.stringy: ' + this.stringyDate);
      /*
      this.parseDate = JSON.parse(this.stringyDate);
      console.info('D-BMS.parse: ' + this.parseDate);
      this.dateDave = new Date(this.parseDate);
      console.log('Dave-BMS D: ' + this.dateDave);
      */
      let FinalDate = new Date(this.stringyDate);
      console.warn(`Final Date: ${FinalDate}`);
      this.result = -1;
      return;
    }
  }


}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */