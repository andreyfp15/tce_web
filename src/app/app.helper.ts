import { Injectable } from "@angular/core";

@Injectable()
export class Helper {

    constructor() { };

    static showLoader() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('loading');
    }

    static hideLoader() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('loading');
    }

    static formatDate(param: any) {

        if (param == "0001-01-01T00:00:00") {
            return '';
        }

        var inputDate = new Date(param);
        var formattedDate = inputDate.getFullYear() + '-' + (inputDate.getMonth() + 1).toString().padStart(2, '0') + '-' + (inputDate.getDate()).toString().padStart(2, '0');
        return formattedDate;
    }

}