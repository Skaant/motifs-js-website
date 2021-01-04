import WEBSITE_PAGE from 'motifs-js/_motifs/website-page/website-page.motif.js'
import FOLDER from 'motifs-js/_motifs/folder/folder.motif.js'
import homeTemplate from "../../../_templates/home/home.template.js"
import motifTemplate from '../../../_templates/motif/motif.template.js'

export default (
  scope,
  data,
  options
) => ([
  /** / */
  WEBSITE_PAGE.create(
    homeTemplate,
    data,
    scope,
    options
  ),
  /** /:motif_id */
  ...data.motifs.map(motif =>

    FOLDER.create(
      scope,
      (motif.parents
        ? (motif.parents.join('-')
          + '-')
          
        : '')
        + motif.id,
      folderScope => ([
        /** /articles/ */
        WEBSITE_PAGE.create(
          motifTemplate,
          {
            ...data,
            motif
          },
          folderScope,
          options
        )
      ])
    ))
])