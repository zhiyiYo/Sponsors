import { defineConfig, presets } from 'sponsorkit'

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
      title: '君の奇跡の愛',
      monthlyDollars: 41,//￥166.66
      preset: presets.xl,
    },
  ],
})
