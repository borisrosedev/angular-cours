import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Directive({
  selector: '[appTitleStyle]'
})
export class TitleStyleDirective {
  @Input() chosenColor = ''
  chosenColorSubject:BehaviorSubject<string> = new BehaviorSubject<string>('')
  chosenColor$ = this.chosenColorSubject.asObservable()
  colorSubscription!:Subscription

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.chosenColor ? this.chosenColor : 'white');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.textDecoration = 'underline';
    this.el.nativeElement.style.transition = 'all 500ms ease-in-out'
  }

  ngOnInit(){
    this.colorSubscription = this.chosenColor$.subscribe((data) => {
      console.log('color =', data)
    })
  }

  ngOnDestroy(){
    this.colorSubscription.unsubscribe()
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
    
  }

}
