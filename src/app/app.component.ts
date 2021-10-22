import {Component, OnInit} from '@angular/core';
import moment from "moment";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    readonly VALTHO_DATE: string = "2022-01-15T09:00:00";

    months: number = 0;
    days: number = 0;
    hours: number = 0;
    minutes: number = 0;
    seconds: number = 0;

    ngOnInit() {
        this.getTimeRemaining();
        setInterval(() => this.getTimeRemaining(), 1000);
    }

    getTimeRemaining() {
        const total = Date.parse(this.VALTHO_DATE) - new Date().getTime();
        this.seconds = Math.floor((total / 1000) % 60);
        this.minutes = Math.floor((total / 1000 / 60) % 60);
        this.hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        this.days = Math.floor(total / (1000 * 60 * 60 * 24) % 30);
        this.months = Math.floor(total / (1000 * 60 * 60 * 24 * 30));
    }

    isPassed(): boolean {
        return moment(this.VALTHO_DATE).isBefore(moment());
    }
}
