'use strict';

goog.provide('Blockly.Blocks.actuator');
goog.require('Blockly.Blocks');

Blockly.Blocks.actuator.HUE = 100//'#b574c2';



Blockly.Blocks['microbit_music_play_built_in'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.actuator.HUE,
      "nextStatement" : null,
      "previousStatement" : null,
      "inputsInline": true,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/music.html#built-in-melodies",
      "message0" : Blockly.MIXLY_MICROBIT_Play_built_in_melody,
      "args0" : [{
          "name" : "melody",
          "options" : [["DADADADUM", "DADADADUM"], ["ENTERTAINER", "ENTERTAINER"], ["PRELUDE", "PRELUDE"], ["ODE", "ODE"], ["NYAN", "NYAN"], ["RINGTONE", "RINGTONE"], ["FUNK", "FUNK"], ["BLUES", "BLUES"], ["BIRTHDAY", "BIRTHDAY"], ["WEDDING", "WEDDING"], ["FUNERAL", "FUNERAL"], ["PUNCHLINE", "PUNCHLINE"], ["PYTHON", "PYTHON"], ["BADDY", "BADDY"], ["CHASE", "CHASE"], ["BA_DING", "BA_DING"], ["WAWAWAWAA", "WAWAWAWAA"], ["JUMP_UP", "JUMP_UP"], ["JUMP_DOWN", "JUMP_DOWN"], ["POWER_UP", "POWER_UP"], ["POWER_DOWN", "POWER_DOWN"]],
          "type" : "field_dropdown"
        }, {
          // "check" : "Number",
          "type" : "input_value",
          "name" : "PIN"
        }, {
          "type" : "input_dummy"
        }, {
          "checked" : true,
          "type" : "field_checkbox",
          "name" : "wait"
        }, {
          "type" : "input_dummy"
        }, {
          "checked" : false,
          "type" : "field_checkbox",
          "name" : "loop"
        }
      ]
    });
    this.setTooltip(Blockly.MIXLY_MICROBIT_Play_built_in_melody1);
  }
};


Blockly.Blocks['microbit_music_play_built_in_easy'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.actuator.HUE,
      "nextStatement" : null,
      "previousStatement" : null,
      "inputsInline": true,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/music.html#built-in-melodies",
      "tooltip" : "Play one of the built-in melodies. Indicate if you need to wait before continuing or continuously loop the melody.",
      "message0" : Blockly.MIXLY_MICROBIT_Play_built_in_melody_easy,
      "args0" : [{
          "name" : "melody",
          "options" : [["DADADADUM", "DADADADUM"], ["ENTERTAINER", "ENTERTAINER"], ["PRELUDE", "PRELUDE"], ["ODE", "ODE"], ["NYAN", "NYAN"], ["RINGTONE", "RINGTONE"], ["FUNK", "FUNK"], ["BLUES", "BLUES"], ["BIRTHDAY", "BIRTHDAY"], ["WEDDING", "WEDDING"], ["FUNERAL", "FUNERAL"], ["PUNCHLINE", "PUNCHLINE"], ["PYTHON", "PYTHON"], ["BADDY", "BADDY"], ["CHASE", "CHASE"], ["BA_DING", "BA_DING"], ["WAWAWAWAA", "WAWAWAWAA"], ["JUMP_UP", "JUMP_UP"], ["JUMP_DOWN", "JUMP_DOWN"], ["POWER_UP", "POWER_UP"], ["POWER_DOWN", "POWER_DOWN"]],
          "type" : "field_dropdown"
        }, {
          // "check" : "Number",
          "type" : "input_value",
          "name" : "PIN"
        }, {
          "type" : "input_dummy"
        }, {
          "type" : "input_dummy"
        }, {
          "type" : "input_dummy"
        }, {
          "type" : "input_dummy"
        }
      ]
    });
  }
};

Blockly.Blocks.microbit_music_pitch_delay={
init:function(){
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_MBOT_TONE)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendValueInput('pitch')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_FREQUENCY);
    this.appendValueInput('duration')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DURATION);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DELAY_MS)
        .appendField(Blockly.MIXLY_MICROBIT_WAIT);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldCheckbox(true),'wait');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_TONE2);
  }
};

Blockly.Blocks.microbit_music_pitch={
init:function(){
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_MBOT_TONE)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendValueInput('pitch')
        .setCheck(Number)
        .appendField(Blockly.MIXLY_FREQUENCY);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_TONE);
  }
};

Blockly.Blocks['microbit_music_play_list_of_notes'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.actuator.HUE,
      "nextStatement" : null,
      "previousStatement" : null,
      "inputsInline": true,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/music.html#musical-notation",
      "message0" : Blockly.MIXLY_MICROBIT_Play_notes,
      "args0" : [{
          "check" : "List",
          "type" : "input_value",
          "name" : "notes"
        }, {
          "type" : "input_value",
          "name" : "PIN"
        }, {
          "checked" : true,
          "type" : "field_checkbox",
          "name" : "wait"
        }, {
          "type" : "input_dummy"
        }, {
          "checked" : false,
          "type" : "field_checkbox",
          "name" : "loop"
        }
      ]
    });
    this.setTooltip(Blockly.MIXLY_MICROBIT_Play_notes1);
  }
};

Blockly.Blocks['microbit_music_play_list_of_notes_easy'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.actuator.HUE,
      "nextStatement" : null,
      "previousStatement" : null,
      "inputsInline": true,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/music.html#musical-notation",
      "tooltip" : "Play a list of notes expressed in the special music language. Indicate if you need to wait before continuing or continuously loop the melody.",
      "message0" : Blockly.MIXLY_MICROBIT_Play_notes,
      "args0" : [{
          "check" : "List",
          "type" : "input_value",
          "name" : "notes"
        }, {
          "type" : "input_value",
          "name" : "PIN"
        }, {
          "type" : "input_dummy"
        }, {
          "type" : "input_dummy"
        }, {
          "type" : "input_dummy"
        }
      ]
    });
  }
};

Blockly.Blocks['microbit_music_reset'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.actuator.HUE,
      "nextStatement" : null,
      "previousStatement" : null,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.reset",
      "message0" : Blockly.MIXLY_MICROBIT_Reset_music
    });
    this.setTooltip(Blockly.MIXLY_MICROBIT_Reset_music);
  }
};

//


Blockly.Blocks.microbit_music_stop={
init:function(){
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_NOTONE_PIN)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_NOTONE_PIN);
  }
};



Blockly.Blocks['microbit_music_get_tempo'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.actuator.HUE,
      "output" : "Array",
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.get_tempo",
      "message0" : Blockly.MIXLY_MICROBIT_Get_current_tempo
    });
    this.setTooltip(Blockly.MIXLY_MICROBIT_Get_current_tempo);
  }
};

Blockly.Blocks.tone_set_tempo = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput('TICKS')
            .setCheck(Number)
            .appendField(Blockly.MIXLY_MICROBIT_JS_SET_TEMPO)
            .appendField(Blockly.MICROBIT_ACTUATOR_ticks);
        this.appendValueInput('BPM')
            .setCheck(Number)
            .appendField(Blockly.MICROBIT_ACTUATOR_bpm);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_MICROBIT_JS_SET_TEMPO1);
    }
}

Blockly.Blocks['speech_say'] = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput('VAR')
            .setCheck(String)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_MICROBIT_PY_ACTUATOR_SPEECH_SAY,'say'],[Blockly.MIXLY_MICROBIT_PY_ACTUATOR_SPEECH_SING,'sing'],[Blockly.MIXLY_MICROBIT_PY_ACTUATOR_SPEECH_PRENOUNCE,
              'pronounce']]),"MODE");
        this.appendValueInput('pitch')
            .setCheck(Number)
            .appendField(Blockly.MICROBIT_SPEECH_pitch);
        this.appendValueInput('speed')
            .setCheck(Number)
            .appendField(Blockly.MICROBIT_SPEECH_speed);
        this.appendValueInput('mouth')
            .setCheck(Number)
            .appendField(Blockly.MICROBIT_SPEECH_mouth);
        this.appendValueInput('throat')
            .setCheck(Number)
            .appendField(Blockly.MICROBIT_SPEECH_throat);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        var thisBlock = this;
        this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('MODE');
        var mode0 = Blockly.MIXLY_MICROBIT_PY_ACTUATOR_SPEECH;
        var mode1 = Blockly.MIXLY_MICROBIT_TYPE_STRING
        var TOOLTIPS = {
        'say':Blockly.MIXLY_MICROBIT_PY_ACTUATOR_SPEECH_SAY,
        'sing':Blockly.MIXLY_MICROBIT_PY_ACTUATOR_SPEECH_SING,
        'pronounce':Blockly.MIXLY_MICROBIT_PY_ACTUATOR_SPEECH_PRENOUNCE
      };
      return mode0 + TOOLTIPS[mode]+mode1;
    });
    }
};

// Blockly.Blocks['speech_sing'] = {
//     init: function () {
//         this.setColour(Blockly.Blocks.actuator.HUE);
//         this.appendValueInput('VAR')
//           .setCheck(String)
//           .appendField(Blockly.MIXLY_MICROBIT_PY_ACTUATOR_SPEECH_SING);
//         this.appendValueInput('pitch')
//             .setCheck(Number)
//             .appendField(Blockly.MICROBIT_SPEECH_pitch);
//         this.appendValueInput('speed')
//             .setCheck(Number)
//             .appendField(Blockly.MICROBIT_SPEECH_speed);
//         this.appendValueInput('mouth')
//             .setCheck(Number)
//             .appendField(Blockly.MICROBIT_SPEECH_mouth);
//         this.appendValueInput('throat')
//             .setCheck(Number)
//             .appendField(Blockly.MICROBIT_SPEECH_throat);
//         this.setPreviousStatement(true);
//         this.setNextStatement(true);
//         this.setInputsInline(true);
//     }
// };

// Blockly.Blocks['speech_prenounce'] = {
//     init: function () {
//         this.setColour(Blockly.Blocks.actuator.HUE);
//         this.appendValueInput('VAR')
//           .setCheck(String)
//           .appendField(Blockly.MIXLY_MICROBIT_PY_ACTUATOR_SPEECH_PRENOUNCE);
//         this.appendValueInput('pitch')
//             .setCheck(Number)
//             .appendField(Blockly.MICROBIT_SPEECH_pitch);
//         this.appendValueInput('speed')
//             .setCheck(Number)
//             .appendField(Blockly.MICROBIT_SPEECH_speed);
//         this.appendValueInput('mouth')
//             .setCheck(Number)
//             .appendField(Blockly.MICROBIT_SPEECH_mouth);
//         this.appendValueInput('throat')
//             .setCheck(Number)
//             .appendField(Blockly.MICROBIT_SPEECH_throat);
//         this.setPreviousStatement(true);
//         this.setNextStatement(true);
//         this.setInputsInline(true);
//     }
// };

Blockly.Blocks['speech_say_easy'] = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput('VAR')
            .setCheck(String)
            .appendField(Blockly.MIXLY_MICROBIT_PY_ACTUATOR_SPEECH_SAY);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['speech_sing_easy'] = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput('VAR')
          .setCheck(String)
          .appendField(Blockly.MIXLY_MICROBIT_PY_ACTUATOR_SPEECH_SING);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['speech_prenounce_easy'] = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput('VAR')
          .setCheck(String)
          .appendField(Blockly.MIXLY_MICROBIT_PY_ACTUATOR_SPEECH_PRENOUNCE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['speech_translate'] = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput('VAR')
          .setCheck(String)
          .appendField(Blockly.MICROBIT_SPEECH_translation);
        this.setOutput(true, String);
        this.setTooltip(Blockly.MIXLY_MICROBIT_PY_STORAGE_MAKE+Blockly.MIXLY_MICROBIT_TYPE_STRING+Blockly.MICROBIT_SPEECH_translation);
    }
};

Blockly.Blocks.servo_move = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
	  this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_SERVO)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendValueInput("DEGREE", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DEGREE_0_180);
    //this.appendValueInput("DELAY_TIME", Number)
        //.setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        //.appendField(Blockly.MIXLY_DELAY+'('+Blockly.MIXLY_DELAY_MS+')');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
  }
};

Blockly.Blocks['number'] = {
   init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"]]), 'op')
    this.setOutput(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_HIGHLOW);
  }
};

Blockly.Blocks['light'] = {
   init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ESP32_ON, "on"], [Blockly.MIXLY_ESP32_OFF, "off"],[Blockly.MIXLY_ESP32_TOGGLE, "toggle"]]), "flag");
    this.setOutput(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_HIGHLOW);
  }
};


Blockly.Blocks.led_bright = {
  init: function() {
  this.setColour(Blockly.Blocks.actuator.HUE);
  this.appendDummyInput()
      .appendField(Blockly.MIXLY_SET_LED);
 this.appendValueInput('led')
      .appendField(Blockly.LUXE_LED)
  this.appendValueInput('bright')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  this.setInputsInline(true);
  }
};

Blockly.Blocks.microbit_music_play={
init:function(){
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_DF_BUZZER+Blockly.MIXLY_MBOT_TONE);
    this.appendValueInput('pitch')
        .setCheck(Number)
        .appendField(Blockly.MIXLY_FREQUENCY);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_TONE);
  }
};

Blockly.Blocks.microbit_music_deinit={
init:function(){
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_DF_BUZZER+Blockly.MIXLY_MBOT_NOTONE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_NOTONE_PIN);
  }
};