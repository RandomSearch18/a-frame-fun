import "aframe"
import "aframe-extras/controls/index.js"
import { renderScene } from "./featuresTo3D"
import { RoadFeature } from "./features"

window.addEventListener("wheel", (event) => {
  const UPPER_BOUND = 20
  const LOWER_BOUND = -0.5

  // small increments for smoother zooming
  const delta = event.deltaY / 120 / 2
  const rigElement = document.querySelector("#rig")!
  const rigPosition = rigElement.getAttribute("position")
  let finalZoom = rigPosition.y + delta
  if (finalZoom < LOWER_BOUND) finalZoom = LOWER_BOUND
  if (finalZoom > UPPER_BOUND) finalZoom = UPPER_BOUND
  rigPosition.y = finalZoom
})

const mapObjectsContainer = document.querySelector("#map-objects")!
renderScene(
  [
    new RoadFeature({
      parts: [
        [
          [0, 0],
          [50, 50],
        ],
        [
          [0, 50],
          [50, 0],
        ],
      ],
    }),
  ],
  [50, 50],
  mapObjectsContainer
)
