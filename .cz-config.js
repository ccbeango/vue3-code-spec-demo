module.exports = {
  types: [
    { value: 'init', name: 'init:     初始提交' },
    { value: '✨feat', name: '✨feat:          增加新功能' },
    { value: '🐛fix', name: '🐛fix:           修复bug' },
    { value: 'ui', name: 'ui:       更新UI' },
    { value: '📝docs', name: 'docs:          修改文档' },
    { value: '⚡️perf', name: 'perf:          性能优化' },
    { value: '🎉init', name: '🎉init:          初始提交' },
    { value: '➕add', name: 'add:           添加依赖' },
    { value: '🔨build', name: 'build:         打包' },
    { value: '🔧chore', name: 'chore:         更改配置文件' },
    { value: '👷ci', name: 'ci:            CI部署' },
    { value: '🔥del', name: 'del:           删除代码/文件' },
    { value: '♻️refactor', name: 'refactor:      代码重构' },
    { value: '⏪revert', name: 'revert:        版本回退' },
    { value: '🍱style', name: 'style:         样式修改不影响逻辑' },
    { value: '✅test', name: 'test:          增删测试' },
    { value: 'release', name: 'release:  发布' },
    { value: 'deploy', name: 'deploy:   部署' }
  ],
  scopes: [
    { name: 'components' },
    { name: 'utils' },
    { name: 'styles' },
    { name: 'deps' },
    { name: 'other' }
  ],
  messages: {
    type: '选择更改类型:\n',
    // 如果allowcustomscopes为true，则使用
    scope: '选择一个 scope（可选）：\n',
    customScope: '请输入自定义的 scope：',
    subject: '简短描述:\n',
    body: '详细描述. 使用"|"换行:\n',
    breaking: 'Breaking Changes列表:\n',
    footer: '关闭的issues列表. E.g.: #9527, #666:\n',
    confirmCommit: '确认提交?'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix']
}
