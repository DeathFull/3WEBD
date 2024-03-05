import { createContext, ReactNode, useEffect, useState } from "react";

export const ListContext = createContext({
  lists: {
    default: [""],
  },
  addList: (list: string) => {},
  removeList: (list: string) => {},
  addToList: (list: string, item: string) => {},
  removeFromList: (list: string, item: string) => {},
});

export const ListProvider = ({ children }: { children: ReactNode }) => {
  const [lists, setLists] = useState(() => {
    const savedLists = localStorage.getItem("lists");
    return savedLists ? JSON.parse(savedLists) : { default: [""] };
  });

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const addList = (list: string) => {
    setLists((prevLists: { [key: string]: string[] }) => ({
      ...prevLists,
      [list]: [],
    }));
  };

  const removeList = (list: string) => {
    setLists((prevLists: { [key: string]: string[] }) => {
      const newLists = { ...prevLists };
      delete newLists[list];
      return newLists;
    });
  };

  const addToList = (list: string, item: string) => {
    setLists((prevLists: { [key: string]: string[] }) => {
      return { ...prevLists, [list]: [...prevLists[list], item] };
    });
  };

  const removeFromList = (list: string, item: string) => {
    setLists((prevLists: { [key: string]: string[] }) => {
      return {
        ...prevLists,
        [list]: prevLists[list].filter((i) => i !== item),
      };
    });
  };

  return (
    <ListContext.Provider
      value={{ lists, addList, removeList, addToList, removeFromList }}
    >
      {children}
    </ListContext.Provider>
  );
};
