import websitePageMotif from 'motifs-js/_motifs/website-page/website-page.motif.js'
import websiteFolderMotif from 'motifs-js/_motifs/website-folder/website-folder.motif.js'
import homeTemplate from "../../../_templates/home/home.template.js"
import motifTemplate from '../../../_templates/motif/motif.template.js'
import articlesListTemplate from '../../../_templates/articlesList/articlesList.template.js'
import articleTemplate from '../../../_templates/article/article.template.js'

export default (
  data,
  options
) => ({
  '': websitePageMotif.shape(
    homeTemplate,
    data
  ),
  'releases': websiteFolderMotif.shape({
    '': websitePageMotif.shape(
      articlesListTemplate,
      data
    ),
    ...data.articles.reduce(
      (acc, article, index) => ({
        ...acc,
        [index + 1]: websitePageMotif.shape(
          articleTemplate,
          {
            ...data,
            article: {
              index: index + 1,
              ...article
            }
          }
        )
      }),
      {}
    )
  }),
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