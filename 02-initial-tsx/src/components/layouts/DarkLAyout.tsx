import { FC, PropsWithChildren } from "react";

/* type Props ={
  children: React.ReactNode;
} */

export const DarkLAyout: FC<PropsWithChildren> = ( {children} ) =>  (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,.5",
        borderRadius: "5px",
        padding: "10px",
      }}>
      <h3>Dark-Layout</h3>
      <div>{ children }</div>
    </div>
  );

