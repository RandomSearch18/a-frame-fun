import "aframe"

window.addEventListener("wheel", (event) => {
  const UPPER_BOUND = 2
  const LOWER_BOUND = 0.1

  // small increments for smoother zooming
  const delta = event.deltaY / 120 / 10
  const cameraElement = document.querySelector("#cam")!
  const cameraData = cameraElement.getAttribute("camera")
  let finalZoom = cameraData.zoom - delta

  if (finalZoom < LOWER_BOUND) finalZoom = LOWER_BOUND
  if (finalZoom > UPPER_BOUND) finalZoom = UPPER_BOUND
  cameraData.zoom = finalZoom
  cameraElement.setAttribute("camera", cameraData)
})
