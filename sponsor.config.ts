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
      monthlyDollars: 105,
      preset: presets.xl,
    },
  ],
})
