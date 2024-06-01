import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { AppComponent } from "./app.component";
import { BoldDirective } from "./bold.directive";
import { WhileDirective } from "./while.directive";
import { DataComponent } from "./data.component";
import { LogService } from "./log.service";
import { DataService } from "./data.service";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, DataComponent],
    providers: [DataService, LogService],
    bootstrap: [AppComponent]
})
export class AppModule {}