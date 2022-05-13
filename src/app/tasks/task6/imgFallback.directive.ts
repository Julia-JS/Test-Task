import {Directive, ElementRef, OnInit} from '@angular/core';

const placeholderURL = 'https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg';

@Directive({
  selector: '[appImgFallback]'
})

export class ImgFallbackDirective implements OnInit {
  constructor(private eleRef: ElementRef) {}

  ngOnInit(): void {
    this.eleRef.nativeElement.onerror = () => {
      this.eleRef.nativeElement.src = placeholderURL;
    };
  }
}
