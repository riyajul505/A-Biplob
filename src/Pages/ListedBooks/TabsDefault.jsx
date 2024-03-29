import {
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
} from "@material-tailwind/react";
import ShowBooks from "./ShowBooks";
   
  export function TabsDefault({readList, wishList}) {
    const data = [
      {
        label: "Read Books",
        value: "html",
        desc: <ShowBooks data={readList}></ShowBooks>,
      },
      {
        label: "Wishlist Books",
        value: "react",
        desc: <ShowBooks data={wishList}></ShowBooks>,
      }
    ];
   
    return (
      <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }