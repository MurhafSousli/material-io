The `<carousel>` is a slideshow component for cycling through slides of images, videos, components or any type of HTML content.

The carousel organize content into separate views where only one view can be visible at a time.

<!-- example(ExampleTitleComponent) -->

Add carousel item by add a template with the `carousel-item` directive inside the `carousel`.

```html
<carousel>
  <ng-template carouselItem> Content 1 </ng-template>
  <ng-template carouselItem> Content 2 </ng-template>
  <ng-template carouselItem> Content 3 </ng-template>
</carousel>
```
