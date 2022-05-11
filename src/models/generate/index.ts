import { createForm } from './parseSchame/form';
import { createPage } from './template/page';
import fs from "fs";
import { ISchema } from '@formily/json-schema';
import config from '../../config'

const pageSchema =
{
  "form": {
    "labelCol": 6,
    "wrapperCol": 12
  },
  "schema": {
    "type": "object",
    "properties": {
      "szz3sqqb31f": {
        "type": "void",
        "title": "基础表单",
        "x-component": "BaseForm",
        "x-component-props": {
          "style": {
            "width": "1000px"
          },
          "layout": "vertical",
          "labelWidth": "120px",
          "labelAlign": "left",
          "size": "large"
        },
        "x-designable-id": "szz3sqqb31f",
        "x-index": 0,
        "properties": {
          "dy7tp7wbsqw": {
            "type": "void",
            "x-component": "FormGrid",
            "maxColumns": 2,
            "x-designable-id": "dy7tp7wbsqw",
            "x-index": 0,
            "properties": {
              "bvq6rmmfhgw": {
                "type": "void",
                "x-component": "FormGrid.GridColumn",
                "x-designable-id": "bvq6rmmfhgw",
                "x-index": 0,
                "properties": {
                  "gm2inm3z7sc": {
                    "title": "输入框",
                    "type": "string",
                    "x-decorator": "FormItem",
                    "x-component": "Input",
                    "x-component-props": {
                      "placeholder": "请输入...",
                      "bordered": true,
                      "maxLength": 100
                    },
                    "x-validator": [],
                    "x-decorator-props": {},
                    "x-designable-id": "gm2inm3z7sc",
                    "x-index": 0
                  }
                }
              },
              "4pnyv5ejamd": {
                "type": "void",
                "x-component": "FormGrid.GridColumn",
                "x-designable-id": "4pnyv5ejamd",
                "x-index": 1,
                "properties": {
                  "dqkid6qo5mu": {
                    "title": "输入框",
                    "type": "string",
                    "x-decorator": "FormItem",
                    "x-component": "Input",
                    "x-component-props": {
                      "placeholder": "请输入..."
                    },
                    "x-validator": [],
                    "x-decorator-props": {},
                    "x-designable-id": "dqkid6qo5mu",
                    "x-index": 0
                  }
                }
              },
              "awrybgnsyc2": {
                "type": "void",
                "x-component": "FormGrid.GridColumn",
                "x-designable-id": "awrybgnsyc2",
                "x-index": 2
              },
              "lfh50l48k69": {
                "type": "void",
                "x-component": "FormGrid.GridColumn",
                "x-designable-id": "lfh50l48k69",
                "x-index": 3
              }
            }
          },
          "7zcvt7vcx1b": {
            "type": "void",
            "x-component": "FormGrid",
            "x-designable-id": "7zcvt7vcx1b",
            "x-index": 1,
            "properties": {
              "gb97yr6hdbs": {
                "type": "void",
                "x-component": "FormGrid.GridColumn",
                "x-designable-id": "gb97yr6hdbs",
                "x-index": 0,
                "properties": {
                  "o8tcqxhf0pi": {
                    "title": "输入框",
                    "type": "string",
                    "x-decorator": "FormItem",
                    "x-component": "Input",
                    "x-component-props": {
                      "placeholder": "请输入..."
                    },
                    "x-validator": [],
                    "x-decorator-props": {},
                    "x-designable-id": "o8tcqxhf0pi",
                    "x-index": 0
                  }
                }
              },
              "v917ycwc5v8": {
                "type": "void",
                "x-component": "FormGrid.GridColumn",
                "x-designable-id": "v917ycwc5v8",
                "x-index": 1,
                "properties": {
                  "ar98nf7pjdm": {
                    "title": "输入框",
                    "type": "string",
                    "x-decorator": "FormItem",
                    "x-component": "Input",
                    "x-component-props": {
                      "placeholder": "请输入..."
                    },
                    "x-validator": [],
                    "x-decorator-props": {},
                    "x-designable-id": "ar98nf7pjdm",
                    "x-index": 0
                  }
                }
              },
              "0m9ib893hm6": {
                "type": "void",
                "x-component": "FormGrid.GridColumn",
                "x-designable-id": "0m9ib893hm6",
                "x-index": 2,
                "properties": {
                  "ekjay238la0": {
                    "title": "输入框",
                    "type": "string",
                    "x-decorator": "FormItem",
                    "x-component": "Input",
                    "x-component-props": {
                      "placeholder": "请输入..."
                    },
                    "x-validator": [],
                    "x-decorator-props": {},
                    "x-designable-id": "ekjay238la0",
                    "x-index": 0
                  }
                }
              }
            }
          }
        }
      }
    },
    "x-designable-id": "oo7ho3bl2b5"
  }
}
export const schemaToCode = (name: string, schema: ISchema) => {
  const dir = `${config.generatePath}${name}`;
  const pageProperties = getProperties(schema?.properties)
  const templateArr: string[] = [];
  const jsArr: string[] = [];
  const importContentArr: string[] = []
  pageProperties.forEach( (item) => {
    console.log((<ISchema>item)['x-component'])
    switch((<ISchema>item)['x-component']){
      case 'BaseForm':
        const { template, js, importContent } = createForm(item)
        templateArr.push(template)
        jsArr.push(js)
        importContentArr.push(importContent)
        console.log(JSON.stringify(templateArr), JSON.stringify(jsArr), JSON.stringify(importContentArr))

    }
  })

  const pageStr = createPage({name: name??'test', template: templateArr.join('/n'), js: jsArr.join('/n'), importContent: importContentArr.join('/n')})
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFile(`${dir}/index.jsx`, pageStr, writeFileErrorHandler);
}

schemaToCode('form', pageSchema.schema)

function writeFileErrorHandler(err: any){
  if (err) throw err;
}

function getProperties(schema): Array<ISchema>{
  return  schema ? Object.values(schema) : []
 }
