import { defineConfig, presets } from 'sponsorkit'
import { readFileSync } from 'fs'
import path from 'path'

const YUQIAO_LOGO = (width: number, y: number) =>
  readFileSync(path.resolve(__dirname, './logo/语核科技.svg'), 'utf-8')
    .replace('${x}', String((width - 273) / 2))
    .replace('${y}', String(y))

export default defineConfig({
  // includePrivate: true,
  providers: ['afdian'],
  tiers: [
    {
      title: '白金之星',
      preset: presets.xs,
    },
    {
      title: '疯狂钻石',
      monthlyDollars: 2.5,  //￥16.66
      preset: presets.small,
      // to replace the entire tier rendering
      // compose: (composer, tierSponsors, config) => {
      //   composer.addRaw(
      //     '<-- custom svg -->',
      //   )
      // },
    },
    {
      title: '黄金体验',
      monthlyDollars: 5.6,  //￥36.66
      preset: presets.base,
      // to insert custom elements after the tier block
      // composeAfter: (composer, _tierSponsors, _config) => {
      //   composer.addSpan(10)
      // },
    },
    {
      title: '爱之列车',
      monthlyDollars: 10, //￥66.66
      preset: presets.medium,
    },
    {
      title: '华丽挚爱',
      monthlyDollars: 25.6,//￥166.66
      preset: presets.large,
    },
    {
      title: '奇跡の愛',
      monthlyDollars: 41,//￥266.66
      preset: presets.xl,
    },
    {
      title: '奇迹于你',
      monthlyDollars: Infinity,
      composeAfter(compose, _, config) {
        if (
          config.filter?.({ monthlyDollars: Infinity } as any, []) !== false
        ) {
          compose
            .addSpan(20)
            .addText('奇迹于你', 'sponsorkit-tier-title')
            .addSpan(10)
            .addRaw(YUQIAO_LOGO(config.width!, compose.height))
            .addSpan(100)
        }
      },
    },
  ],
})
