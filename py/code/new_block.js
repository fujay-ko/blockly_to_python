//<block type="python_input"></block>
//======================================
Blockly.Blocks['python_input'] = {
    init: function() {
      this.appendValueInput("TEXT")
          .setCheck(["String", "Text"])
          .appendField("輸入")
          .appendField(new Blockly.FieldDropdown([
            ["文字", "input"],
            ["整數", "int"],
            ["浮點數", "float"]
          ]), "type1")
          .appendField("並顯示提示訊息");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(160);
      this.setTooltip("輸入提示訊息並選擇輸入類型");
      this.setHelpUrl("");
    }
};

Blockly.Python['python_input'] = function(block) {
    var dropdown_type1 = block.getFieldValue('type1');
    var value_input1 = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC) || '""';
    
    // Remove quotes if they exist
    value_input1 = value_input1.replace(/^["']|["']$/g, '');
    
    var code;
    if (dropdown_type1 === 'input') {
        code = 'input("' + value_input1 + '")';
    } else {
        code = dropdown_type1 + '(input("' + value_input1 + '"))';
    }
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};