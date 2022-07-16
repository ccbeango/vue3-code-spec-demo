// // cz-customizable
// // eslint-disable-next-line no-undef
// module.exports = {
//   extends: ['@commitlint/config-conventional', 'cz'],
//   rules: {
//     'body-leading-blank': [1, 'always'],
//     'footer-leading-blank': [1, 'always'],
//     'header-max-length': [2, 'always', 72],
//     'scope-case': [2, 'always', 'lower-case'],
//     'subject-case': [
//       2,
//       'never',
//       ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
//     ],
//     'subject-empty': [0],
//     'subject-full-stop': [2, 'never', '.'],
//     'type-case': [0],
//     'type-empty': [0],
//     'type-enum': [0]
//   }
// }

// git-cz校验配置
// eslint-disable-next-line no-undef
module.exports = {
  extends: ['@commitlint/config-conventional']
  // rules: {
  //   // Header
  //   'header-max-length': [2, 'always', 64],
  //   // <type>枚举
  //   'type-enum': [
  //     2,
  //     'always',
  //     [
  //       'test',
  //       'feat',
  //       'fix',
  //       'chore',
  //       'docs',
  //       'refactor',
  //       'style',
  //       'ci',
  //       'perf'
  //     ]
  //   ],
  //   // <type> 不能为空
  //   'type-empty': [2, 'never'],
  //   // <type> 格式 小写
  //   'type-case': [2, 'always', 'lower-case'],
  //   // <scope> 不能为空
  //   'scope-empty': [2, 'never'],
  //   // <scope> 格式 小写
  //   'scope-case': [2, 'always', 'lower-case'],
  //   // <subject> 不能为空
  //   'subject-empty': [2, 'never'],
  //   // <subject> 以.为结束标志
  //   // 'subject-full-stop': [2, 'never', '.'],
  //   // <subject> 格式
  //   // 可选值
  //   // 'lower-case' 小写 lowercase
  //   // 'upper-case' 大写 UPPERCASE
  //   // 'camel-case' 小驼峰 camelCase
  //   // 'kebab-case' 短横线 kebab-case
  //   // 'pascal-case' 大驼峰 PascalCase
  //   // 'sentence-case' 首字母大写 Sentence case
  //   // 'snake-case' 下划线 snake_case
  //   // 'start-case' 所有首字母大写 start-case
  //   'subject-case': [
  //     2,
  //     'never',
  //     ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
  //   ]
  //   // <body> 以空行开头
  //   // 'body-leading-blank': [1, 'always'],
  //   // <footer> 以空行开头
  //   // 'footer-leading-blank': [1, 'always']
  // }
}
