import "aframe"
import "aframe-extras/controls/index.js"
import { renderScene } from "./featuresTo3D"
import { RoadFeature } from "./features"
import { THREE } from "aframe"

declare global {
  interface Window {
    THREE: typeof THREE
  }
}

window.addEventListener("wheel", (event) => {
  const UPPER_BOUND = 100
  const LOWER_BOUND = -1.8 + 0.01

  const scrollDelta = event.deltaY / 120 / 2
  const rigElement = document.querySelector("#rig")!
  const rigPosition = rigElement.getAttribute("position")
  const heightDelta = scrollDelta * Math.max(1, Math.abs(rigPosition.y / 3))
  let finalHeight = rigPosition.y + heightDelta
  if (finalHeight < LOWER_BOUND) finalHeight = LOWER_BOUND
  if (finalHeight > UPPER_BOUND) finalHeight = UPPER_BOUND
  rigPosition.y = finalHeight

  // Ensure player speed makes sense in relation to perceived "zoom" level
  rigElement.getAttribute("movement-controls").speed = Math.max(
    0.01,
    Math.abs(finalHeight / 10)
  )
})

const mapObjectsContainer = document.querySelector("#map-objects")!
renderScene(
  [
    new RoadFeature({
      parts: [
        [
          [0, -20],
          [0, 20],
        ],
        [
          [0, 20],
          [-20, 20],
        ],
        [
          [-20, 20],
          [-20, -20],
        ],
        [
          [-20, -20],
          [0, -20],
        ],
      ],
    }),
    new RoadFeature({
      parts: [
        [
          [0, -24],
          [20, 20],
        ],
        [
          [20, 20],
          [20, -24],
        ],
      ],
    }),
  ],
  [50, 50],
  mapObjectsContainer
)
