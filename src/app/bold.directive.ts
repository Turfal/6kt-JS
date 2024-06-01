import {Directive, HostListener, Input, HostBinding, input} from '@angular/core';
@Directive({
selector: '[bold]'
})
export class BoldDirective{
    @Input() selectedSize = "18px";
    @Input() defaultSize = "16px";

    private fontSize : string;
    private fontWeight = "normal";
    constructor()
    {
        this.fontSize = this.defaultSize;
    }

    @HostBinding("style.fontSize") get getFontSize()
    {
        return this.fontSize;
    }

    @HostBinding("style.fontWeight") get getFontWeight()
    {
        return this.fontWeight;
    }

    @HostListener("mouseenter") onMouseEnter()
    {
        this.fontWeight = "bold";
        this.fontSize = this.selectedSize;
    }

    @HostListener("mouseleave") onMouseLeave()
    {
        this.fontWeight = "normal";
        this.fontSize = this.defaultSize;
    }
}
