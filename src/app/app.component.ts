import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  VERSION,
  ViewChild
} from "@angular/core";
import {
  CdkDragStart,
  CdkDragMove,
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  @ViewChild("imageDrop") imageDrop: ElementRef;
  angle = 0;
  sourceImages = [];
  images = [];
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit() {

    this.sourceImages.push(
      "https://www.gravatar.com/avatar/0ca4c6bc08e59c34de7fc39e09de8dbe?s=32&amp;d=identicon&amp;r=PG",
    );
    this.sourceImages.push(
      "https://lh3.googleusercontent.com/ogw/ADGmqu_3g84FwOJfcMF4Iurwlwcmgb8JHmNfZfYkbd2q=s32-c-mo"
    );
  }

  itemDropped(event:any) {
    console.log(this.sourceImages[0]);    

    this.images.push(this.sourceImages[event.previousIndex]);

    console.log(this.images)
    //  let image = new Image();
    //   image.src = "https://www.gravatar.com/avatar/0ca4c6bc08e59c34de7fc39e09de8dbe?s=32&amp;d=identicon&amp;r=PG";
    //      image.width = 50;

    //  const div = this.renderer.createElement('div');
    //  this.renderer.addClass(div, 'example-box');
    //  this.renderer.setAttribute(div,'cdkDragBoundary','.example-boundary')
    //  this.renderer.setAttribute(div,'cdkDrag','')

    // div.appendChild(image);
    // this.imageDrop.nativeElement.appendChild(div);
  }

  rotateRight(index){     
    this.angle = this.angle + 90;    
     this.renderer.setStyle(document.getElementById(index), 'transform', `rotate(${this.angle}deg)`);
     
  } 
rotateLeft(index){   
    this.angle = this.angle - 90;
     this.renderer.setStyle(document.getElementById(index), 'transform', `rotate(${this.angle}deg)`);     

  }

  delete(index){
      this.images.splice(index, 1);

  }
}
