import { Component, VERSION } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import lgRotate from 'lightgallery/plugins/rotate';
import lgShare from 'lightgallery/plugins/share';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom, lgRotate, lgShare, lgFullscreen],
    flipHorizontal: true,
    rotatePluginStrings: {
      flipVertical: 'Flip vertical',
      flipHorizontal: 'Flip horizontal',
      rotateLeft: 'Rotate left',
      rotateRight: 'Rotate right'
    },
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}
