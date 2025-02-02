export const sidebarMotion = {
  container: {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },
  item: (index: number) => ({
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, delay: index * 0.05 },
    },
  }),
  button: {
    tap: { scale: 0.95 },
  },
}
