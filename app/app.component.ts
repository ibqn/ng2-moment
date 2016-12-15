import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
    today:string;
    locale:string;
    locales = [
        { name: 'english', lang: 'en' },
        { name: 'russian', lang: 'ru' },
        { name: 'german' , lang: 'de' },
    ];

    toggleLocale(locale?: string) {
        this.locale = locale || this.locale || 'en';
        moment.locale(this.locale);
        this.today = moment().format('dddd, MMMM Do YYYY, HH:mm:ss');
    }

    isLocale(locale: string):boolean {
      return locale === this.locale;
    }

    ngOnInit() {
        this.toggleLocale();
        setInterval(() => this.toggleLocale(), 500);
    }
}