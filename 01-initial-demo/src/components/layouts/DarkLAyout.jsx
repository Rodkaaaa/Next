export const DarkLAyout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}>
      <h3>White-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
