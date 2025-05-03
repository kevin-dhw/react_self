import React from "react";
import { create } from "zustand";
import Dashborad from "../components/content/dashborad";
import Dashborad2 from "../components/content/dashborad2";
import Form from "../components/content/form";

export interface tabListItem {
  isSelected: boolean;
  label: string;
  component: React.FC;
}
export interface TabItem {
  title: string;
  isExpand: boolean;
  list: tabListItem[];
}
export interface State {
  TabData: TabItem[];
}
export interface Action {
  setExpandItem: (index: number) => void;
  setActiveItem: (ndex: number, idx: number) => void;
  // setCurItem: () => React.FC;
}

const useTabStore = create<State & Action>((set) => ({
  TabData: [
    {
      title: "概览",
      isExpand: true,
      list: [
        {
          label: "广告概览",
          isSelected: true,
          component: Dashborad,
        },
        {
          label: "广告概览2",
          isSelected: false,
          component: Dashborad2,
        },
      ],
    },
    {
      title: "报表",
      isExpand: false,
      list: [
        {
          label: "广告报表",
          isSelected: false,
          component: Form,
        },
      ],
    },
  ],
  setExpandItem: (index: number) => {
    return set((state) => {
      state.TabData.forEach((item, idx) => {
        if (idx === index) {
          item.isExpand = !item.isExpand;
        }
      });
      return { TabData: state.TabData };
    });
  },
  setActiveItem: (index: number, idx: number) => {
    return set((state) => {
      state.TabData.forEach((item, i1) => {
        item.list.forEach((ele, i2) => {
          if (i2 === idx && i1 === index) {
            ele.isSelected = true;
          } else {
            ele.isSelected = false;
          }
        });
      });
      return { TabData: state.TabData };
    });
  },
}));

export default useTabStore;
