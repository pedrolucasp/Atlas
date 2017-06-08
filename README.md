# Atlas
AngularJS components for 🗺

A set of customizable Google Maps components built from the best ideas and concepts of other fine maps libs.
Compatible with any version above AngularJS 1.5.5, as this version introduces the component feature and all it's glory.

## Why? :anguished:

Well, today we have only two good and well tested libs to handle all the hassle to create maps on angular 1.5.x apps, being [angular-google-maps](https://github.com/angular-ui/angular-google-maps) and the element-based library [ng-maps](https://github.com/allenhwkim/angularjs-google-maps).

The first was the most complete and very customizable, but had a bunch of problems with their architecture,  and being __very poor documented__ and _is no longer maintained_. The second, takes a much more simplistic approach, but fails when you have a _maps driven_ application, where you need to keep changing map, markers or polygons props. The objective of __Atlas__ is to be a mix of both worlds. Using a component-based architecture and listen for changes on the bindings that receive, so it deliver a very _simple, easy and operational_ library. 

## License :hammer:
Copyright (c) 2017 Pedro Lucas Porcellis  
Licensed under the MIT license.
