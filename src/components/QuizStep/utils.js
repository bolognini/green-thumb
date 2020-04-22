const handleSelected = (selectedItem, selectedPreference, setSelected, setSelectedPreference, setDisabled, stepName) => {
  setSelected(selectedItem)
  setSelectedPreference(stepName, selectedPreference)
  setDisabled(false)
}

export default handleSelected
