import websitePageMotif from 'motifs-js/_motifs/website-page/website-page.motif.js'
import websiteFolderMotif from 'motifs-js/_motifs/website-folder/website-folder.motif.js'
import homeTemplate from "../../../_templates/home/home.template.js"
import motifTemplate from '../../../_templates/motif/motif.template.js'

export default (
  data,
  options
) => ({
  '': websitePageMotif.shape(
    homeTemplate,
    data
  ),
  'motifs': websiteFolderMotif.shape(
    data.motifs.reduce(
      (acc, motif) => ({
        ...acc,
        [motif.id]: websitePageMotif.shape(
          motifTemplate,
          {
            ...data,
            motif
          }
        )
      }),
      {}
    )
  )
})