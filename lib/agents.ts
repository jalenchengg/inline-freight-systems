export interface Agent {
  name: string;
  address: string;
  tel: string;
  fax: string;
  email: string;
}

export const tabs = [
  "North America",
  "Asia",
  "Canada",
  "Mexico",
  "United Kingdom",
  "South America",
  "Europe",
  "Middle East",
];

export const agentData: Record<string, Agent[]> = {
  Asia: [
    {
      name: "Hong Kong | RS Logistics Ltd ℅ Inline Freight System Inc",
      address: `Rm 06a, 10/F, Cdw Building
No.388 Castle Peak Road
Tsuen Wan, N.T. Hong Kong`,
      tel: "(852) 2121 8096",
      fax: "(852) 2121 8097",
      email: "hongkong@rslog.com",
    },
    {
      name: "Shanghai | RS Logistics Ltd ℅ Inline Freight System Inc",
      address: `Room 901-902, Financial Street Hailun Centre
440 Hai Lun Road
Hongkou District, Shanghai, China`,
      tel: "(86) 21 – 6072 2128",
      fax: "(86) 21 – 6072 2129",
      email: "shanghai@rslog.com",
    },
    {
      name: "Shenzhen | RS Logistics Ltd ℅ Inline Freight System Inc",
      address: `Room 338, Guangfa Building
2007 Dong Men Nan Road
Shenzhen, China`,
      tel: "(86) 755 – 2519 8257",
      fax: "(86) 755 – 8229 1491",
      email: "shenzhen@rslog.com",
    },
    {
      name: "Xiamen | RS Logistics Ltd ℅ Inline Freight System Inc",
      address: `Room 807, Block B, Pilot Free Trade Zone, No.4 Yu'nan Rd
Xiamen, Fujian, China`,
      tel: "(86) 592 – 555 0180",
      fax: "(86) 592 – 555 0076",
      email: "xiamen@rslog.com",
    },
    {
      name: "Ningbo | RS Logistics Ltd ℅ Inline Freight System Inc",
      address: `Room 902, Building No.1, Greenland Center
No.9 Shijun Street, Jiangbei District
Ningbo, China`,
      tel: "(86) 574 – 2772 0078",
      fax: "(86) 574 – 2772 0058",
      email: "ningbo@rslog.com",
    },
    {
      name: "Qingdao | RS Logistics Ltd ℅ Inline Freight System Inc",
      address: `Rm 2304-2305, Building 2, Excellence Century Center
No.31 Longcheng Rd, Shibei District
Qingdao, China`,
      tel: "(86) 532 – 5855 5201",
      fax: "(86) 532 – 5855 5202",
      email: "qingdao@rslog.com",
    },
    {
      name: "Tianjin | RS Logistics Ltd ℅ Inline Freight System Inc",
      address: `Room 6007b, Tianjin Modern International Finance Center
136 Chifeng Road, Heping District
Tianjin, China`,
      tel: "(86) 22 – 8219 3960",
      fax: "TBC",
      email: "tianjin@rslog.com",
    },
    {
      name: "Vietnam | RS Logistics Ltd ℅ Inline Freight System Inc",
      address: `Legend Building, 4th Floor, 92 Thich Quang Duc Street
Ward 5, Phu Nhuan District
Hochiminh City`,
      tel: "(84) 28 3636 8154",
      fax: "N/A",
      email: "vietnam@rslog.com",
    },
    {
      name: "Malaysia | RS Logistics Ltd ℅ Inline Freight System Inc",
      address: `Unit 8, Level 21, Menara 1mk, No.1, Jalan Kiara
50480 Kuala Lumpur
Malaysia`,
      tel: "(60) 36 206 5579",
      fax: "N/A",
      email: "malaysia@rslog.com",
    },
    {
      name: "Thailand | RS Logistics Ltd ℅ Inline Freight System Inc",
      address: `1023 Ms Siam Tower, Room No. 162-163, Floor 16th, Rama Iii Road
Chongnonsi, Yannawa
Bangkok 10120, Thailand`,
      tel: "+66 (0)2 294 8188",
      fax: "+66 (0)2 294 8199",
      email: "thailand@rslog.com",
    },
    {
      name: "Indonesia | RS Logistics Ltd ℅ Inline Freight System Inc",
      address: `Unit #9-02a, 9th Floor, Gedung Menara Palma, Jalan Hr Rasuna Said, Blok X2, Kav.6
Kuningan Timur, Setiabudi
Jakarta Selatan 12950`,
      tel: "(62) 21 3006 0008",
      fax: "N/A",
      email: "indonesia@rslog.com",
    },
    {
      name: "Taiwan | RS Logistics Ltd ℅ Inline Freight System Inc",
      address: `11F-1, No. 57, Sec. 3, Minsheng E. Rd., Zhongshan Dist., Taipei City 104080, Taiwan`,
      tel: "886 (2) 2500 6226",
      fax: "886 (2) 2500 6266",
      email: "taiwan@rslog.com",
    },
  ],

  Europe: [
    {
      name: "Germany | ALFONS KOESTER & CO. GMBH ℅ Inline Freight System Inc",
      address: `GLOBAL FREIGHT LOGISTICS
BEIM STROHHAUSE 2
HAMBURG, GERMANY`,
      tel: "49/40/2 84 24-245",
      fax: "49/40/2 84 24-286",
      email: "l.michau@alfons-koester.de",
    },
  ],

  // Other regions empty for now
  "North America": [],
  Canada: [],
  Mexico: [],
  "United Kingdom": [],
  "South America": [],
  "Middle East": [],
};
