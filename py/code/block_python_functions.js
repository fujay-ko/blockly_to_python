python_functions_colour = 90;
python_input_colour = 60;
python_output_colour = 60;
python_logic_colour = 230;
python_math_colour = 240;
python_loop_colour = 120;
python_container_colour = 260;
python_string_colour = 160;
python_comment_colour = 30;
python_symbol_colour = 150;
python_frame_colour = 0;
python_logic_colour2 = 200;

//<block type="block_python_type"></block>
//======================================
Blockly.Blocks['block_python_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["int","int"], ["float","float"], ["bool","bool"], ["chr","chr"], ["ord","ord"], ["hex","hex"], ["bin","bin"]]), "NAME1");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_python_type'] = function(block) {
  var dropdown_name1 = block.getFieldValue('NAME1');
  // TODO: Assemble Python into code variable.
  var code = dropdown_name1;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_input"></block>
//======================================
Blockly.Blocks['block_input'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("input(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['block_input'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = 'input('+value_name+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
	
};

//<block type="block_any_line"></block>
//======================================
Blockly.Blocks['block_any_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(" "), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_comment_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_any_line'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = text_name+'\n';
  return code;
};
//<block type="block_emptystring"></block>
//======================================
Blockly.Blocks['block_emptystring'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("\"\"");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_string_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_emptystring'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '\"\"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_dot1"></block>
//======================================
Blockly.Blocks['block_dot1'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_dot1'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'.'+value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="import_as"></block>
//======================================
Blockly.Blocks['import_as'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("import");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("as");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['import_as'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var code = 'import '+value_name1+' as '+value_name2+"\n";
  return code;
};
//<block type="tb_connection"></block>
//======================================
Blockly.Blocks['tb_connection'] = {
  init: function() {
    this.appendValueInput("tb_connection_NAME")
        .setCheck(null)
        .appendField("");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['tb_connection'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'tb_connection_NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name;
  return code;
};
//<block type="from_import"></block>
//======================================
Blockly.Blocks['from_import'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("from");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("import");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['from_import'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'from '+value_name1+" import "+value_name2+"\n";
  return code;
};
//<block type="import_var"></block>
//======================================
Blockly.Blocks['import_var'] = {
  init: function() {
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("import");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['import_var'] = function(block) {
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'import '+value_name2+'\n';
  return code;
};
//<block type="block_return_"></block>
//======================================
Blockly.Blocks['block_return_'] = {
  init: function() {
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("return");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_return_'] = function(block) {
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'return '+value_name2 + "\n";
  return code;
};
//<block type="any_in_brackets"></block>
//======================================
Blockly.Blocks['any_in_brackets'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['any_in_brackets'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'('+value_name2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="statement_var"></block>
//======================================
Blockly.Blocks['statement_var'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("with"), "NAME");
	this.appendDummyInput()
		.appendField(":");
    this.appendStatementInput("NAME1")
		.setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['statement_var'] = function(block) {
  var text_name = block.getFieldValue('NAME').trim(); // 取得關鍵字並去除前後空白
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC) || ''; // 取得變數或表達式，沒有連接時為空
  var statements_name1 = Blockly.Python.statementToCode(block, 'NAME1');
  var code = text_name;
  if (value_name) {
    code += ' ' + value_name;
  }
  code += ':\n';
  if (statements_name1) {
    code += statements_name1;
  } else {
    code += Blockly.Python.INDENT + 'pass\n';
  }
  return code;
};
//<block type="cammaconcat"></block>
//======================================
Blockly.Blocks['cammaconcat'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput(","), "NAME3");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['cammaconcat'] = function(block) {
  var text_name3 = block.getFieldValue('NAME3');
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name3+value_name1;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="obj_method"></block>
//======================================
Blockly.Blocks['obj_method'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("mic"), "NAME1")
        .appendField(".");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("record"), "NAME2")
        .appendField("(");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['obj_method'] = function(block) {
  var text_name1 = block.getFieldValue('NAME1');
  var text_name2 = block.getFieldValue('NAME2');
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name1+"."+text_name2+"("+value_name2+')\n';
  return code;
};
//<block type="import_any_as_any"></block>
//======================================
Blockly.Blocks['import_any_as_any'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import")
        .appendField(new Blockly.FieldTextInput("pyMicVoiceDetection"), "NAME1");
    this.appendDummyInput()
        .appendField("as")
        .appendField(new Blockly.FieldTextInput("mic"), "NAME2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['import_any_as_any'] = function(block) {
  var text_name1 = block.getFieldValue('NAME1');
  var text_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble Python into code variable.
  var code = 'import '+text_name1+' as '+text_name2+"\n";
  return code;
};
//<block type="any_func_value"></block>
//======================================
Blockly.Blocks['any_func_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("time.sleep"), "NAME");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['any_func_value'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = text_name+'('+value_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="any_func_call_value"></block>
//======================================
Blockly.Blocks['any_func_call_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("random"), "NAME1")
        .appendField(".")
        .appendField(new Blockly.FieldTextInput("randint"), "NAME2")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput("0,9"), "NAME3")
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['any_func_call_value'] = function(block) {
  var text_name1 = block.getFieldValue('NAME1');
  var text_name2 = block.getFieldValue('NAME2');
  var text_name3 = block.getFieldValue('NAME3');
  // TODO: Assemble Python into code variable.
  var code = text_name1+'.'+text_name2+'('+text_name3+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_func"></block>
//======================================
Blockly.Blocks['block_func'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_func'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+"("+value_name2+")\n";
  return code;
};
//<block type="any_func_call"></block>
//======================================
Blockly.Blocks['any_func_call'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("=")
        .appendField(new Blockly.FieldTextInput("random"), "NAME1")
        .appendField(".")
        .appendField(new Blockly.FieldTextInput("randint"), "NAME2")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput("0,9"), "NAME3")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['any_func_call'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var text_name1 = block.getFieldValue('NAME1');
  var text_name2 = block.getFieldValue('NAME2');
  var text_name3 = block.getFieldValue('NAME3');
  // TODO: Assemble Python into code variable.
  var code = value_name+'='+text_name1+'.'+text_name2+'('+text_name3+')\n';
  return code;
};
//<block type="import_any"></block>
//======================================
Blockly.Blocks['import_any'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import")
        .appendField(new Blockly.FieldTextInput("time"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['import_any'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'import '+text_name+'\n';
  return code;
};
//<block type="print_newline"></block>
//======================================
Blockly.Blocks['print_newline'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("print(");
    this.appendDummyInput()
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("end=\"\\n\""), "NAME2")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['print_newline'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble Python into code variable.
  var code = 'print('+value_name1+','+text_name2+')\n';
  if(text_name2=="end=\"\\n\"")
	  code = 'print('+value_name1+')\n';
  return code;
};
//<block type="print_No_line_breaks"></block>
//======================================
Blockly.Blocks['print_No_line_breaks'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("print(");
    this.appendDummyInput()
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("end=\"\""), "NAME2")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['print_No_line_breaks'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble Python into code variable.
  var code = 'print('+value_name1+','+text_name2+')\n';
  if(text_name2=="end=\"\"")
	  code = 'print('+value_name1+',end="")';
  return code;
};

//<block type="str_"></block>
//======================================
Blockly.Blocks['str_'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("str(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['str_'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'str('+value_name+')\n';
  return code;
};

//<block type="block_if_single"></block>
//======================================
Blockly.Blocks['block_if_single'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("if");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_logic_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_if_single'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'if '+value_name+'\n';
  return code;
};
//<block type="ifelse"></block>
//======================================
Blockly.Blocks['ifelse'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("if");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("else :");
    this.appendStatementInput("NAME3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_logic_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['ifelse'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_NONE) || 'False'; // 取得條件，沒有連接時預設為 False
  var statements_name2 = Blockly.Python.statementToCode(block, 'NAME2');
  var statements_name3 = Blockly.Python.statementToCode(block, 'NAME3');
  var code = 'if ' + value_name1 + ':\n';
  if (statements_name2) {
    code += statements_name2;
  } else {
    code += Blockly.Python.INDENT + 'pass\n';
  }
  code += 'else:\n';
  if (statements_name3) {
    code += statements_name3;
  } else {
    code += Blockly.Python.INDENT + 'pass\n';
  }
  return code;
};
//<block type="elif"></block>
//======================================
Blockly.Blocks['elif'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("elif");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_logic_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['elif'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_NONE) || 'False'; // 取得條件，沒有連接時預設為 False
  var statements_name2 = Blockly.Python.statementToCode(block, 'NAME2');
  var code = 'elif ' + value_name1 + ':\n';
  if (statements_name2) {
    code += statements_name2;
  } else {
    code += Blockly.Python.INDENT + 'pass\n';
  }
  return code;
};

//<block type="else"></block>
//======================================
Blockly.Blocks['else'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("else :");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_logic_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['else'] = function(block) {
  var statements_name2 = Blockly.Python.statementToCode(block, 'NAME2');
  var code = 'else:\n';
  if (statements_name2) {
    code += statements_name2;
  } else {
    code += Blockly.Python.INDENT + 'pass\n';
  }
  return code;
};
//<block type="if"></block>
//======================================
Blockly.Blocks['if'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("if");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_logic_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['if'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_NONE) || 'False'; // 取得條件，沒有連接時預設為 False
  var statements_name2 = Blockly.Python.statementToCode(block, 'NAME2');
  var code = 'if ' + value_name1 + ':\n';
  if (statements_name2) {
    code += statements_name2;
  } else {
    code += Blockly.Python.INDENT + 'pass\n';
  }
  return code;
};
//<block type="python_logic_operation"></block>
//======================================
Blockly.Blocks['python_logic_operation'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["=="," == "], [">"," > "], [">="," >= "], ["<"," < "], ["<="," <= "],["!="," != "], ["and"," and "], ["or"," or "],["in"," in "], ["is"," is "], ["is not"," is not "]]), "NAME3");
	this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_logic_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_logic_operation'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name3 = block.getFieldValue('NAME3');
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+dropdown_name3+value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="operator"></block>
//======================================
Blockly.Blocks['operator'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["+"," + "], ["-"," - "], ["*"," * "], ["/"," / "], ["%"," % "], ["//"," // "],["**"," ** "]]), "NAME3");
	  this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_logic_colour2);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};
Blockly.Python['operator'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name3 = block.getFieldValue('NAME3');
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+dropdown_name3+value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="compound_operator"></block>
//======================================
Blockly.Blocks['compound_operator'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["+="," += "], ["-="," -= "], ["*="," *= "], ["/="," /= "], ["%="," %= "], ["//="," //= "],["**="," **= "]]), "NAME3");
	  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_logic_colour);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};
Blockly.Python['compound_operator'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name3 = block.getFieldValue('NAME3');
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // 將程式碼組合成一個陳述式
  var code = value_name1 + dropdown_name3 + value_name2 + '\n'; // 新增換行符號，確保陳述式獨立
  return code; // 直接回傳程式碼字串
};

//<block type="bitwise_Operation"></block>
//======================================
Blockly.Blocks['bitwise_Operation'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["|"," | "], ["^"," ^ "], ["&"," & "], ["<<"," << "], [">>"," >> "]]), "NAME3");
	  this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_logic_colour);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};
Blockly.Python['bitwise_Operation'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name3 = block.getFieldValue('NAME3');
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+dropdown_name3+value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


//<block type="python_logic_boolean"></block>
//======================================
Blockly.Blocks['python_logic_boolean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["True","True"], ["False","False"]]), "NAME1");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_logic_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_logic_boolean'] = function(block) {
  var dropdown_name1 = block.getFieldValue('NAME1');
  // TODO: Assemble Python into code variable.
  var code = 'True';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="while"></block>
//======================================
Blockly.Blocks['while'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("while");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME1")
        .setCheck(null)
        .appendField("");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_loop_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['while'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE) || 'True'; // 取得條件，沒有連接時預設為 True
  var statements_name1 = Blockly.Python.statementToCode(block, 'NAME1');
  var code = 'while ' + value_name + ':\n';
  if (statements_name1) {
    code += statements_name1;
  } else {
    code += Blockly.Python.INDENT + 'pass\n';
  }
  return code;
};

//======================================
Blockly.Blocks['try_except'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("try:");
    this.appendStatementInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("except Exception as");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['try_except'] = function(block) {
  var statements_name1 = Blockly.Python.statementToCode(block, 'NAME1');
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC) || 'e'; // 取得異常變數，沒有連接時預設為 'e'
  var statements_name3 = Blockly.Python.statementToCode(block, 'NAME3');
  var code = 'try:\n';
  if (statements_name1) {
    code += statements_name1;
  } else {
    code += Blockly.Python.INDENT + 'pass\n';
  }
  code += 'except Exception as ' + value_name2 + ':\n';
  if (statements_name3) {
    code += statements_name3;
  } else {
    code += Blockly.Python.INDENT + 'pass\n';
  }
  return code;
};

//======================================
Blockly.Blocks['try_except_zero'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("try:");
    this.appendStatementInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("except:");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['try_except_zero'] = function(block) {
  var statements_name1 = Blockly.Python.statementToCode(block, 'NAME1');
  var statements_name2 = Blockly.Python.statementToCode(block, 'NAME2');
  var code = 'try:\n';
  if (statements_name1) {
    code += statements_name1;
  } else {
    code += Blockly.Python.INDENT + 'pass\n';
  }
  code += 'except:\n';
  if (statements_name2) {
    code += statements_name2;
  } else {
    code += Blockly.Python.INDENT + 'pass\n';
  }
  return code;
};

//========================================================
Blockly.Blocks['python_int'] = {
  init: function() {
    this.appendValueInput("python_int_V")
        .setCheck(null)
        .appendField("int(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_math_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['python_int'] = function(block) {
  var value_python_int_v = Blockly.Python.valueToCode(block, 'python_int_V', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'int('+value_python_int_v+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//========================================================
Blockly.Blocks['python_float'] = {
  init: function() {
    this.appendValueInput("python_float_V")
        .setCheck(null)
        .appendField("float(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_math_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['python_float'] = function(block) {
  var value_python_float_v = Blockly.Python.valueToCode(block, 'python_float_V', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'float('+value_python_float_v+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


//========================================================
Blockly.Blocks['python_list'] = {
  init: function() {
    this.appendValueInput("python_list_V")
        .setCheck(null)
        .appendField("list(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['python_list'] = function(block) {
  var value_python_list_v = Blockly.Python.valueToCode(block, 'python_list_V', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'list('+value_python_list_v+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//========================================================
Blockly.Blocks['python_map'] = {
  init: function() {
    this.appendValueInput("python_map_V")
        .setCheck(null)
        .appendField("map(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['python_map'] = function(block) {
  var value_python_map_v = Blockly.Python.valueToCode(block, 'python_map_V', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'map('+value_python_map_v+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//========================================================
Blockly.Blocks['python_ord'] = {
  init: function() {
    this.appendValueInput("python_ord_V")
        .setCheck(null)
        .appendField("ord(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['python_ord'] = function(block) {
  var value_python_ord_v = Blockly.Python.valueToCode(block, 'python_ord_V', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'ord('+value_python_ord_v+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//========================================================
Blockly.Blocks['python_time_import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import time");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_time_import'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import time\n';
  return code;
};
//========================================================
Blockly.Blocks['python_time_sleep'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("time.sleep(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_time_sleep'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep('+value_name+')\n';
  return code;
};
//===========================================
Blockly.Blocks['plus2'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_string_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
}
Blockly.Python['plus2'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'+'+value_name2;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="plus3"></block>
//======================================
Blockly.Blocks['plus3'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("+");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("+");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_string_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['plus3'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+"+"+value_name2+"+"+value_name3;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="plus4"></block>
//======================================
Blockly.Blocks['plus4'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("+");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("+");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("+");
    this.appendValueInput("NAME4")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_string_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['plus4'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+"+"+value_name2+"+"+value_name3+"+"+value_name4;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="plus5"></block>
//======================================
Blockly.Blocks['plus5'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("+");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("+");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("+");
    this.appendValueInput("NAME4")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("+");
    this.appendValueInput("NAME5")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_string_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['plus5'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'NAME4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'NAME5', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+"+"+value_name2+"+"+value_name3+"+"+value_name4+"+"+value_name5;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//=============================================
Blockly.Blocks['for_i_in_'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("for")
        .appendField(new Blockly.FieldDropdown([["i","i"], ["j","j"], ["k","k"], ["l","l"]]), "NAME2")
        .appendField("in");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_loop_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['for_i_in_'] = function(block) {
  var variable_name2 = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME2'), Blockly.Names.NameType.VARIABLE);
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC) || 'range(10)'; // 取得可迭代對象，沒有連接時預設為 range(10)
  var statements_3 = Blockly.Python.statementToCode(block, '3');
  var code = 'for ' + variable_name2 + ' in ' + value_name1 + ':\n';
  if (statements_3) {
    code += statements_3;
  } else {
    code += Blockly.Python.INDENT + 'pass\n';
  }
  return code;
};
//=================================================
Blockly.Blocks['python_range'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("range(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_loop_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_range'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'range('+value_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//================================
Blockly.Blocks['python_range2'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck("Number")
        .appendField("range(");
    this.appendValueInput("NAME2")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_loop_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_range2'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'range('+value_name1+','+value_name2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//================================
Blockly.Blocks['python_range3'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck("Number")
        .appendField("range(");
    this.appendValueInput("NAME2")
        .setCheck("Number")
        .appendField(",");
    this.appendValueInput("NAME3")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_loop_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_range3'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'range('+value_name1+','+value_name2+','+value_name3+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//==================================================
Blockly.Blocks['python_continue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("continute");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_logic_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_continue'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'continue\n';
  return code;
};
//==================================================
Blockly.Blocks['python_break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("break");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_logic_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_break'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'break\n';
  return code;
};
//==================================================
Blockly.Blocks['python_with_open'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("with open(");
    this.appendValueInput("NAME1")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(") as f:");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_with_open'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var statements_name = Blockly.Python.statementToCode(block, 'NAME2');
  // TODO: Assemble Python into code variable.
  var code = 'with open('+value_name1+') as f:\n'+statements_name;
  return code;
};
//=============================================
Blockly.Blocks['python_f_readlines'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("f.readlines()");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_f_readlines'] = function(block) {
  var code = 'f.readlines()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//=============================================
Blockly.Blocks['python_f_readline'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("f.readline()");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_f_readline'] = function(block) {
  var code = 'f.readline()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="python_f_write"></block>
//======================================
Blockly.Blocks['python_f_write'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("f.write(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_f_write'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'f.write('+value_name+')\n';
  return code;
};
//============================================
Blockly.Blocks['python_transform_mode'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_transform_mode'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name+'\n';
  return code;
};
//======================================
Blockly.Blocks['python_any'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "NAME");
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_any'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = text_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_assign"></block>
//======================================
Blockly.Blocks['block_assign'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_assign'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+" = "+value_name2+'	\n';
  return code;
};
//<block type="block_string_double_quotes"></block>
//======================================
Blockly.Blocks['block_string_double_quotes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("\"")
        .appendField(new Blockly.FieldTextInput(""), "NAME")
        .appendField("\"");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_string_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_string_double_quotes'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '\"'+text_name+'\"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_string"></block>
//======================================
Blockly.Blocks['block_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("'")
        .appendField(new Blockly.FieldTextInput(""), "NAME")
        .appendField("'");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_string_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_string'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = "\'"+text_name+"\'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_fstring"></block>
//======================================
Blockly.Blocks['block_fstring'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("f\"")
        .appendField(new Blockly.FieldTextInput(""), "NAME1")
        .appendField("\"");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_string_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_fstring'] = function(block) {
  var text_name1 = block.getFieldValue('NAME1');
  // TODO: Assemble Python into code variable.
  var code = 'f\"'+text_name1+'\"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_colon_a_b"></block>
//======================================
Blockly.Blocks['block_colon_a_b'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(":");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_colon_a_b'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+':'+value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_colon_a_b_c"></block>
//======================================
Blockly.Blocks['block_colon_a_b_c'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(":");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField(":");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_colon_a_b_c'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+':'+value_name2+':'+value_name3;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================
Blockly.Blocks['python_bytes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("bytes(");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_math_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_bytes'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'bytes('+value_name1+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================
Blockly.Blocks['python_big_parantheses'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("{");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("}");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_big_parantheses'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '{'+value_name1+'}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="block_parentheses"></block>
//======================================
Blockly.Blocks['block_parentheses'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_parentheses'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '('+value_name1+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================
Blockly.Blocks['python_in'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("in");
    this.appendValueInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_in'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+' in '+value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//======================================
Blockly.Blocks['python_global'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("global ");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(python_functions_colour);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip("");
	this.setHelpUrl("");
  }
};
Blockly.Python['python_global'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'global '+value_name+'\n';
  return code;
};

//<block type="block_comma"></block>
//======================================
Blockly.Blocks['block_comma'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(",");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_comma'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+','+value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="python_any_statement"></block>
//======================================
Blockly.Blocks['python_any_statement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("#any statement"), "NAME1");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['python_any_statement'] = function(block) {
  var text_name1 = block.getFieldValue('NAME1');
  // TODO: Assemble Python into code variable.
  var code = text_name1+'\n';
  return code;
};
//<block type="block_get_anyconcat"></block>
//======================================
Blockly.Blocks['block_get_anyconcat'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("."), "NAME2");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.setInputsInline(true);print
    this.setOutput(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_get_anyconcat'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name2 = block.getFieldValue('NAME2');
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+text_name2+value_name3;
  // TODO: Change ORDER_NONE to the correct strength.
  //return code;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_anyconcat"></block>
//======================================
Blockly.Blocks['block_anyconcat'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("="), "NAME2");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_anyconcat'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name2 = block.getFieldValue('NAME2');
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+text_name2+value_name3+'\n';
  return code;
};

//<block type="block_def"></block>
//======================================
Blockly.Blocks['block_def'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("def");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_def'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC) || 'function_name'; // 取得函數名稱，沒有連接時預設為 'function_name'
  var statements_name2 = Blockly.Python.statementToCode(block, 'NAME2');
  var code = 'def ' + value_name1 + '():\n'; // 加上括號，即使沒有參數也是合法的函數定義
  if (statements_name2) {
    code += statements_name2;
  } else {
    code += Blockly.Python.INDENT + 'pass\n';
  }
  return code;
};
//<block type="block_class"></block>
//======================================
Blockly.Blocks['block_class'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("class");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_class'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var statements_name2 = Blockly.Python.statementToCode(block, 'NAME2');
  // TODO: Assemble Python into code variable.
  var code = "class "+value_name1+':\n'+statements_name2;
  return code;
};
//<block type="any_indent_statement"></block>
//======================================
Blockly.Blocks['any_indent_statement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("def func():"), "NAME");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['any_indent_statement'] = function(block) {
  var text_name = block.getFieldValue('NAME').trim(); // 取得輸入並去除前後空白
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  var code = text_name + '\n';
  if (statements_name) {
    code += statements_name;
  } else if (text_name.endsWith(':')) {
    code += Blockly.Python.INDENT + 'pass\n';
  }
  return code;
};
//<block type="create_arrayin"></block>
//======================================
Blockly.Blocks['create_arrayin'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("[");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['create_arrayin'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '['+value_name1+']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="for_loop"></block>
//======================================
Blockly.Blocks['for_loop'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("for");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("in");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_loop_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['for_loop'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC) || '_'; // 取得迴圈變數，沒有連接時預設為 '_'
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC) || '[]'; // 取得可迭代對象，沒有連接時預設為空列表 '[]'
  var statements_name3 = Blockly.Python.statementToCode(block, 'NAME3');
  var code = 'for ' + value_name1 + ' in ' + value_name2 + ':\n';
  if (statements_name3) {
    code += statements_name3;
  } else {
    code += Blockly.Python.INDENT + 'pass\n';
  }
  return code;
};
//<block type="block_equal_"></block>
//======================================
Blockly.Blocks['block_equal_'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("=");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_equal_'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1+'='+value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="math_value_left"></block>
//======================================
Blockly.Blocks['math_value_left'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["int","int"], ["float","float"], ["bin","bin"], ["hex","hex"], ["oct","oct"], ["abs","abs"], ["divmod","divmod"], ["pow","pow"], ["round","round"]]), "NAME2")
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['math_value_left'] = function(block) {
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = dropdown_name2 + "(" + value_name1 + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="list_value"></block>
//======================================
Blockly.Blocks['list_value'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["len","len"], ["min","min"], ["max","max"], ["sum","sum"], ["sorted","sorted"], ["reversed","reversed"], ["zip","zip"], ["enumerate","enumerate"], ["iter","iter"], ["next","next"], ["any","any"], ["all","all"], ["filter","filter"], ["slice","slice"]]), "NAME2")
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['list_value'] = function(block) {
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = dropdown_name2 + "(" + value_name1 + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="string_value"></block>
//======================================
Blockly.Blocks['string_value'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["len","len"], ["min","min"], ["max","max"], ["sum","sum"], ["sorted","sorted"], ["zip","zip"], ["enumerate","enumerate"], ["iter","iter"], ["next","next"]]), "NAME2")
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['string_value'] = function(block) {
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = dropdown_name2 + "(" + value_name1 + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="list_operations"></block>
//======================================
Blockly.Blocks['list_operations'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["append","append"], ["join","join"], ["count","count"], ["extend","extend"], ["index","index"], ["insert","insert"], ["pop","pop"], ["remove","remove"], ["reverse","reverse"], ["sort","sort"]]), "NAME2")
        .appendField("(");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['list_operations'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + "." + dropdown_name2 + "(" + value_name3 + ")";
  return  [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="string_operations"></block>
//======================================
Blockly.Blocks['string_operations'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([ ["split","split"], ["replace","replace"], ["strip","strip"], ["startswith","startswith"], ["count","count"], ["join","join"], ["title","title"],["upper","upper"], ["lower","lower"], ["capitalize","capitalize"], ["swapcase","swapcase"], ["islower","islower"], ["isupper","isupper"], ["isalpha","isalpha"], ["isdecimal","isdecimal"], ["isalnum","isalnum"], ["isdigit","isdigit"] ]), "NAME2")
        .appendField("(");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_string_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['string_operations'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + "." + dropdown_name2 + "(" + value_name3 + ")";
  return code;
};

//<block type="block_print_all"></block>
//======================================
Blockly.Blocks['block_print_all'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("print(");
    this.appendDummyInput()
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("sep = \" \""), "NAME2")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("end = \"\\n\""), "NAME3")
	.appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_functions_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_print_all'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name2 = block.getFieldValue('NAME2');
  var text_name3 = block.getFieldValue('NAME3');
  // TODO: Assemble Python into code variable.
  var code = "print( "+ value_name1 + ", " + text_name2 + ", " + text_name3 +" )";
  return code;
};

//<block type="list_for_input_1d"></block>
//======================================
Blockly.Blocks['list_for_input_1d'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("[");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField("for");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField("in");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['list_for_input_1d'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "[ " + value_name1 + " for " + value_name2 + " in " + value_name3 + " ]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//=====================================================
Blockly.Blocks['build_tuple2'] = {
  init: function() {
    this.appendValueInput("TUPLE2_V1")
        .setCheck("Number")
        .appendField("(");
    this.appendValueInput("TUPLE2_V2")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['build_tuple2'] = function(block) {
  var value_tuple_v1 = Blockly.Python.valueToCode(block, 'TUPLE2_V1', Blockly.Python.ORDER_ATOMIC);
  var value_tuple_v2 = Blockly.Python.valueToCode(block, 'TUPLE2_V2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '('+value_tuple_v1+','+value_tuple_v2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//=====================================================
Blockly.Blocks['build_tuple3'] = {
  init: function() {
    this.appendValueInput("TUPLE3_V1")
        .setCheck("Number")
        .appendField("(");
    this.appendValueInput("TUPLE3_V2")
        .setCheck("Number")
        .appendField(",");
    this.appendValueInput("TUPLE3_V3")
        .setCheck("Number")
        .appendField(",");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['build_tuple3'] = function(block) {
  var value_tuple_v1 = Blockly.Python.valueToCode(block, 'TUPLE3_V1', Blockly.Python.ORDER_ATOMIC);
  var value_tuple_v2 = Blockly.Python.valueToCode(block, 'TUPLE3_V2', Blockly.Python.ORDER_ATOMIC);
  var value_tuple_v3 = Blockly.Python.valueToCode(block, 'TUPLE3_V3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '('+value_tuple_v1+','+value_tuple_v2+','+value_tuple_v3+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

//=======================================================
Blockly.Blocks['numpy_var_dim3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("a_list"), "ARRAY_NAME");
    this.appendValueInput("DIM3_START")
        .setCheck("Number")
        .appendField("[");
    this.appendValueInput("DIM3_second")
        .setCheck("Number")
        .appendField(":");
    this.appendValueInput("DIM3_END")
        .setCheck("Number")
        .appendField(":");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['numpy_var_dim3'] = function(block) {
  var value_array_name=Blockly.Python.nameDB_.getName(block.getFieldValue('ARRAY_NAME'), Blockly.Names.NameType.VARIABLE);
  var value_dim3_start = Blockly.Python.valueToCode(block, 'DIM13_START', Blockly.Python.ORDER_ATOMIC);
  var value_dim3_second = Blockly.Python.valueToCode(block, 'DIM3_second', Blockly.Python.ORDER_ATOMIC);
  var value_dim3_end = Blockly.Python.valueToCode(block, 'DIM3_END', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_array_name+'['+value_dim3_start+':'+value_dim3_second+':'+value_dim3_end+']';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

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
    this.setInputsInline(false);
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

//<block type="f_string_variable"></block>
Blockly.Blocks['f_string_variable'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("{");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("}");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("{");
 this.setHelpUrl("");
  }
};

Blockly.Python['f_string_variable'] = function(block) {
  var value_left = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_NONE) || '';
  var value_variable = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC) || '';
  var code = '{' + value_left + '}' + value_variable;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="f_string_block"></block>
//======================================
Blockly.Blocks['f_string_block'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("f\"");
    this.appendDummyInput()
        .appendField("\"");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['f_string_block'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'f"' + value_name1 + '"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="block_print_single"></block>
//======================================
Blockly.Blocks['block_print_single'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("print(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['block_print_single'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'print(' + value_name + ')\n';
  return code;
};

//<block type="fstring_format_block"></block>
//======================================
Blockly.Blocks['fstring_format_block'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(":")
        .appendField(new Blockly.FieldTextInput(""), "NAME2");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['fstring_format_block'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var text_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble Python into code variable.
  var code = value_name1 + ':' + text_name2 ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="python_dict"></block>
Blockly.Blocks['python_dict'] = {
  init: function() {
    this.appendValueInput("python_dict_V")
        .setCheck(null)
        .appendField("dict(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['python_dict'] = function(block) {
  var value_python_dict_v = Blockly.Python.valueToCode(block, 'python_dict_V', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'dict('+value_python_dict_v+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="python_set"></block>
Blockly.Blocks['python_set'] = {
  init: function() {
    this.appendValueInput("python_set_V")
        .setCheck(null)
        .appendField("set(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['python_set'] = function(block) {
  var value_python_dict_v = Blockly.Python.valueToCode(block, 'python_set_V', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'set('+value_python_dict_v+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="from_import_dot"></block>
//======================================
Blockly.Blocks['from_import_dot'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null)
        .appendField("from");
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(new Blockly.FieldLabelSerializable("."), "NAME1");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField("import");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['from_import_dot'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);

  // Assemble Python into code variable.
  // This assumes NAME1 is the module, NAME2 is the submodule, and NAME3 is the item to import.
  var code = 'from ' + value_name1 + '.' + value_name2 + ' import ' + value_name3 + '\n';
  return code;
};

//<block type="minecraft_block_up"></block>
//======================================
Blockly.Blocks['minecraft_block_up'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['minecraft_block_up'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + '.'+ value_name2 +'('+ value_name3 +')\n';

  return code;
};

//<block type="minecraft_block_left"></block>
//======================================
Blockly.Blocks['minecraft_block_left'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['minecraft_block_left'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + '.'+ value_name2 +'('+ value_name3 +')';

  return [code, Blockly.Python.ORDER_ATOMIC];
};



//<block type="minecraft_posttochat"></block>
//======================================
Blockly.Blocks['minecraft_posttochat'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(new Blockly.FieldLabelSerializable(".postToChat("), "NAME1")
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['minecraft_posttochat'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var code = value_name1 + '.postToChat('+ value_name2 +')\n';
  return code;
};

//<block type="minecraft_getblock"></block>
//======================================
Blockly.Blocks['minecraft_getblock'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".getBlock(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['minecraft_getblock'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + '.getBlock('+ value_name2 +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="minecraft_getblocks"></block>
//======================================
Blockly.Blocks['minecraft_getblocks'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".getBlocks(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['minecraft_getblocks'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + '.getBlocks('+ value_name2 +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//<block type="minecraft_setblock"></block>
//======================================
Blockly.Blocks['minecraft_setblock'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".setBlock(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['minecraft_setblock'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + '.setBlock('+ value_name2 +')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code
};
//<block type="minecraft_getblocks"></block>
//======================================
Blockly.Blocks['minecraft_setblocks'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".setBlocks(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['minecraft_setblocks'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + '.setBlocks('+ value_name2 +')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
//<block type="minecraft_getTilePos"></block>
//======================================
Blockly.Blocks['minecraft_getTilePos'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".player.getTilePos(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['minecraft_getTilePos'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + '.player.getTilePos('+ value_name2 +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="minecraft_getPos"></block>
//======================================
Blockly.Blocks['minecraft_getPos'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".player.getPos(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['minecraft_getPos'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + '.player.getPos('+ value_name2 +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="minecraft_setTilePos"></block>
//======================================
Blockly.Blocks['minecraft_setTilePos'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".player.setTilePos(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['minecraft_setTilePos'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + '.player.setTilePos('+ value_name2 +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//<block type="minecraft_setPos"></block>
//======================================
Blockly.Blocks['minecraft_setPos'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".player.setPos(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['minecraft_setPos'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + '.player.setPos('+ value_name2 +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//<block type="minecraft_block"></block>
//======================================
Blockly.Blocks['minecraft_block'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(".");
    this.appendValueInput("NAME3")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['minecraft_block'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + '.'+ value_name2 +'('+ value_name3 +')';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="logic_not"></block>
//======================================
Blockly.Blocks['logic_not'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("not");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['logic_not'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'not ' + value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//<block type="list_operations_up"></block>
//======================================
Blockly.Blocks['list_operations_up'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["append","append"], ["join","join"], ["count","count"], ["extend","extend"], ["index","index"], ["insert","insert"], ["pop","pop"], ["remove","remove"], ["reverse","reverse"], ["sort","sort"]]), "NAME2")
        .appendField("(");
    this.appendValueInput("NAME3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(python_container_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['list_operations_up'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_name3 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + "." + dropdown_name2 + "(" + value_name3 + ")";
  return  code;
};
