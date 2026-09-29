export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Gradient orbs */}
      <div className="orb orb-primary" />
      <div className="orb orb-secondary" />
    </div>
  );
};
