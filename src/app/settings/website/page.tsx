"use client";
import MenuVertical from "@/components/MenuVertical";
import { navigation } from "../page";

export default function PosSystem() {
  return (
    <>
      <main className="xl:pl-96">
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
          {/* Main area */}
        </div>
      </main>

      <aside className="fixed bottom-0 left-20 top-16 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
        {/* Secondary column (hidden on smaller screens) */}
        <MenuVertical
          menu={navigation.map((menu) => {
            if (menu.name === "Website") {
              return {
                ...menu,
                current: true,
              };
            }
            return menu;
          })}
        />
      </aside>
    </>
  );
}

