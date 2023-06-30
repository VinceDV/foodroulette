import React, { useState } from "react";

import { components } from "react-select";
import Createable from "react-select/creatable";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const colourOptions = [
    { label: 'Red', value: 'Red' },
    { label: 'Blue', value: 'Blue' },
    { label: 'Green', value: 'Green' },
    { label: 'White', value: 'White' },
    { label: 'Black', value: 'Black' }
  ];
  
function arrayMove(array, from, to) {
  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}

const SortableMultiValue = SortableElement((props) => {
  //
  //
  // this prevents the menu from being opened/closed when the user clicks
  // on a value to begin dragging it. ideally, detecting a click (instead of
  // a drag) would still focus the control and toggle the menu, but that
  // requires some magic with refs that are out of scope for this example
  const onMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const innerProps = { onMouseDown };
  return <components.MultiValue {...props} innerProps={innerProps} />;
});
const SortableSelect = SortableContainer(Createable);

export default function MultiSelectSort() {
  const [options] = useState(colourOptions);

  const [selected, setSelected] = React.useState([]);

  const onChange = (selectedOptions) => setSelected(selectedOptions);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newValue = arrayMove(selected, oldIndex, newIndex);
    setSelected(newValue);
    console.log(
      "Values sorted:",
      newValue.map((i) => i.value)
    );
  };

  return (
    <SortableSelect
      // react-sortable-hoc props:
      axis="xy"
      onSortEnd={onSortEnd}
      distance={4}
      // small fix for https://github.com/clauderic/react-sortable-hoc/pull/352:
      getHelperDimensions={({ node }) => node.getBoundingClientRect()}
      // react-select props:
      isMulti
      options={options}
      value={selected}
      onChange={onChange}
      components={{
        MultiValue: SortableMultiValue
      }}
      closeMenuOnSelect={false}
    />
  );
}
