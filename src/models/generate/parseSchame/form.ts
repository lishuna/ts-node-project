import { ISchema } from '@formily/json-schema'
import { IFormItemType, IFormItem } from '../../../types/qm-react-design'
import { IPraseContent } from '../../../types/qm-react-design'

// 输入属性类型转换
enum FormItemTypeEnum{
  'INPUT' = 'INPUT',
  'TEXTAREA' = 'TEXT_AREA'
}

/**
 * 解析form的schema，生成页面模板片段、js片段、引入包片段
 * @param {*} schema
 * @returns  object = {template, js, importContent}
 */
export function createForm(schema: ISchema): IPraseContent {
  let initValue: [] = [], items: Array<IFormItem> = [], formProps = {}
  const properties = getProperties(schema.properties)
  formProps = schema['x-component-props']
  console.log('properties: ', properties)
  if(!properties.length){
    return {
      template: '',
      js: '',
      importContent: ''
    }
  }
  const listItems: Array<ISchema> = getProperties(properties)
  listItems.forEach((formGrid: ISchema) => {
    if(formGrid['x-component'] === 'FormGrid'){
      const gridArr = getProperties(formGrid.properties??{})
      const _length = gridArr.filter(item => !!item.properties).length
      gridArr?.forEach( (grid: ISchema) => {
        const cType = grid['x-component']
        if(cType === 'FormGrid.GridColumn'){
          const columns = getProperties(grid.properties)
          console.log('columns: ', columns)
          columns.forEach(column => {
            const res = addItem(column, gridArr.length / _length)
            items.push(res)
          })
        }else {
          items.push(addItem(grid, 1))
        }
      })
    }
  })
  const jsContent = `
    const formItems = ${JSON.stringify(items)}
    const initValue = ${JSON.stringify(initValue || {})}
    const formProps = ${JSON.stringify(formProps || {})}
  `
  const htmlTemplate = `
      <QmForm formType="default" items={formItems} initialValues={initValue} {...formProps}></QmForm>
  `
  return {
    template: htmlTemplate,
    js: jsContent,
    importContent: `
      import { QmForm, QmFormItem } from '@jiaozhiye/qm-design-react';
    `
  }
}


/**
 * 组装form item
 * @param {*} data  输入schema
 * @param {*} colNum 自身占列数
 * @returns 返回item的组装
 */
 const addItem = (data: ISchema, colNum: number): IFormItem => {
  const component: ISchema = <ISchema>data
  const componentType = component['x-component']
  if(FormItemTypeEnum[componentType.toUpperCase()]){
    return {
      type: FormItemTypeEnum[componentType.toUpperCase()],
      label: component.title,
      fieldName: (component.name as string)?? '',
      selfCol: colNum
    }
  }
}
const getProperties = (obj): Array<ISchema> => {
  return obj? Object.values(obj) : []
}

