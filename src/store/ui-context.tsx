import React, { useState } from "react";

const UIContext = React.createContext({
  isSubtitleVisible: true,
  onToggleViewHandler: () => {},
  onSetViewHandler: (value: boolean) => {},
});

export const UIContextProvider = (props: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(true);

  function onToggleViewHandler() {
    setIsSubtitleVisible(!isSubtitleVisible);
  }

  function onSetViewHandler(value: boolean) {
    setIsSubtitleVisible(value);
  }

  return (
    <UIContext.Provider
      value={{
        isSubtitleVisible: isSubtitleVisible,
        onToggleViewHandler: onToggleViewHandler,
        onSetViewHandler: onSetViewHandler,
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};
export default UIContext;
