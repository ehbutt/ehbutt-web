#**Lab 3 – 3D Mapping: BC Landslides**

Andrew Butt – 46819141

GEOB 472 – Research in Cartography 

Luke Bergmann 

*March 27th, 2019*


The purpose of this map ([BC Landslides](https://labthree.glitch.me/)) is to visualize historical British Columbia landslide locations in an immersive 3D medium. While it can be helpful to visualize physical geographical phenomena on a 2D map, upgrading to 3D can allow for more nuanced form of visualization and analysis. This visualization is primarily designed for the government of BC or any researcher or development company interested in the locations of landslides in the area around Vancouver, Squamish, and Whistler. This area of interest was chosen as it proved to be the most interesting area for analysis and visualization of landslides in BC due to the amount of landslide data and where it was located throughout the rest of the province. As well, it is topographically complex. The visualization is quite successful in showing the 3D spatial geography of landslides in the area, however it admittedly does not provide very much context or data beyond the locations. It is therefore a very preliminary map, more for interest and visualization than analysis at this point. 

The map was designed using QGIS and the qGIS2threejs extension. By being able to visualize the locations in 3D, one can get a better sense of where landslides are occurring and start to generate questions of why. It is interesting to see that landslides are not occurring very high in the mountains, and most often follow valleys. This has important implications for planning and safety if there are towns or roads in these valleys. The main cartographic design was in choosing the symbology of the landslides, which were shown in red as it is easy to see. The map is designed to be fairly basic, as it is more about the user engaging the 3D aspect of the data. It is meant to spark questions and perhaps generate some answers to them. 

 Here is a screenshot of an example of a valley with landslides occurring along it:

![alt text](https://ehbutt.github.io/ehbutt-web/landslides.png)


While the map may not look all that fancy and interesting, it did take a significant amount of work to accomplish, and I am fairly proud of the outcome in the end. I ran into several obstacles that had to be overcome, such as acquiring, cleaning, and cropping the landslide and DEM data to fit the area of interest and loading it into A-Frame so that it can be accessed in Virtual Reality. It would not load as a .glb so I eventually tried as a .gltf and it worked. Nonetheless, there are many stylization components that would significantly improve my map. First, it would be great to add a satellite image on top of the DEM to give more context of the area and also the land features that exist there. This is particularly important for landslides since vegetation and soil type play a large role in determining whether they will occur or not. Additionally, I added a flag location of Vancouver, however it would be nice to tell where other major areas are, such as the Sea to Sky Highway, Whistler, and so on. However, I found it very difficult to find/parse together satellite images of the area in decent resolution and georeferenced. This is something I know I could have figured out but I simply ran out of time. Second, making the surroundings something other than a white background. Perhaps adding an image that is plain yet pleasing would make the map look nicer. Third, data accompanying the landslide locations. When exporting my map to the web from QGIS, I was able to have the data appear upon a click, so that you can have information on the location, date, size, type, and more. This would be useful data to somehow include in the immersive 3D map. A version of the map that is non-immersive but still 3D that includes this data is available here ([here](https://ehbutt.github.io/ehbutt-web/lab3/lab3)). Finally, a legend and north arrow would help the user understand and read this map with ease, despite the fact that it is not very complicated. Overall, this map proved to be more difficult than I anticipated, however staying persistent allowed me to complete it, and I believe I have gained some very useful skills in the process.

