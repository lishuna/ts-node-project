
/**
 * jsx模板
 * @param {*} name 文件名称
 * @param {*} htmlContent 页面模板片段
 * @param {*} jsContent js片段
 * @param {*} importContent 引入片段
 * @param {*} styleContent  样式片段
 * @returns
 */
type IParams = {
  name: string,
  template?: string,
  js?: string,
  importContent?: string,
  styleContent?: string
}

export const createPage = (config: IParams): string => `
  import React from 'react';
  ${config.importContent}

  export const ${config.name} = (props) => {
    ${config.js}

    return (
      <div className="page">${config.template}</div>
    )
  }
  export default ${config.name}
`
