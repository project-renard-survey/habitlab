{
  list_all_interventions
  get_intervention_info
} = require 'libs_backend/intervention_utils'

{polymer_ext} = require 'libs_frontend/polymer_utils'

polymer_ext {
  is: 'create-intervention-dialog'
  properties: {
    goal_info_list: {
      type: Array
    }
    intervention_list: {
      type: Array
    }
    current_intervention:{
      type: String
      value: ''
    }
  }
  open_create_new_intervention_dialog: ->
    this.is_modify_mode=false
    this.$$('#create_new_intervention_dialog').open()
  open_existing_custom_intervention_dialog: ->
    this.$$('#open_existing_custom_intervention').open()
  open_edit_intervention_info_dialog: ->>
    intervention_info=await get_intervention_info(this.current_intervention)
    goal_name=intervention_info.goals[0]
    goal_names_list = this.goal_info_list.map (.name)
    this.$.goal_selector.selected = goal_names_list.indexOf(goal_name)    
    this.$.intervention_description.value=intervention_info.description
    this.$.intervention_name.value=intervention_info.name
    this.$.dialog_button.innerHTML='MODIFY'
    this.$$('#create_new_intervention_dialog').open()
  validate_intervention_name: ->>
    proposed_intervention_name=this.$.intervention_name.value
    if proposed_intervention_name.indexOf(' ') != -1
      this.$$('#hint').innerHTML = 'Cannot contain spaces'
      return
    if proposed_intervention_name == ''
      this.$$('#hint').innerHTML = 'Must be non-empty'
      return
    all_interventions = await list_all_interventions()
    if (this.current_intervention=='' && all_interventions.indexOf(proposed_intervention_name) != -1) || (this.current_intervention!='' && all_interventions.indexOf(proposed_intervention_name) != -1)
        this.$$('#hint').innerHTML = 'An intervention with this name already exists'
        return
    this.$$('#create_new_intervention_dialog').close()
    if this.current_intervention==''
      this.fire('display_new_intervention', {
      goal_info: this.$.goal_selector.selectedItem.goal_info
      intervention_name: this.$.intervention_name.value
      intervention_description: this.$.intervention_description.value
      })
    else
      console.log 'is_modify_mode'
      this.fire('modify_intervention_info', {})
      this.current_intervention=''
  intervention_selector_changed: (change_info) ->>
    # intervention_name = change_info.detail.item.intervention_name
    # this.intervention_info = intervention_info = await get_intervention_info(intervention_name)
    # this.js_editors[intervention_name].setValue(intervention_info.code)
    # this.$$('#open_existing_custom_intervention').close()
    console.log 'intervention_selector_changed'
  # edit_intervention_info:
}
