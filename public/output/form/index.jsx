
  import React from 'react';
  
      import { QmForm, QmFormItem } from '@jiaozhiye/qm-design-react';
    

  export const form = (props) => {
    
    const formItems = [{"type":"INPUT","label":"输入框","fieldName":"","selfCol":2},{"type":"INPUT","label":"输入框","fieldName":"","selfCol":2},{"type":"INPUT","label":"输入框","fieldName":"","selfCol":1},{"type":"INPUT","label":"输入框","fieldName":"","selfCol":1},{"type":"INPUT","label":"输入框","fieldName":"","selfCol":1}]
    const initValue = []
    const formProps = {"style":{"width":"1000px"},"layout":"vertical","labelWidth":"120px","labelAlign":"left","size":"large"}
  

    return (
      <div className="page">
      <QmForm formType="default" items={formItems} initialValues={initValue} {...formProps}></QmForm>
  </div>
    )
  }
  export default form
