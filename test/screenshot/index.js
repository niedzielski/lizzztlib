const viewports = [{w: 160, h: 144}, {w: 320, h: 240}, {w: 480, h: 320},
  {w: 640, h: 480}, {w: 1024, h: 768}]

gemini.suite('zzz-card', suite => {
  suite
    .setUrl('zzz-card.htm')
    .setCaptureElements('body')

  viewports.forEach(viewport => {
    suite
      .capture(viewport.w + 'x' + viewport.h, (actions, find) => {
        actions.setWindowSize(viewport.w, viewport.h)
      })
  })
})