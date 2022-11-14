import { Component } from "@angular/core";

@Component ({
    selector: 'demo',
    template: '<h2>This is Demo {{ title }}</h2>'
})

export class AppDemo {
    title = "Application"
}