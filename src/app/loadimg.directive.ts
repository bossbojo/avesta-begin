import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appLoadimg]'
})
export class LoadimgDirective implements OnInit {
  @Input() src: string;
  re: HTMLImageElement;
  constructor(public ele: ElementRef) {
    console.log(this.ele);
    this.re = this.ele.nativeElement;
  }
  ngOnInit() {
    this.re.src = 'assets/loading.gif';
    if (this.src) {
      this.onCheckHave(this.src);
    }
  }
  onCheckHave(src) {
    const img = new Image();
    img.src = src;
    img.onload = (e) => {
      setTimeout(() => {
        this.re.src = src;
      }, 1000);
    };
    img.onerror = () => {

      this.re.src = 'assets/onimage.png';
    }
  }
}
