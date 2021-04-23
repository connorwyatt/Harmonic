import path from 'path'
import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

initStoryshots({
  suite: 'Visual Test',
  test: imageSnapshot({
    storybookUrl: `file://${path.resolve(__dirname, '../storybook-static')}`,
    getMatchOptions: () => ({
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    }),
  }),
})
