
  import React from 'react';
  
      import { QmForm, QmFormItem } from '@jiaozhiye/qm-design-react';
    

  export const test = (props) => {
    
    const formItems = [{"type":"INPUT","label":"测试1","fieldName":"","selfCol":1},{"type":"INPUT","label":"测试2","fieldName":"","selfCol":1},{"type":"INPUT","label":"测试3","fieldName":"","selfCol":1}]
    const initValue = []
    const formProps = {}
  

    return (
      <div className="page">
      <QmForm formType="default" items={formItems} initialValues={initValue} {...formProps}></QmForm>
  </div>
    )
  }
  export default test
