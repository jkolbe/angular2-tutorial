import { Directive, ElementRef, Input, OnChanges, SimpleChange, HostListener } from '@angular/core';

@Directive({
	selector: '[expendHighlight]'
})

export class ExpendHighlightDirective implements OnChanges {
	element: ElementRef
	
	@Input("expendHighlight") isExpanded:boolean

	constructor(el: ElementRef){
		this.element = el;
	}

	ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
		this.element.nativeElement.style.backgroundColor = this.isExpanded ? "#cfcfcf" : null
	}

	@HostListener('mouseenter')
	onMouseEnter(){
		if(this.isExpanded){
			this.element.nativeElement.style.border = "thin solid black";
		}
	}

	@HostListener('mouseleave')
	onMouseLeave(){
		if(this.isExpanded){
			this.element.nativeElement.style.border = null ;
		}
	}
}