export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "ERP & NetSuite",
    skills: [
      "SuiteFlow approvals & roles/permissions",
      "SuiteAnalytics Workbooks & saved searches",
      "Work Orders, Assemblies, WIP & Routings",
      "Inventory status, bins, cutovers",
      "CSV imports, data migration, UAT/SIT",
    ],
  },
  {
    title: "Ops & Delivery",
    skills: [
      "Process mapping & SOPs",
      "KPI design & root cause analysis",
      "Change management & stakeholder comms",
      "Requirements, user stories, RAID logs",
    ],
  },
  {
    title: "Data, AI & Dev",
    skills: [
      "Excel (Power Query, pivots, XLOOKUP)",
      "Python (pandas)",
      "OpenAI API (tool calling, structured outputs)",
      "Swift/SwiftUI, Git, JIRA/Confluence",
    ],
  },
];
